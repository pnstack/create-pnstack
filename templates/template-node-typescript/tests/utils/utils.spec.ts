import { getCurrentTimestamp } from '@/utils';

describe('Utils', () => {
  it('Get current timestamp', () => {
    const timestamp = getCurrentTimestamp();
    const now = Math.floor(Date.now() / 1000);
    expect(timestamp).toBe(now);
  });
});
