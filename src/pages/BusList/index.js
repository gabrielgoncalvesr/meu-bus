import React, { useState, useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';

import request from '../../services/api';

import styles from './styles';

const Search = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const typeSearch = route.params.typeSearch;

    const navigateBack = () => {
        navigation.goBack();
    }

    const navigateToTracking = (object) => {
        navigation.navigate('TrackingScreen', { object });
    }

    const navigateToSearch = (object) => {
        navigation.navigate('SearchScreen', { object });
    }

    async function loadData() {
        if (loading) {
            return true;
        }

        if (total > 0 && data.length == total) {
            return;
        }

        setLoading(true);

        console.log(typeSearch)

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
        <View style={styles.container}>
            <View style={styles.searchBar}>

                <TouchableOpacity style={styles.iconArea} onPress={() => navigateBack()}>
                    <Ionicons name="md-arrow-round-back" size={30} color="#828282" />
                </TouchableOpacity>

                <View>
                    <Text style={styles.contentTitle}>{typeSearch}</Text>
                </View>

                <TouchableOpacity style={styles.iconArea} onPress={() => navigateToSearch()}>
                    <FontAwesome name="search" size={24} color="#828282" />
                </TouchableOpacity>
            </View>

            <View style={styles.divisorBar}>
                <Text>TODAS AS LINHAS</Text>
            </View>

            <FlatList
                style={styles.contentResults}
                data={data}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadData}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.busItem}>
                            <View style={[styles.busIdentificationBox, { backgroundColor: `#${item.color}` }]}>
                                <Text style={[styles.busIdentificationText, { color: `#${item.textColor}` }]}>{item.shortName}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.touchableArea}
                                onPress={() => navigateToTracking(item)}
                            >
                                <View style={styles.busInformationBox}>
                                    <Text style={styles.busInformationText}>{item.longName}</Text>
                                </View>

                                <View style={styles.busIconBox}>
                                    <FontAwesome name="chevron-right" size={24} color="#828282" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemDivisor} />
                    </>
                )}
            />
        </View>
    );
}

export default Search;