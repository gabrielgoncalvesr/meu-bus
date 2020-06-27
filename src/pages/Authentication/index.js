import React, { useState, useEffect, useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Input } from '../../components';

import alert from '../../util/alert';
import request from '../../services/api';
import { getItem } from '../../util/storage';
import { getTranslation } from '../../util/locales';
import { getThemeColors, AppContext } from '../../util/appContext';

import styles from './styles';

const Search = () => {

    const colors = getThemeColors();
    const { handleLoginUser } = useContext(AppContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [theme, setTheme] = useState(null);
    const [password, setPassword] = useState();
    const [newAccount, setNewAccount] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await getItem('theme');
            setTheme(theme);
        }

        loadTheme();
    }, []);

    const handleNameChange = (value) => {
        setName(value);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleOpenNewAccount = () => {
        setNewAccount(true);
    }

    const handleForgotPassword = () => {
        //TODO create
    }

    const handleLogin = async () => {
        let errorMessage = null;

        if (!email) {
            errorMessage = "e-mail is invalid";
        }
        if (!password) {
            errorMessage = "password is invalid";
        }

        if (errorMessage) {
            alert('Error Login', errorMessage);
            return;
        }

        await request.post('/login', {
            email,
            password
        }).then(function (response) {
            handleLoginUser(response.data);
        }).catch(function (error) {
            alert('Error Login', error);
        });
    }

    const handleCreateAccount = async () => {
        let errorMessage = null;

        if (!email) {
            errorMessage = "e-mail is invalid";
        }
        if (!name) {
            errorMessage = "name is invalid";
        }
        if (!password) {
            errorMessage = "password is invalid";
        }

        if (errorMessage) {
            alert('Error Login', errorMessage);
            return;
        }

        await request.post('/user/create', {
            name,
            email,
            password
        }).then(function (response) {
            handleLogin();
        }).catch(function (error) {
            alert('Error Login', error);
        });
    }

    return (
        <View style={styles.content}>
            {
                (theme && theme === 'dark')
                    ? (
                        <Image
                            style={styles.applicationIcon}
                            source={require('../../assets/images/icons/applicationIconLight.png')}
                        />
                    )
                    : (
                        <Image
                            style={styles.applicationIcon}
                            source={require('../../assets/images/icons/applicationIconDark.png')}
                        />
                    )
            }

            <View style={styles.boxContent}>
                {
                    newAccount
                        ?
                        <View style={styles.inputContent}>
                            <View style={styles.input}>
                                <Input
                                    hasIcon
                                    iconSize={20}
                                    iconType={"user"}
                                    callback={value => handleNameChange(value)}
                                    placeholder={getTranslation('words.name')}
                                />
                            </View>

                            <View style={styles.input}>
                                <Input
                                    hasIcon
                                    iconSize={20}
                                    iconType={"envelope-o"}
                                    callback={value => handleEmailChange(value)}
                                    placeholder={getTranslation('words.email')}
                                />
                            </View>

                            <View style={styles.input}>
                                <Input
                                    hasIcon
                                    secureText
                                    iconSize={20}
                                    iconType={"key"}
                                    callback={value => handlePasswordChange(value)}
                                    placeholder={getTranslation('words.password')}
                                />
                            </View>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.card }]}
                                onPress={() => handleCreateAccount()}
                            >
                                <Text style={[styles.buttonText, { color: colors.cardText }]}>
                                    {getTranslation('phrases.newAccount')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.inputContent}>
                            <View style={styles.input}>
                                <Input
                                    hasIcon
                                    iconSize={20}
                                    iconType={"envelope-o"}
                                    callback={value => handleEmailChange(value)}
                                    placeholder={getTranslation('words.email')}
                                />
                            </View>

                            <View style={styles.input}>
                                <Input
                                    hasIcon
                                    secureText
                                    iconSize={20}
                                    iconType={"key"}
                                    callback={value => handlePasswordChange(value)}
                                    placeholder={getTranslation('words.password')}
                                />
                            </View>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.card }]}
                                onPress={() => handleLogin()}
                            >
                                <Text style={[styles.buttonText, { color: colors.cardText }]}>
                                    {getTranslation('words.login')}
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.forgotContent}>
                                <TouchableOpacity onPress={() => handleForgotPassword()}>
                                    <Text style={[styles.infoText, { color: colors.text }]}>
                                        {getTranslation('phrases.forgotPassword')}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: colors.card }]}
                                onPress={() => handleOpenNewAccount()}
                            >
                                <Text style={[styles.infoText, { color: colors.cardText }]}>
                                    {getTranslation('phrases.newAccount')}
                                </Text>

                                <FontAwesome
                                    size={20}
                                    name={'sign-in'}
                                    style={[styles.newAccountIcon, { color: colors.cardText }]}
                                />
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </View>
    );
}

export default Search;