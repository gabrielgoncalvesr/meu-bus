import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BusList, HeaderBar, DivisorBar } from '../../components';

import request from '../../services/api';
import { getTranslation } from '../../util/locales';
import { getThemeColors, ThemeContext } from '../../util/themeContext';

import styles from './styles';

const Search = () => {

    const colors = getThemeColors();
    const navigation = useNavigation();
    const { getToken } = useContext(ThemeContext);

    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigateToTracking = (value) => {
        navigation.navigate('TrackingScreen', { busData: value });
    }

    async function loadData() {
        if (loading) {
            return true;
        }

        if (total > 0 && data.length == total) {
            return;
        }

        setLoading(true);

        const token = await getToken();
        const response = await request.get('/bus', {
            params: { page: page },
            headers: { 'x-access-token': token }
        });

        setData([...data, ...response.data]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <View style={styles.content}>
            <HeaderBar>
                <Text style={[styles.title, { color: colors.text }]}>
                    SPTRANS
                </Text>
            </HeaderBar>

            <DivisorBar text={getTranslation('phrases.allLines')} />

            <BusList
                data={data}
                callback={() => loadData()}
                onPressBar={navigateToTracking}
            />
        </View>
    );
}

export default Search;