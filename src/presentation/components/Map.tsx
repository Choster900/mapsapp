import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../infraestructure/interfaces/location';

interface MapProps {
    showUserLocation?: boolean;
    initialLocation: Location
}

export default function Map({ showUserLocation = true, initialLocation }: MapProps) {
    return (
        <>
            <MapView
                showsUserLocation={showUserLocation}
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: initialLocation.latitude,
                    longitude: initialLocation.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                followsUserLocation={true} // << esto sigue el movimiento del usuario

            >
                {/*  <Marker
                    coordinate={{
                        latitude: initialLocation.latitude,
                        longitude: initialLocation.longitude,
                    }}
                    title={"Marker Title"}
                    description={"Marker Description"}

                    image={require('../../assets/custom-marker.png')}
                /> */}

            </MapView>
        </>
    )
}
