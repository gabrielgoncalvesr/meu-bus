import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

import {
    CheckBox,
    BackButton,
    DivisorBar,
    ItemDivisor
} from '../../components';

import { getItem } from '../../util/storage';

import styles from './styles';

const Language = () => {

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
            <BackButton />

            <View style={styles.bar} />

            <View style={styles.contentItem}>
                <DivisorBar text={"LINGUAGEM"} />

                <View style={styles.item}>
                    <View style={styles.iconContent}>
                        <Image source={require('../../assets/language-images/portuguese.jpg')} style={styles.icon} />
                        <Text style={styles.text}>PORTUGUÊS</Text>
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
                        <Image source={require('../../assets/language-images/english.jpg')} style={styles.icon} />
                        <Text style={styles.text}>INGLÊS</Text>
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
                        <Image source={require('../../assets/language-images/french.jpg')} style={styles.icon} />
                        <Text style={styles.text}>FRANCÊS</Text>
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