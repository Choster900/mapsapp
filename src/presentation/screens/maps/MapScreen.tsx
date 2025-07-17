import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../../components/Map';
import { useLocationStore } from '../../store/location/useLocationStore';
import LoadingScreen from '../loading/LoadingScreen';

export default function MapScreen() {
    const { lastKnownLocation, getLocation } = useLocationStore();
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        if (lastKnownLocation) {
            setMapReady(true); // solo después de obtener la ubicación real
        }
    }, [lastKnownLocation]);

    if (!mapReady || lastKnownLocation === null) {
        return <LoadingScreen />;
    }

    return (
        <View style={styles.container}>
            <Map initialLocation={lastKnownLocation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
});
