import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
    CheckBox,
    HeaderBar,
    DivisorBar,
    ItemDivisor
} from '../../components';

import { getItem } from '../../util/storage';

import styles from './styles';

const Language = () => {

    const { colors } = useTheme();

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value);
    }

    useEffect(() => {
        const loadLanguage = async () => {
            const user = await getItem('user');
            if (user) {
                setSelectedLanguage(user.language);
            }
        }

        loadLanguage();
    }, []);

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentItem}>
                <DivisorBar text={"LINGUAGEM"} />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/portuguese.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            PORTUGUÊS
                        </Text>
                    </View>

                    <CheckBox
                        name={"pt-BR"}
                        callback={handleLanguageChange}
                        value={selectedLanguage === "pt-BR" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/english.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            INGLÊS
                        </Text>
                    </View>

                    <CheckBox
                        name={"fr-FR"}
                        callback={handleLanguageChange}
                        value={selectedLanguage === "fr-FR" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/french.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            FRANCÊS
                        </Text>
                    </View>

                    <CheckBox
                        name={"en-US"}
                        callback={handleLanguageChange}
                        value={selectedLanguage === "en-US" ? true : false}
                    />
                </View>
                <ItemDivisor />
            </View>
        </View>
    );
}

export default Language;