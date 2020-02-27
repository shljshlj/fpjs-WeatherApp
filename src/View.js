import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

import {
  cityInputMsg,
  addCityMsg,
} from './Update';

const { div, h1, form, label, input, button, pre } = hh(h);

function searchCityForm(dispatch, inputValue) {
  return div([
    form({
      onsubmit: e => {
        e.preventDefault();
        dispatch(addCityMsg(inputValue))
      }
    }, [
      label({className: 'f6 b db mb2'}, 'Location'),
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

function view(dispatch, model) {
  const { city } = model;
  return div({ className: 'mw6 center' }, [
    h1({ className: 'f2 pv2 bb' }, 'Weather'),
    searchCityForm(dispatch, city),
    pre(JSON.stringify(model, null, 2)),
  ]);
}

export default view;