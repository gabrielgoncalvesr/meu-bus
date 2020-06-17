import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Home from './pages/Home';
import Search from './pages/Search';
import BusList from './pages/BusList';
import Tracking from './pages/Tracking';
import User from './pages/User';

import Info from './pages/Info';
import Help from './pages/Help';
import Settings from './pages/Settings';

import Image from './pages/Image';
import Theme from './pages/Theme';
import Language from './pages/Language';
// import Authentication from './pages/Authentication';

const HomeScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Home />
        </SafeAreaView>
    );
}

const SearchScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Search />
        </SafeAreaView>
    );
}

const TrackingScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Tracking />
        </SafeAreaView>
    );
}

const BusListScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <BusList />
        </SafeAreaView>
    );
}

const UserScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <User />
        </SafeAreaView>
    );
}

const InfoScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Info />
        </SafeAreaView>
    );
}


const HelpScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Help />
        </SafeAreaView>
    );
}


const SettingsScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Settings />
        </SafeAreaView>
    );
}

const LanguageScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Language />
        </SafeAreaView>
    );
}

const ThemeScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Theme />
        </SafeAreaView>
    );
}

const ImageScreen = () => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Image />
        </SafeAreaView>
    );
}

// const AuthenticationScreen = () => {
//     return (
//         <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
//             <StatusBar barStyle="light-content" backgroundColor="#222831" />
//             <Authentication />
//         </SafeAreaView>
//     );
// }

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} />
                    <Stack.Screen name="BusListScreen" component={BusListScreen} />
                    <Stack.Screen name="TrackingScreen" component={TrackingScreen} />
                    <Stack.Screen name="UserScreen" component={UserScreen} />

                    <Stack.Screen name="InfoScreen" component={InfoScreen} />
                    <Stack.Screen name="HelpScreen" component={HelpScreen} />
                    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

                    <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
                    <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
                    <Stack.Screen name="ImageScreen" component={ImageScreen} />
                    {/* <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});