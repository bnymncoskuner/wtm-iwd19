import { UserCountPipe } from './user-count.pipe';

describe('UserCountPipe', () => {
  it('create an instance', () => {
    const pipe = new UserCountPipe();
    expect(pipe).toBeTruthy();
  });
});
