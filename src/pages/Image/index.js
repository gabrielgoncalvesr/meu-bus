import React, { useContext } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { HeaderBar, DivisorBar } from '../../components';

import alert from '../../util/alert';
import request from '../../services/api';
import { getItem } from '../../util/storage';
import { getTranslation } from '../../util/locales';
import { getThemeColors, AppContext } from '../../util/appContext';

import styles from './styles';

const ImageScreen = () => {

    const colors = getThemeColors();
    const { getToken } = useContext(AppContext);

    const handleChangeImage = async (value) => {
        const user = await getItem('user');

        const token = await getToken();

        console.log(token)
        console.log(user)

        await request.put({
            method: 'put',
            url: '/user/profilePhoto',
            data: {
                email: user.email,
                profilePhoto: value
            },
            headers: { 'x-access-token': token }
        });
    }

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={[styles.contentImages, { backgroundColor: colors.background }]}>
                <DivisorBar text={getTranslation('words.images')} />

                <View style={styles.imageGrid}>
                    <View style={styles.imageLine}>
                        <TouchableOpacity onPress={() => handleChangeImage('user-icon1')}>
                            <Image
                                style={[styles.userIcon, { borderColor: colors.text }]}
                                source={require('../../../src/assets/images/user-icons/user-icon1.jpg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleChangeImage('user-icon2')}>
                            <Image
                                style={[styles.userIcon, { borderColor: colors.text }]}
                                source={require('../../../src/assets/images/user-icons/user-icon2.jpg')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageLine}>
                        <TouchableOpacity onPress={() => handleChangeImage('user-icon3')}>
                            <Image
                                style={[styles.userIcon, { borderColor: colors.text }]}
                                source={require('../../../src/assets/images/user-icons/user-icon3.jpg')}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleChangeImage('user-icon4')}>
                            <Image
                                style={[styles.userIcon, { borderColor: colors.text }]}
                                source={require('../../../src/assets/images/user-icons/user-icon4.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ImageScreen;