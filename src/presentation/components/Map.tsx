import React, { useMemo } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../infraestructure/interfaces/location';

interface MapProps {
    showUserLocation?: boolean;
    initialLocation: Location;
    onRegionChange?: (region: any) => void;
    zoomLevel?: {
        latitudeDelta: number;
        longitudeDelta: number;
    };
}

const DEFAULT_ZOOM = {
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
};

const Map: React.FC<MapProps> = ({
    showUserLocation = true,
    initialLocation,
    onRegionChange,
    zoomLevel = DEFAULT_ZOOM,
}) => {
    // Memorizar la región inicial para evitar recálculos
    const initialRegion = useMemo(
        () => ({
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
            ...zoomLevel,
        }),
        [initialLocation.latitude, initialLocation.longitude, zoomLevel]
    );

    return (
        <MapView
            showsUserLocation={showUserLocation}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
            followsUserLocation={true}
            onRegionChangeComplete={onRegionChange}
        >
            {/* Marcador comentado - descomenta si necesitas usarlo
      <Marker
        coordinate={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
        }}
        title={"Marker Title"}
        description={"Marker Description"}
        image={require('../../assets/custom-marker.png')}
      />
      */}
        </MapView>
    );
};

export default Map;
