import React, { useState } from 'react';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import LogoImg from '../../../assets/icon.png';

import ComponentMap from '../../components/Map';

import { SlideBar, Map } from '../../components';

import styles from './styles';


const Detail = () => {
    const [termToSearch, setTermToSearch] = useState('');

    const route = useRoute();
    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    const onChangeText = (text) => {
        setTermToSearch(text)
    }

    return (
        <SlideBar
            mainContent={<ComponentMap />}
            barContent={
                <View style={styles.contentHome}>
                    <View style={styles.actionBar}>
                        <TouchableOpacity style={styles.buttonFunction} onPress={() => { }}>
                            <View style={styles.buttonIconBar}>
                                <FontAwesome5 name="bus" size={24} color="#414141" />
                            </View>

                            <Text style={styles.buttonTitle}>SPTRANS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonFunction} onPress={() => { }}>
                            <View style={styles.buttonIconBar}>
                                <Ionicons name="md-bus" size={30} color="#414141" />
                            </View>

                            <Text style={styles.buttonTitle}>EMTU</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        />
    );
}

export default Detail;