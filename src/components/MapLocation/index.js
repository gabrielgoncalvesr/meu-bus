import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import MapView from 'react-native-maps';

import styles from './styles';

const MapLocationComponent = ({
    coordinates,
}) => {

    const [mapMarker, setMapMarker] = useState();
    const [coordinate, setCoordinate] = useState();

    useEffect(() => {
        console.log("new coordinates", coordinates)
        //console.log("load coordinates" + coordinates)

        const newCoordinate = { latitude: coordinates.latitude, longitude: coordinates.longitude };
        console.log(newCoordinate)

        console.log("teste1");
        // if (mapMarker) {
        //     mapMarker._component.animateMarkerToCoordinate(newCoordinate, 500);
        // }

    }, [coordinates]);

    //{ latitude: coordinates.latitude, longitude: coordinates.longitude }

    return (
        <MapView.Marker.Animated
            ref={marker => setMapMarker(marker)}
            coordinate={coordinate}
        >
            <Image source={require('../../assets/busIcon.png')} style={styles.busIconImage} />
        </MapView.Marker.Animated>
    );
}

export default MapLocationComponent;