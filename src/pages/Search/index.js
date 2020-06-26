import React, { useState, useContext } from 'react';
import { View, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input, Loading, BusList, Message, HeaderBar, DivisorBar } from '../../components';

import request from '../../services/api';
import { getTranslation } from '../../util/locales';
import { ThemeContext } from '../../util/themeContext';

import styles from './styles';

const Search = () => {

    const navigation = useNavigation();
    const { getToken } = useContext(ThemeContext);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emptySearch, setEmptySearch] = useState(false);

    const navigateToTracking = async (value) => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));


        if (!user) {
            const token = await getToken();
            await request.post({
                method: 'post',
                url: '/history',
                data: {
                    busId: value.id,
                    userId: user.id
                },
                headers: { 'x-access-token': token }
            });
        }

        navigation.navigate('TrackingScreen', { busData: value });
    }

    const handleTermSearch = async (value) => {
        setData([]);
        setLoading(true);
        setEmptySearch(false);

        if (!value && value === "") {
            setLoading(false);
            return;
        }

        const token = await getToken();
        const response = await request.get('/bus', {
            params: { searchTerm: value },
            headers: { 'x-access-token': token }
        });

        if (response.data.length === 0) {
            setEmptySearch(true);
        }
        setLoading(false);
        setData(response.data);
    }

    return (
        <View style={styles.content}>

            <HeaderBar>
                <View style={styles.searchBar}>
                    <Input
                        hasIcon
                        iconSize={20}
                        iconType={"search"}
                        callback={value => handleTermSearch(value)}
                        placeholder={getTranslation('text.searchPlaceholder')}
                    />
                </View>
            </HeaderBar>

            <DivisorBar text={getTranslation('phrases.routesSearch')} />

            <Loading loading={loading} />

            {emptySearch &&
                <Message text={"Nenhum resultado encontrado"} />
            }

            {!emptySearch &&
                <BusList
                    data={data}
                    onPressBar={navigateToTracking}
                />
            }
        </View>
    );
}

export default Search;