import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator'
import PermissionsChecker from './presentation/providers/PermissionsChecker'

export default function MapsApp() {
    return (
        <NavigationContainer>
            <PermissionsChecker>
                <StackNavigator />
            </PermissionsChecker>
        </NavigationContainer>
    )
}
