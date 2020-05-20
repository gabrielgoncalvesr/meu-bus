import React, { useState } from 'react';

import { Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

import styles from './styles';

const Search = () => {

    const route = useRoute();
    const navigation = useNavigation();

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

    const DATA = [
        { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Item' },
        { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-145571e29w22', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-145572e29d72', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-14e571e24d72', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-148571e29d72', title: 'First Item' },
        { id: '58694a0f-36a1-471f-bd96-145572e29d72', title: 'First Item' },
        { id: '58694a0f-3da1-471f-bd96-145571wd72aa', title: 'First Item' },
        { id: '58694a0f-3a81-471f-bd96-148571e29d72', title: 'First Item' },
        { id: '58694aaf-38a1-471f-bd96-145572e29d72', title: 'First Item' },
        { id: '58694a0f-38a1-471f-bd96-145571e24d72', title: 'First Item' },
        { id: '58694a0f-30a1-471f-bd96-148571e29d72', title: 'First Item' },
    ];

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
                data={DATA}
                keyExtractor={item => item.id}
                // showsVerticalScrollIndicator={false}
                //onEndReached={loadIncidents}
                //onEndReachedThreshold={0.2}
                renderItem={({ item }) => (
                    <>
                        <View style={styles.busItem}>
                            <View style={styles.busIdentificationBox}>
                                <Text style={styles.busIdentificationText}>0800</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.touchableArea}
                                onPress={() => navigateToTracking({ id: "teste" })}
                            >
                                <View style={styles.busInformationBox}>
                                    <Text style={styles.busInformationText}>aaaaaaaaa</Text>
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