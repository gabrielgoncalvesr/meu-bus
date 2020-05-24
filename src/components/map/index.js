import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Location from 'expo-location';

import MapView from 'react-native-maps';

import styles from './styles';

const MapComponent = ({
    coordinatesRoute,
    coordinatesStops
}) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    //const [coordinates, setCoordinates] = useState([]);
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

    console.log(coordinatesStops)

    return (
        <View style={styles.container}>
            {
                initialRegion &&
                <MapView
                    initialRegion={initialRegion}
                    style={styles.map}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: -23.6088023,//initialRegion.latitude
                            longitude: -46.7784665//initialRegion.longitude
                        }}
                        title={"Your Current Position"}
                    />

                    {
                        (coordinatesStops && coordinatesStops.length) &&
                        coordinatesStops.map((item, index) => (
                            <MapView.Marker
                                key={index}
                                title={item.description}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude
                                }}
                            >

                                <Image
                                    style={styles.stopBusImg}
                                    source={require('../../assets/stopBusIcon.png')}
                                />

                            </MapView.Marker>
                        ))
                    }

                    {
                        (coordinatesRoute && coordinatesRoute.length) &&
                        <MapView.Polyline
                            coordinates={coordinatesRoute}
                            strokeWidth={5}
                            strokeColor="#002d96"
                        />
                    }
                </MapView>
            }
        </View>
    );
}

export default MapComponent;