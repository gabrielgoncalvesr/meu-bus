import React, { useState, useEffect } from 'react';
import {
    useTheme,
    useNavigation
} from '@react-navigation/native';
import {
    Text,
    View,
    Image
} from 'react-native';

import {
    ButtonBar,
    HeaderBar,
    DivisorBar,
    ItemDivisor
} from '../../components';

import { getItem } from '../../util/storage';

import styles from './styles';

const User = () => {

    const { colors } = useTheme();

    const userIcons = {
        'user-icon1': require('../../../assets/user-icons/user-icon1.jpg'),
        'user-icon2': require('../../../assets/user-icons/user-icon2.jpg'),
        'user-icon3': require('../../../assets/user-icons/user-icon3.jpg'),
        'user-icon4': require('../../../assets/user-icons/user-icon4.jpg'),
    };

    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [userProfilePhoto, setUserProfilePhoto] = useState('');

    const navigateToSettings = () => {
        navigation.navigate('SettingsScreen');
    }

    const navigateToInfo = () => {
        navigation.navigate('InfoScreen');
    }

    const navigateToHelp = () => {
        navigation.navigate('HelpScreen');
    }

    const navigateToTheme = () => {
        navigation.navigate('ThemeScreen');
    }

    const navigateToLanguage = () => {
        navigation.navigate('LanguageScreen');
    }

    const navigateToImage = () => {
        navigation.navigate('ImageScreen');
    }

    const signOutAccount = () => {

        navigation.navigate();
    }

    useEffect(() => {
        const getInfo = async () => {
            const user = await getItem('user');
            if (user) {
                setUserName(user.name);
                setUserProfilePhoto(user.profilePhoto);
            }
        }

        getInfo();
    }, []);

    return (
        <View style={styles.content}>
            <HeaderBar>
                <View style={styles.userBar}>
                    <Text style={[styles.userName, { color: colors.text }]}>
                        {userName}
                    </Text>

                    <Image
                        style={[styles.userIcon, { borderColor: colors.text }]}
                        source={userIcons[userProfilePhoto]}
                    />
                </View>
            </HeaderBar>

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

                <ButtonBar
                    iconType={"info-circle"}
                    text={"Informações"}
                    callback={navigateToInfo}
                />

                <ButtonBar
                    iconType={"question-circle"}
                    text={"Ajuda"}
                    callback={navigateToHelp}
                />

                <ButtonBar
                    iconType={"sign-out-alt"}
                    text={"Sair da Conta"}
                    callback={() => signOutAccount()}
                />
            </View>
        </View>
    );
}

export default User;