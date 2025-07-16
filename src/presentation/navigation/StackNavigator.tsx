import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/loading/LoadingScreen';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';
import MapScreen from '../screens/maps/MapScreen';

export type RootStackParams = {
    LoadingScreen: undefined;
    PermissionsScreen: undefined;
    MapScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

// Configuración común para las pantallas
const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyleInterpolator: ({ current }: any) => ({
        cardStyle: {
            opacity: current.progress,
        },
    }),
};
  
// Configuración específica para cada pantalla
const screenConfigs = [
    {
        name: 'LoadingScreen' as const,
        component: LoadingScreen,
        options: {
            ...screenOptions,
            animationEnabled: false, // Sin animación para la pantalla de carga
        },
    },
    {
        name: 'PermissionsScreen' as const,
        component: PermissionsScreen,
        options: {
            ...screenOptions,
            gestureEnabled: false, // No permitir volver atrás desde permisos
        },
    },
    {
        name: 'MapScreen' as const,
        component: MapScreen,
        options: {
            ...screenOptions,
            headerShown: false,
        },
    },
];

export const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoadingScreen"
            screenOptions={screenOptions}
        >
            {screenConfigs.map(({ name, component, options }) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    component={component}
                    options={options}
                />
            ))}
        </Stack.Navigator>
    );
};
