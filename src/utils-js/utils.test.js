import { Utils } from './utils';

describe('Utils', () => {
	it('should check if data is not null or undefined', () => {
		const emptyVar = null;
		const UndefVar = undefined;
		expect(Utils.exists(emptyVar)).toBe(false);
		expect(Utils.exists(UndefVar)).toBe(false);
	});

	it('should return True on a defined value', () => {
		const arr = [];
		const obj = {};
		expect(Utils.exists(arr)).toBe(true);
		expect(Utils.exists(obj)).toBe(true);
	});
});
