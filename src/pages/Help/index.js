import React from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from 'react-native';

import {
    ButtonBar,
    BackButton,
    DivisorBar,
    ItemDivisor
} from '../../components';

import styles from './styles';

const Help = () => {

    const handleSendEmail = () => {
        console.log("teste")
        Linking.openURL('mailto:ggr89@outlook.com?subject=Contato por Suporte')
    }

    return (
        <View style={styles.content}>
            <BackButton />

            <View style={styles.bar} />

            <View style={styles.itemsBox}>
                <View style={styles.contentFunctions}>
                    <DivisorBar text={"AJUDA"} />

                    <View style={styles.contentText}>
                        <Text style={styles.text}>Em caso de ajuda com o aplicativo, funcionalidade e sugestões, envie um email para entrar em contato.</Text>
                    </View>

                    <ItemDivisor />

                    <ButtonBar
                        iconType={"envelope"}
                        text={"Enviar Email"}
                        callback={() => handleSendEmail()}
                    />
                </View>
            </View>
        </View>
    );
}

export default Help;