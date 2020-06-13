import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Text,
    View,
    Image
} from 'react-native';

import {
    ButtonBar,
    BackButton,
    DivisorBar
} from '../../components';

import styles from './styles';

const User = () => {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <BackButton callback={() => navigateBack()} />

            <View style={styles.userBar}>
                <Text style={styles.userName}>Visitante</Text>

                <Image
                    style={styles.userIcon}
                    source={require('../../../assets/user-icons/user-icon1.jpg')}
                />
            </View>

            <View style={styles.itemsBox}>
                <View style={styles.contentFunctions}>
                    <DivisorBar text={"CONFIGURAÇÕES"} />

                    <ButtonBar
                        iconType={"cog"}
                        text={"Configurações"}
                        callback={() => console.log("TESTE")}
                    />

                    <ButtonBar
                        iconType={"brush"}
                        text={"Alterar Tema"}
                        callback={() => console.log("TESTE")}
                    />

                    <ButtonBar
                        iconType={"brush"}
                        text={"Alterar Tema"}
                        callback={() => console.log("TESTE")}
                    />

                    <DivisorBar text={"INFORMAÇÕES"} />

                    <ButtonBar
                        iconType={"info-circle"}
                        text={"Informações"}
                        callback={() => console.log("TESTE")}
                    />

                    <ButtonBar
                        iconType={"question-circle"}
                        text={"Informações"}
                        callback={() => console.log("TESTE")}
                    />
                </View>
            </View>
        </View>
    );
}

export default User;