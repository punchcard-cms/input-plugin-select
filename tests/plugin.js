import test from 'ava';
import tests from 'punchcard-shared-tests';
import nunjucks from 'nunjucks';
import contains from 'validator/lib/contains';

import plugin from '../';

tests.plugins(test, plugin);

const data = {
  select: {
    id: '123456',
    label: 'select one',
    name: 'selectinator',
    options: plugin.inputs.select.options,
  },
  settings: {
    multiple: true,
  },
};

test('select fills options', t => {
  // Render html
  const rendered = nunjucks.renderString(plugin.html, data);

  // check the options
  t.true(contains(rendered, '<option value=\"mike\" >Michaelangelo</option>'), 'Select must contain mike');
  t.true(contains(rendered, '<option value=\"leo\" >Leonardo</option>'), 'Select must contain leo');
  t.true(contains(rendered, '<option value=\"ralph\" >Raphael</option>'), 'Select must contain ralph');
  t.true(contains(rendered, '<option value=\"don\" >Donatello</option>'), 'Select must contain don');
});

test('multiple setting renders multiple attribute', t => {
  // Render html
  const rendered = nunjucks.renderString(plugin.html, data);

  // check the options
  t.true(contains(rendered, 'multiple=\"multiple\"'), 'Select must contain multiple attribute');
});
