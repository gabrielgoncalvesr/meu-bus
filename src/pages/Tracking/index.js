import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import socketIOClient from "socket.io-client";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, YellowBox, ScrollView } from 'react-native';
import { SlideBar, Map, MapLocation } from '../../components';

import request from '../../services/api';

import styles from './styles';
import { getThemeColors } from '../../util/themeContext';
import { getTranslation } from '../../util/locales';
import { DivisorBar } from '../../components';
import { set } from 'react-native-reanimated';

const socket = socketIOClient("http://192.168.0.148:4000", { jsonp: false, agent: '-', pfx: '-', cert: '-', ca: '-', ciphers: '-', rejectUnauthorized: '-', perMessageDeflate: '-' });

const Tracking = () => {

    const colors = getThemeColors();

    const route = useRoute();
    const navigation = useNavigation();

    const [lineInformations, setLineInformations] = useState('');

    const [markerList, setMarkerList] = useState([]);
    const [routeColor, setRouteColor] = useState('');
    const [coordinatesStops, setCoordinatesStops] = useState([]);
    const [coordinatesRoute, setCoordinatesRoute] = useState([]);

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [coordenatesLoaded, setCoordenatesLoaded] = useState(false);

    const [busObject, setBusObject] = useState({});

    const navigateBack = () => {
        socket.disconnect();
        navigation.goBack();
    }

    async function loadData() {
        const { busData } = route.params;

        const responseRoute = await request.get('/bus/trip', {
            params: { busId: busData.id, direction: 0 }
        });

        const coordinatesRoute = responseRoute.data['Routes'].map(item => {
            return { latitude: Number(item.latitude), longitude: Number(item.longitude) }
        });

        const responseStops = await request.get('/stop/route', {
            params: { tripId: busData.id + "-" + 0 }
        });

        // console.log(responseStops)

        const coordinatesStops = responseStops.data.map(item => {
            return { description: item['Stop'].name, latitude: Number(item['Stop'].latitude), longitude: Number(item['Stop'].longitude) }
        });

        setRouteColor("#" + busData.color);
        setCoordinatesRoute(coordinatesRoute);
        setCoordinatesStops(coordinatesStops);

        setInfoLoaded(true);
    }

    const loadCoordinates = async () => {
        const { busData } = route.params;

        const responseLine = await request.get('/sptrans/search/line', {
            params: { term: busData.shortName }
        });

        const lineInformations = responseLine.data;

        setLineInformations(lineInformations);

        const lineIdentifier = lineInformations[0]['lineIdentifier'];

        socket.on("/position", data => {
            console.log(data)
            console.log("data")

            const markerList = data.map(item => {
                return { vehiclePrefix: item.vehiclePrefix, latitude: item.latitudePosition, longitude: item.longitudePosition }
            });

            setMarkerList(markerList);
        });

        socket.emit("/position", { code: lineIdentifier });

        setCoordenatesLoaded(true);
    }











    useEffect(() => {
        const { busData } = route.params;

        setBusObject(busData);

        loadData();
        loadCoordinates();
    }, []);

    return (
        <SlideBar
            isLongBar={true}
            mainContent={
                <View style={styles.containerMap}>
                    {/* <Map
                        routeColor={routeColor}
                        coordinatesRoute={coordinatesRoute}
                        coordinatesStops={coordinatesStops}
                    >
                        {(markerList && markerList.length && markerList.length > 0) &&
                            markerList.map((item, index) => (
                                <MapLocation
                                    key={index}
                                    coordinates={item}
                                />
                            ))
                        }
                    </Map> */}

                    <TouchableOpacity
                        style={[styles.backIcon, { backgroundColor: colors.secondary }]}
                        onPress={() => navigateBack()}
                    >
                        <Ionicons
                            style={[styles.icon, { color: colors.primary }]}
                            name="md-arrow-round-back"
                        />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={[styles.tagContent, { backgroundColor: '#' + busObject.color }]}>
                            <Text style={[styles.tagText, { color: '#' + busObject.textColor }]}>
                                {busObject.shortName}
                            </Text>
                        </View>

                        <View style={styles.informationContent}>
                            <Text style={[styles.informationText, { color: colors.text }]}>
                                {busObject.longName}
                            </Text>
                        </View>
                    </View>

                    <DivisorBar text={getTranslation('words.routes')} />

                    <ScrollView>
                        {
                            coordinatesStops.map((item, index) => {
                                return (
                                    <View style={styles.stopContent}>
                                        <View style={styles.iconContent}>
                                            <FontAwesome5
                                                style={[styles.icon, { color: colors.text }]}
                                                name="grip-lines-vertical"
                                            />
                                        </View>
                                        <View style={styles.descriptionContent}>
                                            <Text
                                                key={index}
                                                style={{ color: colors.text }}
                                            >
                                                {item.description}
                                            </Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            }
        />
    );
}

export default Tracking;