import React from 'react';
import { useTheme } from '@react-navigation/native';

export const AppContext = React.createContext();

const getThemeColors = () => {
    const { colors } = useTheme();
    return colors;
}

export {
    getThemeColors
}