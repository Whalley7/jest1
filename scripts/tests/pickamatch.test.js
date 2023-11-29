

// userInfo.js
function getUserInfo() {
    return {
      username: 'JohnDoe',
      level: 5,
      score: 1000,
    };
  }
  

test('getUserInfo returns the correct user information', () => {
  const user = getUserInfo();

  // Check if the properties exist
  expect(user).toHaveProperty('username');
  expect(user).toHaveProperty('level');
  expect(user).toHaveProperty('score');

  // Check the values of the properties
  expect(user.username).toBe('JohnDoe');
  expect(user.level).toBe(5);
  expect(user.score).toBe(1000);
});

  