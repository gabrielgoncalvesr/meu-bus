import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Text,
    View,
    Image
} from 'react-native';

import {
    ButtonBar,
    BackButton,
    DivisorBar
} from '../../components';

import styles from './styles';

const User = () => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    const navigateToTheme = () => {
        navigation.navigate('SettingsScreen');
    }

    const navigateToLanguage = () => {
        navigation.navigate('SettingsScreen');
    }

    const navigateToImage = () => {
        navigation.navigate('HelpScreen');
    }

    return (
        <View style={styles.content}>
            <BackButton />

            <View style={styles.bar} />

            <View style={styles.itemsBox}>
                <View style={styles.contentInfo}>
                    <DivisorBar text={"INFORMAÇÕES"} />

                    <View style={styles.contentText}>
                        <Text style={styles.text}>Esse aplicativo é construído utilizando React Native e consumindo uma API em NodeJS.</Text>
                        <Text style={styles.text}>Esse aplicativo tem somente o intuito de aprendizado e de como utilizar tecnologias.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default User;