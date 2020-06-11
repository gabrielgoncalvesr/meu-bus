import React, { useState } from 'react';
import { Ionicons, FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';

const User = () => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={() => navigateBack()}>
                <Ionicons name="md-arrow-round-back" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.infoBox}>
                <Image
                    source={require('../../../assets/user-icons/user-icon1.jpg')}
                    style={styles.infoIcon}
                />
                <View style={styles.infoName}>
                    <Text style={styles.infoNameText}>{false ? "Gabriel" : "Visitante"}</Text>
                </View>

                <View />
            </View>
            <View style={styles.functionsBox}>
                <View style={styles.contentFunctions}>
                    <View style={styles.divisorBar}>
                        <Text style={styles.divisorBarText}>FUNÇÕES</Text>
                    </View>

                    <View style={styles.functionItem}>
                        <View style={styles.functionItemIcon}>
                            <FontAwesome name="gear" size={28} color="#162447" />
                        </View>

                        <Text style={styles.functionItemText}>Configurações</Text>
                    </View>

                    <View style={styles.itemDivisor} />

                    <View style={styles.functionItem}>
                        <View style={styles.functionItemIcon}>
                            <FontAwesome5 name="brush" size={24} color="#162447" />
                        </View>

                        <Text style={styles.functionItemText}>Alterar Tema</Text>
                    </View>

                    <View style={styles.itemDivisor} />

                    <View style={styles.functionItem}>
                        <View style={styles.functionItemIcon}>
                            <FontAwesome name="gear" size={28} color="#162447" />
                        </View>

                        <Text style={styles.functionItemText}>Alterar </Text>
                    </View>

                    <View style={styles.divisorBar}>
                        <Text style={styles.divisorBarText}>INFORMAÇÕES</Text>
                    </View>

                    <View style={styles.functionItem}>
                        <View style={styles.functionItemIcon}>
                            <Entypo name="info-with-circle" size={24} color="black" />
                        </View>

                        <Text style={styles.functionItemText}>Informações</Text>
                    </View>

                    <View style={styles.itemDivisor} />
                </View>
            </View>
        </View>
    );
}

export default User;