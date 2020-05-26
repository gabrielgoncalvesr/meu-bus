import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { SlideBar, Map } from '../../components';

import styles from './styles';

const Home = () => {
    const navigation = useNavigation();

    const navigateToList = (typeSearch) => {
        navigation.navigate('BusListScreen', { typeSearch });
    }

    return (
        <SlideBar
            mainContent={
                <View style={styles.containerMap}>
                    <Map />
                    <TouchableOpacity style={styles.userIcon} onPress={() => { console.log("user") }}>
                        <FontAwesome5 name="user-circle" size={35} />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.containerAction}>
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.buttonFunction} onPress={() => navigateToList("SPTRANS")}>
                            <View style={styles.buttonIconBar}>
                                <FontAwesome5 style={styles.buttonIcon} name="bus" size={24} />
                            </View>

                            <Text style={styles.buttonTitle}>SPTRANS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonFunction} onPress={() => navigateToList("EMTU")}>
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

export default Home;