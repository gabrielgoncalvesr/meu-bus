import React, { useEffect, useState } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import socketIOClient from "socket.io-client";


import { SlideBar, Map, MapLocation } from '../../components';

import request from '../../services/api';

import styles from './styles';


import MapView from 'react-native-maps';

const socket = socketIOClient("http://192.168.0.148:4001");


const Tracking = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [lineInformations, setLineInformations] = useState('');

    const [markerList, setMarkerList] = useState([]);
    const [routeColor, setRouteColor] = useState('');
    const [coordinatesStops, setCoordinatesStops] = useState([]);
    const [coordinatesRoute, setCoordinatesRoute] = useState([]);

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [coordenatesLoaded, setCoordenatesLoaded] = useState(false);

    const navigateBack = () => {
        socket.disconnect();
        navigation.goBack();
    }

    async function loadData() {
        const busData = route.params.busData;

        const responseRoute = await request.get('/bus/trip', {
            params: { busCode: busData.id, direction: 0 }
        });

        const coordinatesRoute = responseRoute.data[0]['Trips'][0]['Routes'].map(item => {
            return { latitude: Number(item.latitude), longitude: Number(item.longitude) }
        });

        const responseStops = await request.get('/stop/route', {
            params: { tripId: busData.id + "-" + 0 }
        });

        const coordinatesStops = responseStops.data.map(item => {
            return { description: item.name, latitude: Number(item['Stop'].latitude), longitude: Number(item['Stop'].longitude) }
        });

        setRouteColor("#" + busData.color);
        setCoordinatesRoute(coordinatesRoute);
        setCoordinatesStops(coordinatesStops);


        setInfoLoaded(true);
    }

    const loadCoordinates = async () => {
        const busData = route.params.busData;

        const responseLine = await request.get('/sptrans/search/line', {
            params: { term: busData.shortName }
        });

        const lineInformations = responseLine.data;

        setLineInformations(lineInformations);

        const lineIdentifier = lineInformations[0]['lineIdentifier'];

        console.log("lineIdentifier" + lineIdentifier)

        // const responsePosition = await request.get('/sptrans/search/position', {
        //     params: { code: lineIdentifier }
        // });


        console.log("entrando")
        socket.on("/position", data => {
            console.log(data)

            const markerList = data.map(item => {
                return { vehiclePrefix: item.vehiclePrefix, latitude: item.latitudePosition, longitude: item.longitudePosition }
            });
    
            setMarkerList(markerList);
        });

        socket.emit("/position", { code: lineIdentifier });

        setCoordenatesLoaded(true);
    }











    useEffect(() => {
        loadData();
        loadCoordinates();
    }, []);

    return (
        <SlideBar
            isLongBar={true}
            mainContent={
                <View style={styles.containerMap}>
                    {
                        (infoLoaded && coordenatesLoaded) &&
                        <Map
                            routeColor={routeColor}
                            coordinatesRoute={coordinatesRoute}
                            coordinatesStops={coordinatesStops}
                        >
                            {(markerList && markerList.length) &&
                                markerList.map((item, index) => (
                                    <MapLocation
                                        key={index}
                                        coordinates={item}
                                    />
                                ))
                            }
                        </Map>
                    }
                    <TouchableOpacity style={styles.backIcon} onPress={() => navigateBack()}>
                        <Ionicons name="md-arrow-round-back" size={30} color="#828282" />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.containerAction}>
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.buttonFunction} onPress={() => console.log(coordinates.length)}>
                            <View style={styles.buttonIconBar}>
                                <FontAwesome5 style={styles.buttonIcon} name="bus" size={24} />
                            </View>

                            <Text style={styles.buttonTitle}>SPTRANS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonFunction} onPress={() => console.log("bbbb")}>
                            <View style={styles.buttonIconBar}>
                                <Ionicons style={styles.buttonIcon} name="md-bus" size={30} />
                            </View>

                            <Text style={styles.buttonTitle}>EMTU</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.divisorBar}>
                        <Text>PESQUISA DE ROTAS</Text>
                    </View>

                    <View style={styles.actionBar}>
                        <Text>sda</Text>
                    </View>
                </View>
            }
        />
    );
}

export default Tracking;