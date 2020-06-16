import React, { useState, useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

import { BusList, BackButton, DivisorBar } from '../../components';

import request from '../../services/api';

import styles from './styles';

const Search = () => {

    const navigation = useNavigation();

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

        const response = await request.get('/bus', {
            params: { page: page }
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

            <BackButton />

            <View style={styles.titleBar}>
                <Text style={styles.title}>SPTRANS</Text>
            </View>

            <DivisorBar text={"TODAS AS LINHAS"} />

            <BusList
                data={data}
                callback={() => loadData()}
                onPressBar={navigateToTracking}
            />

        </View>
    );
}

export default Search;