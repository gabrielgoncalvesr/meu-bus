import React, { useEffect, useState } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { SlideBar, Map } from '../../components';

import request from '../../services/api';

import styles from './styles';

const Tracking = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [coordinates, setCoordinates] = useState([]);

    const navigateBack = () => {
        navigation.goBack();
    }

    async function loadData() {
        const busData = route.params.busData;

        console.log("busData:", busData);

        const response = await request.get('/bus/trip', {
            params: { busCode: busData.id, direction: 0 }
        });

        const coordinates = response.data[0]['Trips'][0]['Routes'].map(item => {
            return { latitude: Number(item.latitude), longitude: Number(item.longitude) }
        });

        console.log(coordinates)

        setCoordinates(coordinates);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <SlideBar
            isLongBar={true}
            mainContent={
                <View style={styles.containerMap}>
                    <Map
                        coordinates={coordinates}
                    />
                    <TouchableOpacity style={styles.backIcon} onPress={() => navigateBack()}>
                        <Ionicons name="md-arrow-round-back" size={30} color="#828282" />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.containerAction}>
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.buttonFunction} onPress={() => console.log("aaaa")}>
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