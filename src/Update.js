import * as R from 'ramda';

const MSGS = {
  CITY_INPUT: 'CITY_INPUT',
  ADD_CITY: 'ADD_CITY',
};

export function cityInputMsg(city) {
  return {
    type: MSGS.CITY_INPUT,
    city,
  };
}

export function addCityMsg(city) {
  return {
    type: MSGS.ADD_CITY,
    city,
  }
}

function update(msg, model) {
  switch (msg.type) {
    case MSGS.CITY_INPUT: {
      
    }
    case MSGS.ADD_CITY: {

    }
    default:
      return model;
  }
}

export default update;
