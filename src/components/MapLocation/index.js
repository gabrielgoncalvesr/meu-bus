import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import MapView from 'react-native-maps';

import styles from './styles';

const MapLocationComponent = ({
    coordinates,
}) => {
    const [mapMarker, setMapMarker] = useState();

    useEffect(() => {
        //console.log("TESTE", coordinates)
        //console.log("load coordinates" + coordinates)

        // const newCoordinate = { latitude: coordinates.latitude, longitude: coordinates.longitude };

        // if (Platform.OS === 'android') {
        //     console.log("teste1");
        //     if (mapMarker) {
        //         mapMarker._component.animateMarkerToCoordinate(newCoordinate, 500);
        //     }
        // } else {
        //     console.log("teste2");
        //     coordinate.timing(newCoordinate).start();
        //     setCoordinate(coordinate);
        // }
    }, [coordinates]);

    return (
        <MapView.Marker.Animated
            ref={marker => setMapMarker(marker)}
            coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
        >
            <Image source={require('../../assets/busIcon.png')} style={styles.busIconImage} />
        </MapView.Marker.Animated>
    );
}

export default MapLocationComponent;