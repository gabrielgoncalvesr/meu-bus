import React, { useState } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';

const User = () => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigateBack()}>
                <Ionicons name="md-arrow-round-back" size={30} color="#828282" />
            </TouchableOpacity>
            <View style={styles.infoBox}>
                <FontAwesome name="user-circle" size={80} color="black" />
                <View>
                    <Text>{true ? "TESTE 1" : "TESTE 2"}</Text>
                </View>
            </View>
            <View style={styles.functionsBox}>
                <View style={styles.contentFunctions}>
                    <View style={styles.divisorBar}>
                        <Text>BUSCA DE ROTAS</Text>
                    </View>

                    <View style={styles.functionItem}>
                        <Text>Configurações</Text>
                    </View>

                    <View style={styles.itemDivisor} />

                    <View style={styles.functionItem}>
                        <Text>{true ? "TESTE 1" : "TESTE 2"}</Text>
                    </View>

                    <View style={styles.itemDivisor} />

                    <View style={styles.functionItem}>
                        <Text>{true ? "TESTE 1" : "TESTE 2"}</Text>
                    </View>

                    <View style={styles.divisorBar}>
                        <Text>BUSCA DE ROTAS</Text>
                    </View>

                    <View style={styles.itemDivisor} />

                    <View style={styles.functionItem}>
                        <Text>Reportar um Problema</Text>
                    </View>

                    <View style={styles.itemDivisor} />
                </View>
            </View>
        </View>
    );
}

export default User;