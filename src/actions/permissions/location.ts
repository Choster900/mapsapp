import { check } from './../../../node_modules/react-native-permissions/src/index';
import { PermissionStatus as LocationPermissionStatus, openSettings, PERMISSIONS, request } from "react-native-permissions"
import type { PermissionStatus } from "../../infraestructure/interfaces/permissions"
import { Platform } from "react-native"


export const requestLocationPermission = async (): Promise<PermissionStatus> => {

    let status: LocationPermissionStatus = 'unavailable'


    if (Platform.OS === 'ios') {
        status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else if (Platform.OS === 'android') {
        status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error('Unsupported platform')
    }

    if (status === 'blocked') {

        await openSettings()

    }

    const permissionMapper: Record<LocationPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',
        limited: 'limited',
    }

    return permissionMapper[status] ?? 'unavailable'
}


export const checkLocationPermission = async (): Promise<PermissionStatus> => {

    let status: LocationPermissionStatus = 'unavailable'


    if (Platform.OS === 'ios') {
        status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    } else if (Platform.OS === 'android') {
        status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    } else {
        throw new Error('Unsupported platform')
    }

    if (status === 'blocked') {

        await openSettings()

    }

    const permissionMapper: Record<LocationPermissionStatus, PermissionStatus> = {
        granted: 'granted',
        denied: 'denied',
        blocked: 'blocked',
        unavailable: 'unavailable',
        limited: 'limited',
    }

    return permissionMapper[status] ?? 'unavailable'
}
