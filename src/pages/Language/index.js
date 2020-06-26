import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CheckBox, HeaderBar, DivisorBar } from '../../components';

import { getItem } from '../../util/storage';
import { getTranslation } from '../../util/locales';
import { ThemeContext, getThemeColors } from '../../util/themeContext';

import styles from './styles';

const Language = () => {

    const colors = getThemeColors();
    const navigation = useNavigation();

    const { handleLanguageChange } = useContext(ThemeContext);

    const [selectedLanguage, setSelectedLanguage] = useState();

    const handleLanguage = (value) => {
        setSelectedLanguage(value);
        handleLanguageChange(value);
        //handleLanguageChange(value);

        //navigation.navigate('HomeScreen');
    }

    useEffect(() => {
        const loadLanguage = async () => {
            const language = await getItem('language');
            setSelectedLanguage(language);
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
                        <Image source={require('../../assets/images/language-flags/portuguese.png')} style={styles.icon} />
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

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/images/language-flags/english.png')} style={styles.icon} />
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

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/images/language-flags/french.png')} style={styles.icon} />
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
            </View>
        </View>
    );
}

export default Language;