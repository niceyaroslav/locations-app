import { 
    CREATE_LOCATION,
    RETRIEVE_LOCATIONS,
    UPDATE_LOCATION,
    DELETE_LOCATION,
    //SET_LOCATION
} from '../actions/types';

const initialState = {
  locations:[]
};

function locationsReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_LOCATION:
          return {...state, locations:payload};

      case RETRIEVE_LOCATIONS:
        return {...state, locations:payload};
  
      case UPDATE_LOCATION: { 
        let updated = state.locations.map((location) => {
          if (location.id === payload.id) {
            return payload;
          } else {
            return location;
          }
        })
        return {...state, locations:updated};
      }
  
      case DELETE_LOCATION:{
        let filtered = state.locations.filter(
          ({ id }) => id !== payload.id
        );
        return {...state, locations: filtered};
      }

      // case SET_LOCATION: {
      //   let filtered = state.locations.filter(
      //     ({ id }) => id === payload
      //   );
      //   return {...state, currentLocation: filtered};
      // }

      default:
        return state;
    }
  };
  
  export default locationsReducer;