import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles } from '../../../config/theme/styles';
import { usePermissionStore } from '../../store/permissions/usePermissionStore';

export default function PermissionsScreen() {

    const { locationStatus, requestLocationPermission } = usePermissionStore();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Permisos requeridos</Text>
            <Text style={styles.description}>
                Para continuar, necesitamos acceso a tu ubicación. Por favor, concede los permisos necesarios.
            </Text>
            <Pressable
                style={globalStyles.btnPrimary}
                onPress={ () => requestLocationPermission() }
            >
                <Text style={styles.buttonText}>Conceder permisos</Text>
            </Pressable>

            <Text style={styles.description}>Estado actual usando zustand: {locationStatus}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f5f7fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#2d3748',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 32,
        color: '#4a5568',
    },
    button: {
        backgroundColor: '#3182ce',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
