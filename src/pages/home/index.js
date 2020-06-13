import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { SlideBar, Map } from '../../components';

import styles from './styles';

const Home = () => {
    const navigation = useNavigation();
    
    const navigateToUser = () => {
        navigation.navigate('UserScreen');
    }
    
    const navigateToList = () => {
        navigation.navigate('BusListScreen');
    }

    const navigateToSearch = () => {
        navigation.navigate('SearchScreen');
    }

    return (
        <SlideBar
            mainContent={
                <View style={styles.containerMap}>
                    <Map />
                    <TouchableOpacity style={styles.userIcon} onPress={() => navigateToUser()}>
                        <FontAwesome5 name="user-circle" size={35} />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.containerAction}>
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.buttonFunction} onPress={() => navigateToList()}>
                            <View style={styles.buttonIconBar}>
                                <FontAwesome5 style={styles.buttonIcon} name="bus" size={24} />
                            </View>

                            <Text style={styles.buttonTitle}>Ver Linhas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonFunction} onPress={() => navigateToSearch()}>
                            <View style={styles.buttonIconBar}>
                                <FontAwesome style={styles.buttonIcon} name="search" size={30} />
                            </View>

                            <Text style={styles.buttonTitle}>Pesquisar Linha</Text>
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