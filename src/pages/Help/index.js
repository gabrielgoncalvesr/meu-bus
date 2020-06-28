import React from 'react';
import { Text, View, Linking } from 'react-native';

import { ButtonBar, HeaderBar, DivisorBar, ItemDivisor } from '../../components';

import { getTranslation } from '../../util/locales';
import { getThemeColors } from '../../util/appContext';

import styles from './styles';

const Help = () => {

    const colors = getThemeColors();

    const handleSendEmail = () => {
        Linking.openURL('mailto:ggr89@outlook.com?subject=Contato por Suporte')
    }

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentFunctions}>
                <DivisorBar text={getTranslation('words.help')} />

                <View style={styles.contentText}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {getTranslation('text.emailHelp')}
                    </Text>
                </View>

                <ItemDivisor />

                <ButtonBar
                    iconType={"envelope"}
                    text={getTranslation('phrases.sendEmail')}
                    callback={() => handleSendEmail()}
                />
            </View>
        </View>
    );
}

export default Help;