import React, { useState } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';

import request from '../../services/api';

import styles from './styles';

const Search = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [termSearch, setTermSearch] = useState("");
    const [dataLoading, setDataLoading] = useState(false);
    const [emptySearch, setEmptySearch] = useState(false);

    const navigateBack = () => {
        navigation.goBack();
    }

    const navigateToTracking = (busData) => {
        navigation.navigate('TrackingScreen', { busData });
    }

    const handleTermSearch = async (value) => {
        setTermSearch(value);

        setData([]);
        setDataLoading(true);
        setEmptySearch(false);

        if (!value && value === "") {
            setDataLoading(false);
            return;
        }

        const response = await request.get('/bus', {
            params: { searchTerm: value }
        });

        setDataLoading(false);
        setData(response.data);
        if (response.data.length === 0) {
            setEmptySearch(true);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.iconArea} onPress={() => navigateBack()}>
                    <Ionicons name="md-arrow-round-back" size={30} color="#162447" />
                </TouchableOpacity>

                <View style={styles.searchArea}>
                    <FontAwesome style={styles.searchIcon} name="search" size={20} />
                    <TextInput
                        autoCapitalize='none'
                        placeholder="bus number"
                        style={styles.searchInput} onChangeText={text => handleTermSearch(text)} value={termSearch}
                    />
                </View>
            </View>

            <View style={styles.divisorBar}>
                <Text style={styles.divisorBarText}>BUSCA DE ROTAS</Text>
            </View>

            {
                dataLoading &&
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#828282" />
                </View>
            }

            {
                emptySearch &&
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Nenhum resultado encontrado</Text>
                </View>
            }

            {
                !emptySearch &&
                <FlatList
                    style={styles.contentResults}
                    data={data}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.busItem}>
                                <View style={[styles.busIdentificationBox, { backgroundColor: `#${item.color}` }]}>
                                    <Text style={styles.busIdentificationText}>{item.shortName}</Text>
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
            }
        </View>
    );
}

export default Search;