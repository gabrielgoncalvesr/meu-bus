import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    Text,
    View
} from 'react-native';

import {
    CheckBox,
    BackButton,
    DivisorBar,
    ItemDivisor
} from '../../components';

import { getItem } from '../../util/storage';

import styles from './styles';

const Theme = () => {

    const [selectedTheme, setSelectedTheme] = useState('');

    const handleThemeChange = (value) => {
        setSelectedTheme(value);
    }

    useEffect(() => {
        const loadLanguage = async () => {
            const user = await getItem('user');
            if (user) {
                setSelectedTheme(user.theme);
            }
        }

        loadLanguage();
    }, []);


    return (
        <View style={styles.content}>
            <BackButton />

            <View style={styles.bar} />

            <View style={styles.contentItem}>
                <DivisorBar text={"TEMA"} />

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"sun"}
                            style={styles.icon}
                        />

                        <Text style={styles.text}>LIGHT</Text>
                    </View>

                    <CheckBox
                        name={"light"}
                        callback={handleThemeChange}
                        value={selectedTheme === "light" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"moon"}
                            style={styles.icon}
                        />

                        <Text style={styles.text}>DARK</Text>
                    </View>

                    <CheckBox
                        name={"dark"}
                        callback={handleThemeChange}
                        value={selectedTheme === "dark" ? true : false}
                    />
                </View>
                <ItemDivisor />
            </View>
        </View>
    );
}

export default Theme;