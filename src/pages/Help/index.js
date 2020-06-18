import React from 'react';
import {
    useTheme,
} from '@react-navigation/native';

import {
    Text,
    View,
    Linking
} from 'react-native';

import {
    ButtonBar,
    HeaderBar,
    DivisorBar,
    ItemDivisor
} from '../../components';

import styles from './styles';

const Help = () => {

    const { colors } = useTheme();

    const handleSendEmail = () => {
        console.log("teste")
        Linking.openURL('mailto:ggr89@outlook.com?subject=Contato por Suporte')
    }

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentFunctions}>
                <DivisorBar text={"AJUDA"} />

                <View style={styles.contentText}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        Em caso de ajuda com o aplicativo, funcionalidade e sugestões, envie um email para entrar em contato.
                    </Text>
                </View>

                <ItemDivisor />

                <ButtonBar
                    iconType={"envelope"}
                    text={"Enviar Email"}
                    callback={() => handleSendEmail()}
                />
            </View>
        </View>
    );
}

export default Help;