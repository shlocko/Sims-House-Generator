import { generateHouse } from "./generateHouse";
import { roomName, roomNames } from "./types"

//
// Simulates the generation of houses over many iterations to allow for the tuning of generation configuration
//
export const simulateHouseGen = (simCount: number, roomCount: number): Map<roomName, number> => {
	const roomAppearanceCount = new Map<roomName, number>();
	for (const r of roomNames) {
		roomAppearanceCount.set(r, 0)
	}
	const roomAppearanceAverage = new Map<roomName, number>();
	for (const r of roomNames) {
		roomAppearanceAverage.set(r, 0)
	}
	for (let i = 0; i < simCount; i++) {
		let rooms = generateHouse(roomCount, 20).rooms
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

	return sorted
	//console.log(sorted)
}
