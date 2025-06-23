import { generateHouse } from "./generateHouse";
import { roomName, roomNames } from "./types"

export const simulateHouseGen = (simCount: number, roomCount: number) => {
	const roomAppearanceCount = new Map<roomName, number>();
	for (const r of roomNames) {
		roomAppearanceCount.set(r, 0)
	}
	const roomAppearanceAverage = new Map<roomName, number>();
	for (const r of roomNames) {
		roomAppearanceAverage.set(r, 0)
	}
	for (let i = 0; i < simCount; i++) {
		let rooms = generateHouse(roomCount).rooms
		for (const r of rooms) {
			let rc = roomAppearanceCount.get(r.name)!
			roomAppearanceCount.set(r.name, rc + 1)
		}
	}
	for (const r of roomNames) {
		roomAppearanceAverage.set(r, roomAppearanceCount.get(r)! / simCount)
	}
	const sorted = new Map(
		[...roomAppearanceAverage.entries()].sort((a, b) => b[1] - a[1])
	)

	console.log(sorted)
}
