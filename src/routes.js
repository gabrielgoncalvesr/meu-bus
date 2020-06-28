import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { getItem, addItem } from './util/storage';
import { AppContext } from './util/appContext';

import { loadLocales } from './util/locales';

import Home from './pages/Home';
import User from './pages/User';
import Info from './pages/Info';
import Help from './pages/Help';
import Image from './pages/Image';
import Theme from './pages/Theme';
import Search from './pages/Search';
import BusList from './pages/BusList';
import Tracking from './pages/Tracking';
import Language from './pages/Language';
import Authentication from './pages/Authentication';

const Stack = createStackNavigator();
const StackScreens = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="UserScreen" component={User} />
        <Stack.Screen name="InfoScreen" component={Info} />
        <Stack.Screen name="HelpScreen" component={Help} />
        <Stack.Screen name="ThemeScreen" component={Theme} />
        <Stack.Screen name="ImageScreen" component={Image} />
        <Stack.Screen name="SearchScreen" component={Search} />
        <Stack.Screen name="BusListScreen" component={BusList} />
        <Stack.Screen name="TrackingScreen" component={Tracking} />
        <Stack.Screen name="LanguageScreen" component={Language} />
    </Stack.Navigator>
)

const Auth = createStackNavigator();
const AuthScreen = () => (
    <Auth.Navigator headerMode="none">
        <Auth.Screen name="Authentication" component={Authentication} />
    </Auth.Navigator>
)

const Routes = () => {

    const [selectedTheme, setSelectedTheme] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const themeContext = useMemo(() => ({
        handleThemeChange: async (value) => {
            setSelectedTheme(value);
            await addItem('theme', value);
        },
        handleLanguageChange: async (value) => {
            loadLocales(value);

            setSelectedLanguage(value);
            await addItem('language', value);
        },
        handleLoginUser: async (value) => {
            setAuthenticatedUser(value);
            await addItem('user', value);
        },
        getToken: async () => {
            const user = await getItem('user');
            return user ? user.token : null;
        }
    }), []);

    useEffect(() => {
        const loadBasicData = async () => {
            //await addItem('user', null)

            let language = await getItem('language');
            language = language ? language : 'pt-BR';

            let theme = await getItem('theme');
            theme = theme ? theme : 'light';

            await loadLocales(language);

            setSelectedTheme(theme);

            await addItem('theme', theme);
            await addItem('language', language);
        }

        loadBasicData();
    }, []);

    const CustomDefaultTheme = {
        ...DefaultTheme,
        colors: {
            background: '#F5F5F5',//#1B1C21
            text: '#162447',
            card: '#162447',
            cardText: '#EEEEEE',





            primary: '#FFFFFF',
            basic: '#000000',
            secondary: '#162447',
            thirdy: '#eeeeee',
            item: '#FFFFFF',
            content: '#F5F5F5',
            fourth: '#FFFFFF'
        }
    }

    const CustomDarkTheme = {
        ...DarkTheme,
        colors: {
            background: '#1B1C21',//#1B1C21
            text: '#EEEEEE',
            card: '#EEEEEE',
            cardText: '#162447',
            cardDark: '#393E46',





            primary: '#1B1C21',
            basic: '#FFFFFF',
            secondary: '#F2F2F2',
            thirdy: '#393E46',
            item: '#FFFFFF',
            content: '#F5F5F5',
            fourth: '#FFFFFF'
        }
    }

    const theme = selectedTheme === "dark" ? CustomDarkTheme : CustomDefaultTheme;

    return (
        <AppContext.Provider value={themeContext}>
            <NavigationContainer theme={theme}>
                {
                    authenticatedUser
                        ? <StackScreens />
                        : <AuthScreen />
                }
            </NavigationContainer>
        </AppContext.Provider>
    )
}

export default Routes;