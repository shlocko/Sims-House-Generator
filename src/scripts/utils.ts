export const randomInt = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateBudget = (min: number, max: number): number => {
	let slice = randomInt(1, 3)
	let slice2 = randomInt(1, 2)
	let quarter = Math.floor((max - min) / 4)
	if (slice === 1) {
		if (slice2 === 1) {
			return randomInt(min, min + quarter)
		} else {
			return randomInt(min + (quarter * 3), max)
		}
	} else {
		return randomInt(min + quarter, max - quarter)
	}
}

export function randomElement<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}
