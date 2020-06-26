import React, { useEffect, useState, useContext } from 'react';
import socketIOClient from "socket.io-client";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { SlideBar, Map, DivisorBar } from '../../components';

import request from '../../services/api';
import { getTranslation } from '../../util/locales';
import { getThemeColors, ThemeContext } from '../../util/themeContext';

import styles from './styles';

const socket = socketIOClient("http://192.168.0.148:4000", { jsonp: false, agent: '-', pfx: '-', cert: '-', ca: '-', ciphers: '-', rejectUnauthorized: '-', perMessageDeflate: '-' });

const Tracking = () => {

    const route = useRoute();
    const colors = getThemeColors();
    const navigation = useNavigation();
    const { getToken } = useContext(ThemeContext);

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
        const token = await getToken();

        const { busData } = route.params;

        const responseRoute = await request.get('/bus/trip', {
            params: { busId: busData.id, direction: 0 },
            headers: { 'x-access-token': token }
        });

        const coordinatesRoute = responseRoute.data['Routes'].map(item => {
            return { latitude: Number(item.latitude), longitude: Number(item.longitude) }
        });

        const responseStops = await request.get('/stop/route', {
            params: { tripId: busData.id + "-" + 0 },
            headers: { 'x-access-token': token }
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
        const token = await getToken();

        const { busData } = route.params;

        const responseLine = await request.get('/sptrans/search/line', {
            params: { term: busData.shortName },
            headers: { 'x-access-token': token }
        });

        const lineInformations = responseLine.data;

        setLineInformations(lineInformations);

        const lineIdentifier = lineInformations[0]['lineIdentifier'];

        socket.on("/position", data => {
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
                    <Map
                        routeColor={routeColor}
                        busesPosition={markerList}
                        coordinatesRoute={coordinatesRoute}
                        coordinatesStops={coordinatesStops}
                    />

                    <TouchableOpacity
                        style={[styles.backIcon, { backgroundColor: colors.cardText }]}
                        onPress={() => navigateBack()}
                    >
                        <Ionicons
                            style={[styles.icon, { color: colors.card }]}
                            name="md-arrow-round-back"
                        />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={[styles.container, { backgroundColor: colors.background }]}>
                    <View style={styles.header}>
                        <View style={[styles.tagContent, { backgroundColor: '#' + busObject.color }]}>
                            <Text style={[styles.tagText, { color: busObject.textColor ? '#' + busObject.textColor : colors.text }]}>
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
                                    <View
                                        key={index}
                                        style={
                                            index === 0
                                                ? styles.firstContent
                                                : index === coordinatesStops.length - 1
                                                    ? styles.lastContent
                                                    : styles.stopContent
                                        }
                                    >
                                        <View style={styles.iconContent}>
                                            <View style={[styles.iconBar, { backgroundColor: '#' + busObject.color }]}>
                                                <FontAwesome5
                                                    size={15}
                                                    style={
                                                        index === 0
                                                            ? { position: 'absolute', width: 15, bottom: 22 }
                                                            : index === coordinatesStops.length - 1
                                                                ? { position: 'absolute', width: 15, top: 22 }
                                                                : { position: 'absolute', width: 15 }}
                                                    name="dot-circle"
                                                    color={'#' + busObject.color}
                                                />

                                            </View>
                                        </View>
                                        <View style={styles.descriptionContent}>
                                            <Text style={{ color: colors.text }}>
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