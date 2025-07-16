import { create } from "zustand";
import { requestLocationPermission, checkLocationPermission } from '../../../actions/permissions/location';
import { PermissionStatus } from "../../../infraestructure/interfaces/permissions";

interface PermissionStoreState {
    locationStatus: PermissionStatus
    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<PermissionStoreState>()(set => ({

    locationStatus: 'undetermined',
    
    requestLocationPermission: async () => {
        const status = await requestLocationPermission();
        set({ locationStatus: status });
        return status;
    },

    checkLocationPermission: async () => {
        const status = await checkLocationPermission();
        set({ locationStatus: status });
        return status;
    },
}))
