import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator'

export default function MapsApp() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
