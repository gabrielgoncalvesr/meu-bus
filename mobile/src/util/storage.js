import { AsyncStorage } from 'react-native';

const addItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (err) {
        return false;
    }
}

const getItem = async (key) => {
    try {
        const objectAsString = await AsyncStorage.getItem(key);
        return JSON.parse(objectAsString);
    } catch (err) {
        return null;
    }
}

const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (err) {
        return false;
    }
}

export {
    addItem,
    getItem,
    removeItem,
}