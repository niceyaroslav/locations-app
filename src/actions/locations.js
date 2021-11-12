import { 
    CREATE_LOCATION,
    RETRIEVE_LOCATIONS,
    UPDATE_LOCATION,
    DELETE_LOCATION,
    //SET_LOCATION
} from './types';

import locationService from '../services/locationService';

export const createLocation = ( name, address, city, assignedUsers, assignedVendors, assignedCustomers, subLocations ) => async (dispatch) => {
    try {
        const res = await locationService.create({ name, address, city, assignedUsers, assignedVendors, assignedCustomers, subLocations });
        dispatch({
          type: CREATE_LOCATION,
          payload: res.data,
        });
    
        return Promise.resolve(res.data);
      } catch (err) {
        return Promise.reject(err);
      }
};

export const retriveLocations = () => async (dispatch) => {
    try {
        const res = await locationService.getAll();
    
        dispatch({
          type: RETRIEVE_LOCATIONS,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }
};

export const updateLocation = (id, data) => async (dispatch) => {
    try {
        const res = await locationService.update(id, data);
    
        dispatch({
          type: UPDATE_LOCATION,
          payload: data,
        });
    
        return Promise.resolve(res.data);
      } catch (err) {
        return Promise.reject(err);
      }
};

export const deleteLocation = (id) => async (dispatch) => {
    try {
        await locationService.remove(id);
        dispatch({
            type:DELETE_LOCATION,
            payload: { id },
        });

    } catch(err) {
        console.log(err);
    }
};

// export const setLocation = (id) => async (dispatch) => {

//   dispatch({
//     type:SET_LOCATION,
//     payload: { id },
//   });
// }