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

    const navigateToTheme = () => {
        navigation.navigate('ThemeScreen');
    }

    const navigateToLanguage = () => {
        navigation.navigate('LanguageScreen');
    }

    const navigateToImage = () => {
        navigation.navigate('ImageScreen');
    }

    return (
        <View style={styles.content}>
            <BackButton />

            <View style={styles.userBar} />

            <View style={styles.itemsBox}>
                <View style={styles.contentFunctions}>
                    <DivisorBar text={"CONFIGURAÇÕES"} />

                    <ButtonBar
                        iconType={"paint-roller"}
                        text={"Alterar Tema"}
                        callback={navigateToTheme}
                    />

                    <ButtonBar
                        iconType={"language"}
                        text={"Alterar Idioma"}
                        callback={navigateToLanguage}
                    />

                    <ButtonBar
                        iconType={"image"}
                        text={"Alterar Imagem"}
                        callback={navigateToImage}
                    />
                </View>
            </View>
        </View>
    );
}

export default User;