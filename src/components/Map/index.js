import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { View, Image } from 'react-native';

import styles from './styles';

const MapComponent = (props) => {

    const { coordinatesStops, routeColor, coordinatesRoute, busesPosition } = props;

    const [mapNotLoaded, setMapNotLoaded] = useState(false);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        (async () => {
            setMapNotLoaded(false);

            try {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setMapNotLoaded(true);
                }

                let location = await Location.getCurrentPositionAsync({});

                const initialRegion = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.08,
                    longitudeDelta: 0.09,
                }

                setInitialRegion(initialRegion);
            } catch (error) {
                setMapNotLoaded(true);
            }
        })();
    }, []);

    console.log(busesPosition)

    return (
        <View style={styles.container}>
            {
                initialRegion &&
                <MapView initialRegion={initialRegion} style={styles.map} >
                    <MapView.Marker
                        title={"Your Current Position"}
                        coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
                    />

                    {(busesPosition && busesPosition.length > 0) &&
                        busesPosition.map((item, index) => (
                            <MapView.Marker
                                key={index}
                                title={item.vehiclePrefix}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                }}
                            >
                                <Image
                                    style={styles.busIconImage}
                                    source={require('../../assets/images/icons/busIcon.png')}
                                />
                            </MapView.Marker>
                        ))
                    }

                    {(coordinatesStops && coordinatesStops.length > 0) &&
                        coordinatesStops.map((item, index) => (
                            <MapView.Marker
                                key={index}
                                title={item.description}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                }}
                            >
                                <View style={[styles.stopBusCircle, { backgroundColor: '#ffffff', borderColor: routeColor ? routeColor : "#002d96" }]} />
                            </MapView.Marker>
                        ))
                    }

                    {(coordinatesRoute && coordinatesRoute.length) &&
                        <MapView.Polyline
                            coordinates={coordinatesRoute}
                            strokeWidth={5}
                            strokeColor={routeColor ? routeColor : "#002d96"}
                        />
                    }
                </MapView>
            }
        </View>
    );
}

export default MapComponent;