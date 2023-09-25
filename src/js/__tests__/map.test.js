import ErrorRepository from '../map';

test('testing error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(430)).toBe('Error 430');
});

test('testing unknown error', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(414)).toBe('Unknown error');
});
