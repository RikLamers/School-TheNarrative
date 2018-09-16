export class Utils {
	static exists(data) {
		// Check if data is not null or undefined
		return data !== null && data !== undefined;
	}

	static notExists(data) {
		// Check if data is null or undefined
		return data === null || data === undefined;
	}
}
