import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    Text,
    View
} from 'react-native';
import {
    useTheme
} from '@react-navigation/native';

import {
    CheckBox,
    HeaderBar,
    DivisorBar,
    ItemDivisor
} from '../../components';

import { getItem } from '../../util/storage';
import { ThemeContext } from '../../util/themeContext';

import styles from './styles';

const Theme = () => {

    const { colors } = useTheme();

    const {
        handleThemeChange
    } = React.useContext(ThemeContext);

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
                <DivisorBar text={"TEMA"} />

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"sun"}
                            style={[styles.icon, { color: colors.text }]}
                        />

                        <Text style={[styles.text, { color: colors.text }]}>
                            LIGHT
                        </Text>
                    </View>

                    <CheckBox
                        name={"light"}
                        callback={handleTheme}
                        value={selectedTheme === "light" ? true : false}
                    />
                </View>
                <ItemDivisor />

                <View style={styles.item}>
                    <View style={styles.themeContent}>
                        <FontAwesome5
                            name={"moon"}
                            style={[styles.icon, { color: colors.text }]}
                        />

                        <Text style={[styles.text, { color: colors.text }]}>
                            DARK
                        </Text>
                    </View>

                    <CheckBox
                        name={"dark"}
                        callback={handleTheme}
                        value={selectedTheme === "dark" ? true : false}
                    />
                </View>
                <ItemDivisor />
            </View>
        </View>
    );
}

export default Theme;