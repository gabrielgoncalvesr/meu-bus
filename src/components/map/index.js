import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';

import MapView from 'react-native-maps';

import styles from './styles';

const MapComponent = () => {
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
                <MapView
                    initialRegion={initialRegion}
                    style={styles.map}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: -23.6088023,
                            longitude: -46.7784665
                        }}
                        title={"Your Current Position"}
                    />
                </MapView>
            }
        </View>
    );
}

export default MapComponent;