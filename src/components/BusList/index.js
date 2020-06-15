import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import ItemDivisor from '../ItemDivisor'

import styles from './styles';

const BusList = ({
    data,
    callback,
    onPressBar
}) => {

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
                                <Text style={styles.informationText}>
                                    {item.longName}
                                </Text>
                            </View>

                            <View style={styles.iconContent}>
                                <FontAwesome
                                    style={styles.icon}
                                    name="chevron-right"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ItemDivisor />
                </>
            )}
        />
    );
}

export default BusList;