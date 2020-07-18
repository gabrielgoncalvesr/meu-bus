import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { getThemeColors } from '../../util/appContext';

import styles from './styles';

const BusList = ({ data, callback, onPressBar }) => {

    const colors = getThemeColors();

    const handleLoadData = () => {
        if (callback) {
            callback();
        }
    }

    const handlePressBar = (value) => {
        onPressBar(value);
    }

    return (
        <FlatList
            data={data}
            style={styles.content}
            onEndReachedThreshold={0.5}
            onEndReached={() => handleLoadData()}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
                <>
                    <View style={styles.barContent}>
                        <View style={[styles.tagContent, { backgroundColor: `#${item.color}` }]}>
                            <Text style={[styles.tagText, { color: `#${item.textColor}` }]}>
                                {item.shortName}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.touchableArea}
                            onPress={() => handlePressBar(item)}
                        >
                            <View style={styles.informationContent}>
                                <Text style={[styles.informationText, { color: colors.text }]}>
                                    {item.longName}
                                </Text>
                            </View>

                            <View style={styles.iconContent}>
                                <FontAwesome
                                    style={[styles.icon, { color: colors.text }]}
                                    name="chevron-right"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        />
    );
}

export default BusList;