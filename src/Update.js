import * as R from 'ramda';

const MSGS = {
  LOCATION_INPUT: 'LOCATION_INPUT',
  ADD_CITY: 'ADD_CITY',
  REMOVE_LOCATION: 'REMOVE_LOCATION',
};

export function locationInputMsg(locationInput) {
  return {
    type: MSGS.LOCATION_INPUT,
    locationInput,
  };
}

export const addLocationMsg = {
    type: MSGS.ADD_LOCATION,
};

export function removeLocationMsg(id) {
  return {
    type: MSGS.REMOVE_LOCATION,
    id,
  }
}


function update(msg, model) {
  switch (msg.type) {
    case MSGS.LOCATION_INPUT: {
      const { locationInput } = msg;
      return { ...model, locationInput };
    }
    case MSGS.ADD_LOCATION: {
      const { nextId, locationInput, locations } = model;
      const newLocation = {
        id: nextId,
        name: locationInput,
        temp: '-',
        low: '-',
        high: '-',
      };
      const updatedLocations = R.prepend(newLocation, locations);
      return {
        ...model,
        locationInput: '',
        locations: updatedLocations,
        nextId: nextId + 1,
      };
    }
    case MSGS.REMOVE_LOCATION: {
      const { id } = msg;
      const { locations } = model;
      const updatedLocations = R.reject(R.propEq('id', id), locations);
      return { ...model, locations: updatedLocations };
    }
    default:
      return model;
  }
}

export default update;
