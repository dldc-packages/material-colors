import Colors from '../src';

test('colors at 500 match raw colors', () => {
  expect(Colors.red(500)).toEqual('#F44336');
  expect(Colors.blue(500)).toEqual('#2196F3');
  expect(Colors.blueAccent(400)).toEqual('#2979FF');
});
