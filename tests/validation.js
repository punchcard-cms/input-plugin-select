import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'select',
    value: 'foo bar baz',
  },
  all: {
    select: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    select: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
