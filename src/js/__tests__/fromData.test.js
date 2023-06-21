import * as data from '../data';

test('dataKeys', () => {
  expect(() => {
    Object.keys(data).toBe(
      ['Bowman',
        'Swordsman',
        'Magician',
        'Undead',
        'Zombie',
        'Daemon'],
    );
  });
});
