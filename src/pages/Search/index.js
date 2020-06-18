import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    AsyncStorage
} from 'react-native';

import {
    Input,
    Loading,
    BusList,
    Message,
    HeaderBar,
    DivisorBar,
} from '../../components';

import request from '../../services/api';

import styles from './styles';

const Search = () => {

    const navigation = useNavigation();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emptySearch, setEmptySearch] = useState(false);

    const navigateToTracking = async (value) => {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        console.log(user)
        if (!user) {
            await request.post({
                method: 'post',
                url: '/history',
                data: {
                    busId: value.id,
                    userId: user.id
                }
            });
        }

        navigation.navigate('TrackingScreen', { busData: value });
    }

    const handleTermSearch = async (value) => {
        setData([]);
        setLoading(true);
        setEmptySearch(false);

        if (!value && value === "") {
            setLoading(false);
            return;
        }

        const response = await request.get('/bus', {
            params: { searchTerm: value }
        });

        if (response.data.length === 0) {
            setEmptySearch(true);
        }
        setLoading(false);
        setData(response.data);
    }

    return (
        <View style={styles.content}>

            <HeaderBar>
                <View style={styles.searchBar}>
                    <Input
                        light
                        hasIcon
                        iconSize={20}
                        iconType={"search"}
                        placeholder={"código do linha, nome da linha..."}
                        callback={value => handleTermSearch(value)}
                    />
                </View>
            </HeaderBar>

            <DivisorBar text={"BUSCA DE ROTAS"} />

            <Loading loading={loading} />

            {emptySearch &&
                <Message text={"Nenhum resultado encontrado"} />
            }

            {!emptySearch &&
                <BusList
                    data={data}
                    onPressBar={navigateToTracking}
                />
            }
        </View>
    );
}

export default Search;