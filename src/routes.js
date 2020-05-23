import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Home from './pages/Home';
import Search from './pages/Search';
import Tracking from './pages/Tracking';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Home />
        </SafeAreaView>
    );
}

function SearchScreen({ navigation }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Search />
        </SafeAreaView>
    );
}

function TrackingScreen({ navigation }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Tracking />
        </SafeAreaView>
    );
}

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} />
                    <Stack.Screen name="TrackingScreen" component={TrackingScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});