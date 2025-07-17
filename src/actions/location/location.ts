import Geolocation from '@react-native-community/geolocation';
import { Location } from '../../infraestructure/interfaces/location';


export const getCurrentLocationn = async (): Promise<Location> => {

    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve({ latitude, longitude });
            },
            (error) => {

                console.error('Error getting location');
                reject(error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    });

}
