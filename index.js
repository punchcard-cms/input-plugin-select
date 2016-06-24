'use strict';

/**
 * select Input Plugin
 *
 *
 * An input plugin for a select input type
 */
const validation = require('./lib/validation.js');

/**
 * Single select Input Plugin
 * @module selectInputPlugin
 */
module.exports = {
  name: 'select',
  description: 'An input plugin for a select input type',
  validation: {
    selectValidation: validation,
  },
  inputs: {
    select: {
      validation: {
        function: 'selectValidation',
        on: 'blur',
      },
      label: 'Select one',
      options: [
        { label: 'Michaelangelo',
          value: 'mike',
        },
        { label: 'Leonardo',
          value: 'leo',
        },
        { label: 'Raphael',
          value: 'ralph',
        },
        { label: 'Donatello',
          value: 'don',
        },
      ],
      type: 'select',
      settings: {
        multiple: true,
        empty: false,
      },
    },
  },
  html: '<label for="{{select.id}}">{{select.label}}</label><select id="{{select.id}}" name="{{select.name}}"{% if settings.multiple %}multiple="multiple"{% endif %}>{% for option in select.options %}<option value="{{option.value}}" {% if option.value == select.value %}selected{% endif %}>{{option.label}}</option>{% endfor %}</select></label>',
};
