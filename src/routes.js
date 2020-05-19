import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import Home from './pages/home';
import Maps from './components/map';
import ResizableComponentBar from './components/ResizableComponentBar';


function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#222831' }]}>
            <StatusBar barStyle="light-content" backgroundColor="#222831" />
            <Home />
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
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});