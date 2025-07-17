import { create } from "zustand";
import { Location } from "../../../infraestructure/interfaces/location";
import { getCurrentLocationn } from "../../../actions/location/location";



interface LocationState {
    lastKnownLocation: Location | null;
    getLocation: () => Promise<Location | null>;
}


export const useLocationStore = create<LocationState>()((set, get) => ({
    lastKnownLocation: null,

    getLocation: async () => {
        try {
            const currentLocation = await getCurrentLocationn();
            set({ lastKnownLocation: currentLocation });
            return currentLocation;
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
        }
    },
}));
