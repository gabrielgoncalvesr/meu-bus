import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    useTheme,
    useNavigation
} from '@react-navigation/native';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {
    Map,
    Message,
    BusList,
    SlideBar,
    StatusBar,
    DivisorBar
} from '../../components';

import request from '../../services/api';
import {
    addItem,
    getItem
} from '../../util/storage';

import styles from './styles';

const Home = () => {

    const { colors } = useTheme();

    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [userLogged, setUserLogged] = useState(true);
    const [emptySearch, setEmptySearch] = useState(false);

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    }

    const navigateToTracking = (value) => {
        navigation.navigate('TrackingScreen', { busData: value });
    }

    useEffect(() => {
        const loadData = async () => {
            setData([]);
            setEmptySearch(false);

            await addItem('user', { id: 1, language: 'pt-BR', theme: 'light', name: 'Nome do Usuário', profilePhoto: 'user-icon1' });

            const user = await getItem('user');
            if (!user) {
                setUserLogged(false);
                return;
            }

            const response = await request.get(`/history?userId=${user.id}`);

            if (response.data.length === 0) {
                setEmptySearch(true);
            }
            setData(response.data);
        }

        loadData();
    }, []);

    return (
        <>
            <StatusBar />

            <SlideBar
                mainContent={
                    <View style={styles.contentMap}>
                        <Map />

                        <TouchableOpacity style={styles.userIconContent} onPress={() => navigateToScreen('UserScreen')}>
                            <FontAwesome5 style={styles.userIcon} name="user-circle" />
                        </TouchableOpacity>
                    </View>
                }
                barContent={
                    <View style={styles.content}>
                        <View style={[styles.barContent, { backgroundColor: colors.item }]}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.primaryColor }]}
                                onPress={() => navigateToScreen('BusListScreen')}
                            >
                                <View style={styles.iconContent}>
                                    <FontAwesome5
                                        name="bus"
                                        style={[styles.icon, { color: colors.text }]}
                                    />
                                </View>

                                <Text style={[styles.title, { color: colors.text }]}>
                                    Ver Linhas
                            </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.primaryColor }]}
                                onPress={() => navigateToScreen('SearchScreen')}
                            >
                                <View style={styles.iconContent}>
                                    <FontAwesome5
                                        name="search"
                                        style={[styles.icon, { color: colors.text }]}
                                    />
                                </View>

                                <Text style={[styles.title, { color: colors.text }]}>
                                    Pesquisar Linha
                            </Text>
                            </TouchableOpacity>
                        </View>

                        <DivisorBar text={"HISTÓRICO DE PESQUISA"} />

                        <View style={[styles.historyContent, { backgroundColor: colors.item }]}>
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
        </>
    )
}

export default Home;