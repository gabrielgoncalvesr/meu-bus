import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native';

import {
    getItem,
    addItem
} from './util/storage';
import { ThemeContext } from './util/themeContext';

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

const Stack = createStackNavigator();

const Routes = () => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(true);

    const themeContext = React.useMemo(() => ({
        handleThemeChange: async (value) => {
            await addItem('theme', value);
            setIsDarkTheme(value === "dark" ? true : false)
        }
    }), []);

    const CustomDefaultTheme = {
        ...DefaultTheme,
        colors: {
            background: '#F5F5F5',//#1B1C21
            text: '#162447',







            background: '#FFFFFF',
            primary: '#FFFFFF',
            //text: '#162447',



            basic: '#000000',

            secondary: '#162447',
            thirdy: '#eeeeee',


            item: '#FFFFFF',
            content: '#F5F5F5',

            //thirdy: '#F5F5F5',
            fourth: '#FFFFFF'
        }
    }

    const CustomDarkTheme = {
        ...DarkTheme,
        colors: {
            background: '#1B1C21',//#1B1C21
            text: '#EEEEEE',







            primary: '#1B1C21',



            basic: '#FFFFFF',

            secondary: '#F2F2F2',
            thirdy: '#393E46',







            item: '#FFFFFF',
            content: '#F5F5F5',

            //thirdy: '#F5F5F5',
            fourth: '#FFFFFF'
        }
    }

    // React.useEffect(() => {
    //     const loadTheme = async () => {
    //         const theme = await getItem('theme');
    //         console.log(theme)
    //     }

    //     loadTheme();
    // }, []);

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    return (
        <ThemeContext.Provider value={themeContext}>
            <NavigationContainer theme={theme}>
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
            </NavigationContainer>
        </ThemeContext.Provider>
    )
}

export default Routes;