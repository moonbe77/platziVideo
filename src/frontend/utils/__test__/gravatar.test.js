import gravatar from '../gravatar';

describe('Gravatar Image', () => {
  it('should return default url', () => {
    const email = 'moonbe77@gmail.com';
    const gravatarDefaultImage =
      'https://gravatar.com/avatar/49081163d036575756f9978e502acbf9';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });
});
