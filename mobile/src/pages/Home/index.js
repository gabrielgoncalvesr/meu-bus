import React, { useState, useEffect, useContext } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import { Map, Message, BusList, SlideBar, StatusBar, DivisorBar } from '../../components';

import request from '../../services/api';
import { getItem } from '../../util/storage';
import { getTranslation } from '../../util/locales';
import { getThemeColors, AppContext } from '../../util/appContext';

import styles from './styles';

const Home = () => {

    const colors = getThemeColors();
    const navigation = useNavigation();
    const { getToken } = useContext(AppContext);

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

            const user = await getItem('user');
            if (!user) {
                setUserLogged(false);
                return;
            }

            const token = await getToken();
            const response = await request.get(`/history?userId=${user.id}`, {
                headers: { 'x-access-token': token }
            });

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

                        <TouchableOpacity
                            style={styles.userIconContent}
                            onPress={() => navigateToScreen('UserScreen')}
                        >
                            <FontAwesome5
                                name="user-circle"
                                color={colors.card}
                                style={styles.userIcon}
                            />
                        </TouchableOpacity>
                    </View>
                }
                barContent={
                    <View style={[styles.content, { backgroundColor: colors.background }]}>
                        <View style={[styles.barContent]}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.card }]}
                                onPress={() => navigateToScreen('BusListScreen')}
                            >
                                <View style={styles.iconContent}>
                                    <FontAwesome5
                                        name="bus"
                                        style={[styles.icon, { color: colors.cardText }]}
                                    />
                                </View>

                                <Text style={[styles.title, { color: colors.cardText }]}>
                                    {getTranslation('phrases.seeLines')}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.card }]}
                                onPress={() => navigateToScreen('SearchScreen')}
                            >
                                <View style={styles.iconContent}>
                                    <FontAwesome5
                                        name="search"
                                        style={[styles.icon, { color: colors.cardText }]}
                                    />
                                </View>

                                <Text style={[styles.title, { color: colors.cardText }]}>
                                    {getTranslation('phrases.searchLine')}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <DivisorBar text={getTranslation('phrases.searchHistory')} />

                        <View style={[styles.historyContent, { backgroundColor: colors.background }]}>
                            <BusList
                                data={data}
                                onPressBar={navigateToTracking}
                            />

                            {!userLogged && emptySearch &&
                                <Message text={getTranslation('phrases.emptyResult')} />
                            }

                            {!emptySearch && userLogged &&
                                <Message text={getTranslation('phrases.withoutHistory')} />
                            }
                        </View>
                    </View>
                }
            />
        </>
    )
}

export default Home;