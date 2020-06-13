import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import {
    SlideBar,
    Map,
    DivisorBar,
    Message,
    BusList
} from '../../components';

import request from '../../services/api';

import styles from './styles';

const Home = () => {
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emptySearch, setEmptySearch] = useState(false);

    const [userLogged, setUserLogged] = useState(true);

    const navigateToUser = () => {
        navigation.navigate('UserScreen');
    }

    const navigateToList = () => {
        navigation.navigate('BusListScreen');
    }

    const navigateToSearch = () => {
        navigation.navigate('SearchScreen');
    }

    const navigateToTracking = (value) => {
        navigation.navigate('TrackingScreen', { busData: value });
    }

    const loadData = async () => {
        setData([]);
        setLoading(true);
        setEmptySearch(false);

        await AsyncStorage.setItem("user", JSON.stringify({ id: 1 }));

        const user = JSON.parse(await AsyncStorage.getItem('user'));
        if (!user) {
            setUserLogged(false);
            setLoading(false);
            return;
        }

        const response = await request.get(`/history?userId=${user.id}`);

        if (response.data.length === 0) {
            setEmptySearch(true);
        }
        setLoading(false);
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <SlideBar
            mainContent={
                <View style={styles.contentMap}>
                    <Map />

                    <TouchableOpacity style={styles.userIconContent} onPress={() => navigateToUser()}>
                        <FontAwesome5 style={styles.userIcon} name="user-circle" />
                    </TouchableOpacity>
                </View>
            }
            barContent={
                <View style={styles.content}>
                    <View style={styles.barContent}>
                        <TouchableOpacity style={styles.button} onPress={() => navigateToList()}>
                            <View style={styles.iconContent}>
                                <FontAwesome5 style={styles.icon} name="bus" />
                            </View>

                            <Text style={styles.title}>Ver Linhas</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigateToSearch()}>
                            <View style={styles.iconContent}>
                                <FontAwesome5 style={styles.icon} name="search" />
                            </View>

                            <Text style={styles.title}>Pesquisar Linha</Text>
                        </TouchableOpacity>
                    </View>

                    <DivisorBar text={"HISTÓRICO DE PESQUISA"} />

                    <View style={styles.historyContent}>
                        <BusList
                            data={data}
                            onPressBar={navigateToTracking}
                        />

                        {!userLogged && emptySearch &&
                            <Message text={"nenhum resultado encontrado"} />
                        }

                        {!emptySearch && userLogged &&
                            <Message text={"sem histórico"} />
                        }
                    </View>

                </View>
            }
        />
    );
}

export default Home;