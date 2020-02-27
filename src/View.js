import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import {
  cityInputMsg,
  addCityMsg,
  deleteCityMsg,
} from './Update';

const { div, h1, form, label, input, button, ul, li, i, pre } = hh(h);

function searchCityForm(dispatch, inputValue) {
  return div([
    form({
      onsubmit: e => {
        e.preventDefault();
        dispatch(addCityMsg(inputValue))
      }
    }, [
      label({ className: 'f6 b db mb2' }, 'Location'),
      input({
        className: 'pa2 w-60',
        type: 'text',
        value: inputValue,
        oninput: e => dispatch(cityInputMsg(e.target.value)),
      }),
      button({
        className: 'pv2 ph3 br1',
        type: 'submit',
      }, 'Add'),
    ]),
  ]);
}

const cityCard = R.curry((dispatch, card) => {
  const { id, name, temp, low, high } = card;

  return li({ className: 'pa3 bb b--light-silver flex justify-between relative' }, [
    div({ className: 'w-60 tl' }, [
      div({ className: 'f7 b' }, 'Location'),
      div({ className: '' }, name)
    ]),
    div({ className: 'w-10 tc' }, [
      div({ className: 'f7 b' }, 'Temp'),
      div({ className: '' }, temp)
    ]),
    div({ className: 'w-10 tc' }, [
      div({ className: 'f7 b' }, 'Low'),
      div({ className: '' }, low)
    ]),
    div({ className: 'w-10 tc' }, [
      div({ className: 'f7 b' }, 'High'),
      div({ className: '' }, high)
    ]),
    i({
      className: 'relative top--1 right--1 mt1 mr1 fa fa-remove pointer black-40',
      onclick: () => dispatch(deleteCityMsg(id)),
    }),
  ]);
});

function view(dispatch, model) {
  const { cityInput, cities } = model;
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Weather'),
    searchCityForm(dispatch, cityInput),
    ul({ className: ' list pl0 ml0 ba b--light-silver br' }, [
      R.map(cityCard(dispatch), cities)
    ]),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;