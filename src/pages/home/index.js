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









{/*
<View style={styles.container}>
 <View style={styles.contentMap}>
    <ComponentMap />
</View>

<TextInput style={styles.searchInput}
    placeholder={"procure por uma linha..."}
    onChangeText={text => onChangeText(text)}
    value={termToSearch}
/>






 <View style={styles.contactBox}>
    <Text style={styles.heroTitle}>Salve o dia!</Text>
    <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

    <Text style={styles.heroDescription}>Entre em contato:</Text>

    <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>E-mail</Text>
        </TouchableOpacity>
    </View>
</View> 
</View>
*/}