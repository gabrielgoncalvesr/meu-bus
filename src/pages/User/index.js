import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonBar, HeaderBar, DivisorBar } from '../../components';

import { getTranslation } from '../../util/locales';
import { getThemeColors } from '../../util/themeContext';

import { getItem } from '../../util/storage';

import styles from './styles';

const User = () => {

    const colors = getThemeColors();

    const userIcons = {
        'user-icon1': require('../../../assets/user-icons/user-icon1.jpg'),
        'user-icon2': require('../../../assets/user-icons/user-icon2.jpg'),
        'user-icon3': require('../../../assets/user-icons/user-icon3.jpg'),
        'user-icon4': require('../../../assets/user-icons/user-icon4.jpg'),
    };

    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [userProfilePhoto, setUserProfilePhoto] = useState('');

    const navigateToScreen = (value) => {
        navigation.navigate(value);
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
                <DivisorBar text={getTranslation('words.settings')} />

                <ButtonBar
                    iconType={"paint-roller"}
                    text={getTranslation('phrases.changeTheme')}
                    callback={() => navigateToScreen("ThemeScreen")}
                />

                <ButtonBar
                    iconType={"language"}
                    text={getTranslation('phrases.changeLanguage')}
                    callback={() => navigateToScreen("LanguageScreen")}
                />

                <ButtonBar
                    iconType={"image"}
                    text={getTranslation('phrases.changeImage')}
                    callback={() => navigateToScreen("ImageScreen")}
                />

                <ButtonBar
                    iconType={"info-circle"}
                    text={getTranslation('words.information')}
                    callback={() => navigateToScreen("InfoScreen")}
                />

                <ButtonBar
                    iconType={"question-circle"}
                    text={getTranslation('words.help')}
                    callback={() => navigateToScreen("HelpScreen")}
                />

                <ButtonBar
                    iconType={"sign-out-alt"}
                    text={getTranslation('phrases.signOut')}
                    callback={() => signOutAccount()}
                />
            </View>
        </View>
    );
}

export default User;