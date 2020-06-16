import React, { useState, useEffect } from 'react';
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

import { getItem } from '../../util/storage';

import styles from './styles';

const User = () => {

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

    const signOutAccount = () => {

        navigation.navigate();
    }

    useEffect(() => {
        const getInfo = async () => {
            const user = await getItem('user');
            if(user) {
                setUserName(user.name);
                setUserProfilePhoto(user.profilePhoto);
            }
        }

        getInfo();
    }, []);

    return (
        <View style={styles.content}>
            <BackButton />

            <View style={styles.userBar}>
                <Text style={styles.userName}>{userName}</Text>

                <Image
                    style={styles.userIcon}
                    source={userIcons[userProfilePhoto]}
                />
            </View>

            <View style={styles.itemsBox}>
                <View style={styles.contentFunctions}>
                    <DivisorBar text={"FUNÇÕES"} />

                    <ButtonBar
                        iconType={"cog"}
                        text={"Configurações"}
                        callback={navigateToSettings}
                    />

                    <ButtonBar
                        iconType={"sign-out-alt"}
                        text={"Sair da Conta"}
                        callback={() => signOutAccount()}
                    />

                    <DivisorBar text={"INFORMAÇÕES"} />

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

                </View>
            </View>
        </View>
    );
}

export default User;