import React, { PropsWithChildren, useEffect } from 'react'
import { AppState, Text, View } from 'react-native'
import { usePermissionStore } from '../store/permissions/usePermissionStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigation/StackNavigator'

export default function PermissionsChecker({ children }: PropsWithChildren) {


    const { locationStatus, checkLocationPermission } = usePermissionStore()

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {
        const suscription = AppState.addEventListener('change', async (nextAppState) => {

            console.log('AppState changed to:', nextAppState);
            if (nextAppState === 'active') {
                await checkLocationPermission()
            }
        })

        return () => {
            suscription.remove()
        }
    }, [])

    useEffect(() => {

        console.log(locationStatus)

        if (locationStatus === 'granted') {

            navigation.reset({
                index: 0,
                routes: [{ name: 'MapScreen' }],
            })

        } else if (locationStatus === 'undetermined') {

            navigation.reset({
                index: 0,
                routes: [{ name: 'PermissionsScreen' }],
            })
        }

    }, [locationStatus])




    return (
        <>
            {children}
        </>
    )
}
