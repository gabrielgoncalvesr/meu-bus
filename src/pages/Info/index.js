import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
    Text,
    View
} from 'react-native';

import {
    HeaderBar,
    DivisorBar
} from '../../components';

import styles from './styles';

const Info = () => {

    const { colors } = useTheme();

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentInfo}>
                <DivisorBar text={"INFORMAÇÕES"} />

                <View style={styles.contentText}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        Esse aplicativo é construído utilizando React Native e consumindo uma API em NodeJS.
                    </Text>
                    <Text style={[styles.text, { color: colors.text }]}>
                        Esse aplicativo tem somente o intuito de aprendizado e de como utilizar tecnologias.
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Info;