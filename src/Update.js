import * as R from 'ramda';

const MSGS = {
  CITY_INPUT: 'CITY_INPUT',
  ADD_CITY: 'ADD_CITY',
};

export function cityInputMsg(cityInput) {
  return {
    type: MSGS.CITY_INPUT,
    cityInput,
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
      const { cityInput } = msg;
      return { ...model, cityInput };
    }
    case MSGS.ADD_CITY: {
      const { nextId: id } = model;
      const city = {
        id,
        name: msg.city,
        temp: '-',
        low: '-',
        high: '-',
      };
      const cities = R.prepend(city, model.cities);

      return { ...model, nextId: id + 1, cities, cityInput: '' }
    }
    default:
      return model;
  }
}

export default update;
