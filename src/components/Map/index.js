import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { View, Image } from 'react-native';

import MapView from 'react-native-maps';

import styles from './styles';

const MapComponent = (props) => {

    const { coordinatesStops, routeColor, coordinatesRoute, busesPosition } = props;

    const [coordinate, setCoordinate] = useState({ latitude: -23.4285, longitude: -46.795379 });
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            const initialRegion = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.08,
                longitudeDelta: 0.09,
            }

            setInitialRegion(initialRegion);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

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