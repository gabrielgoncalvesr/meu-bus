import React from 'react';
import { Text, View } from 'react-native';

import { HeaderBar, DivisorBar } from '../../components';

import { getTranslation } from '../../util/locales';
import { getThemeColors } from '../../util/themeContext';

import styles from './styles';

const Info = () => {

    const colors = getThemeColors();

    return (
        <View style={styles.content}>
            <HeaderBar />

            <View style={styles.contentInfo}>
                <DivisorBar text={getTranslation('words.information')} />

                <View style={styles.contentText}>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {getTranslation('text.buildInfo')}
                    </Text>
                    <Text style={[styles.text, { color: colors.text }]}>
                        {getTranslation('text.goalsInfo')}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Info;