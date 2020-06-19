import { Text, View, Image } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '@react-navigation/native';

import { CheckBox, HeaderBar, DivisorBar, ItemDivisor } from '../../components';

import { getTranslation } from '../../util/locales';
import { getItem } from '../../util/storage';
import { ThemeContext } from '../../util/themeContext';

import styles from './styles';

const Language = () => {

    const { colors } = useTheme();

    const { handleLanguageChange } = useContext(ThemeContext);

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguage = (value) => {
        console.log("langugage" + value)
        setSelectedLanguage(value);
        handleLanguageChange(value);
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
                <DivisorBar text={getTranslation('words.language')} />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/portuguese.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            {getTranslation('words.portuguese')}
                        </Text>
                    </View>

                    <CheckBox
                        name={"pt-BR"}
                        callback={handleLanguage}
                        value={selectedLanguage === "pt-BR" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/english.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            {getTranslation('words.english')}
                        </Text>
                    </View>

                    <CheckBox
                        name={"en-US"}
                        callback={handleLanguage}
                        value={selectedLanguage === "en-US" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/languages/french.png')} style={styles.icon} />
                        <Text style={[styles.text, { color: colors.text }]}>
                            {getTranslation('words.french')}
                        </Text>
                    </View>

                    <CheckBox
                        name={"fr-FR"}
                        callback={handleLanguage}
                        value={selectedLanguage === "fr-FR" ? true : false}
                    />
                </View>
                <ItemDivisor />
            </View>
        </View>
    );
}

export default Language;