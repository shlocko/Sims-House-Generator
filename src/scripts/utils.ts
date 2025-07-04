import { roomConfiguration } from "./roomConfig"
import { room, roomNames } from "./types"

export const randomInt = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateBudget = (min: number, max: number): number => {
	let slice = randomInt(1, 3)
	let slice2 = randomInt(1, 3)
	let quarter = Math.floor((max - min) / 4)
	if (slice === 1) {
		if (slice2 < 3) {
			return randomInt(min, min + quarter)
		} else {
			return randomInt(min + (quarter * 3), max)
		}
	} else {
		return randomInt(min + quarter, max - quarter)
	}
}


export const generateDimension = (min: number, max: number): number => {
	let slice = randomInt(1, 4)
	let slice2 = randomInt(1, 4)
	let quarter = Math.floor((max - min) / 4)
	if (slice === 1) {
		if (slice2 < 4) {
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

export const roomCount = (rooms: room[], roomName: string): number => {
	let count = 0
	rooms.forEach((item) => { if (item.name === roomName) { count += 1 } })
	return count
}

export const minRooms = () => {
	let min = 0
	roomNames.forEach((rn) => {
		min += roomConfiguration[rn].minCount
	})
	return min
}
