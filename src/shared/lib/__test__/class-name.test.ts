import { cx } from 'shared/lib/class-names';

describe('cx', () => {
  it('should work with strings', () => {
    expect(cx('class1', 'class2')).toEqual('class1 class2');
  });

  it('should work with incorrect params', () => {
    expect(cx('class1', undefined, 'class2')).toEqual('class1 class2');
  });
});
