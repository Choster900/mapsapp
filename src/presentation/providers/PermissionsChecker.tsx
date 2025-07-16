import React, { PropsWithChildren, useEffect } from 'react'
import { AppState, Text, View } from 'react-native'
import { usePermissionStore } from '../store/permissions/usePermissionStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigation/StackNavigator'

export default function PermissionsChecker({ children }: PropsWithChildren) {


    const { locationStatus, checkLocationPermission } = usePermissionStore()

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {

        if (locationStatus === 'granted') {

            navigation.navigate('MapScreen')

        } else if (locationStatus === 'denied') {
            navigation.navigate('PermissionsScreen')
        }

    }, [locationStatus])


    useEffect(() => {
        const suscription = AppState.addEventListener('change', async (nextAppState) => {
            if (nextAppState === 'active') {
                await checkLocationPermission()
            }
        })

        return () => {
            suscription.remove()
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
