import React, { useState } from 'react';

import { Feather, FontAwesome5, Ionicons, FontAwesome } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from './styles';

const Search = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const [termSearch, setTermSearch] = useState(false);
    const [searchInput, setSearchInput] = useState(false);

    const typeSearch = route.params.typeSearch;

    const navigateBack = () => {
        navigation.goBack();
    }

    const openSearchInput = () => {
        console.log("sdad")
    }

    const handleTermSearch = (value) => {
        console.log(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>

                <TouchableOpacity style={styles.iconArea} onPress={() => navigateBack()}>
                    <Ionicons name="md-arrow-round-back" size={30} color="black" />
                </TouchableOpacity>


                <View style={styles.searchArea}>
                    <Text>{typeSearch}</Text>
                </View>


                <TouchableOpacity style={styles.iconArea} onPress={() => openSearchInput()}>
                    <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <TextInput style={styles.searchBar} onChangeText={text => handleTermSearch(text)} value={termSearch} />

            <View style={styles.divisorBar}>
                <Text>PESQUISA DE ROTAS</Text>
            </View>
        </View>
    );
}

export default Search;