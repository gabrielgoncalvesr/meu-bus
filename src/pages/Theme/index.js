import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { CheckBox, HeaderBar, DivisorBar } from '../../components';

import { getItem } from '../../util/storage';
import { getTranslation } from '../../util/locales';
import { AppContext, getThemeColors } from '../../util/appContext';

import styles from './styles';

const Theme = () => {

    const colors = getThemeColors();
    const { handleThemeChange } = useContext(AppContext);

    const [selectedTheme, setSelectedTheme] = useState();

    const handleTheme = (value) => {
        setSelectedTheme(value);
        handleThemeChange(value);
    }

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await getItem('theme');
            setSelectedTheme(theme);
        }

        loadTheme();
    }, []);

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentItem}>
                <DivisorBar text={getTranslation('words.theme')} />

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"sun"}
                            style={[styles.icon, { color: colors.text }]}
                        />

                        <Text style={[styles.text, { color: colors.text }]}>
                            {getTranslation('words.light').toUpperCase()}
                        </Text>
                    </View>

                    <CheckBox
                        name={"light"}
                        callback={handleTheme}
                        value={selectedTheme === "light" ? true : false}
                    />
                </View>

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"moon"}
                            style={[styles.icon, { color: colors.text }]}
                        />

                        <Text style={[styles.text, { color: colors.text }]}>
                            {getTranslation('words.dark').toUpperCase()}
                        </Text>
                    </View>

                    <CheckBox
                        name={"dark"}
                        callback={handleTheme}
                        value={selectedTheme === "dark" ? true : false}
                    />
                </View>
            </View>
        </View>
    );
}

export default Theme;