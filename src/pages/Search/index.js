import React, { useState, useEffect } from 'react';

import { Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

import request from '../../services/api';

import styles from './styles';

const Search = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [inputOpen, setInputOpen] = useState(false);
    const [termSearch, setTermSearch] = useState("");
    const [searchInput, setSearchInput] = useState(false);

    const typeSearch = route.params.typeSearch;

    const navigateBack = () => {
        if (inputOpen) {
            setInputOpen(false);
        } else {
            navigation.goBack();
        }
    }

    const navigateToTracking = (object) => {
        navigation.navigate('TrackingScreen', { object });
    }

    const openSearchInput = () => {
        setInputOpen(!inputOpen);
        console.log(inputOpen)
    }

    const handleTermSearch = (value) => {
        setTermSearch(value);
    }

    async function loadData() {
        const response = await request.get('/bus');
        setData(response.data);
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
                {inputOpen &&

                    <View style={styles.searchArea}>
                        <FontAwesome style={styles.searchIcon} name="search" size={20} />
                        <TextInput
                            autoCapitalize='none'
                            placeholder="bus number"
                            style={styles.searchInput} onChangeText={text => handleTermSearch(text)} value={termSearch}
                        />
                    </View>
                }
                {!inputOpen &&
                    <>
                        <View style={styles.searchArea}>
                            <Text>{typeSearch}</Text>
                        </View>

                        <TouchableOpacity style={styles.iconArea} onPress={() => openSearchInput()}>
                            <FontAwesome name="search" size={24} color="#828282" />
                        </TouchableOpacity>
                    </>
                }
            </View>

            <View style={styles.divisorBar}>
                <Text>ROUTES SEARCH</Text>
            </View>

            <FlatList
                style={styles.contentResults}
                data={data}
                keyExtractor={item => item.id}
                // showsVerticalScrollIndicator={false}
                //onEndReached={loadIncidents}
                //onEndReachedThreshold={0.2}
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
        </View>
    );
}

export default Search;