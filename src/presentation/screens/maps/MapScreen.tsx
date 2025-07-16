import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🗺️ MapScreen</Text>
            <Text style={styles.subtitle}>Aquí se mostrará el mapa próximamente.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2a5d9f',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
    },
});
