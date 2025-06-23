import { houseObject } from "../App";
import { roomConfiguration } from "./roomConfig";
import { house, room, roomName, roomNames } from "./types";
import { generateBudget, generateDimension, minRooms, randomElement, randomInt, roomCount } from "./utils";

export const generateRoomNameWeighted = (): roomName => {
	let range = 0
	let roomRange: { name: roomName, low: number, high: number }[] = []
	Object.entries(roomConfiguration).forEach(([name, conf]) => {
		let low = range
		range += conf.frequencyConstant
		let high = range
		roomRange.push({ name: name, low: low, high: high })
	})
	let roll = Math.random() * range
	//console.log(roll)
	//console.log(range)
	//console.log(roomRange)
	for (const rm of roomRange) {
		if (rm.low <= roll && rm.high > roll) {
			//console.log(rm.name)
			return rm.name
		}
	}
	console.log("FAIL")
	return "bedroom"
}

export const generateRoom = (rooms: room[], id: number, maxSize: number, name?: roomName): room => {
	let randName: roomName
	if (name) {
		randName = name
	} else {
		//randName = randomElement(roomNames)
		randName = generateRoomNameWeighted()
		while (roomCount(rooms, randName) >= roomConfiguration[randName]?.maxCount! || Math.random() > (roomConfiguration[randName]?.frequencyConstant!) ** (roomCount(rooms, randName) + 1)) {
			//while (roomCount(rooms, randName) >= roomConfiguration[randName]?.maxCount! || Math.random() > (roomConfiguration[randName]?.frequencyConstant!)) {
			randName = generateRoomNameWeighted()
		}
	}
	roomConfiguration

	return {
		id: id,
		name: randName,
		xDim: generateDimension(roomConfiguration[randName]?.minDim!, Math.min(roomConfiguration[randName]?.maxDim!, maxSize)),
		yDim: generateDimension(roomConfiguration[randName]?.minDim!, Math.min(roomConfiguration[randName]?.maxDim!, maxSize)),
		budget: generateBudget(roomConfiguration[randName]?.minBudget!, roomConfiguration[randName]?.maxBudget!),
		completed: false
	}
}

export const generateHouse = (roomCount: number, maxSize: number): house => {
	let houseObj: house = {
		rooms: []
	}
	let id = 0
	let requiredRooms = new Map<roomName, number>()
	roomNames.forEach((rn) => {
		let count = roomConfiguration[rn]!.minCount
		for (let i = 0; i < count; i++) {
			houseObj.rooms.push(generateRoom(houseObj.rooms, id, maxSize, rn))
			id += 1
		}
	})


	for (let i = 0; i < roomCount - minRooms(); i++) {
		houseObj.rooms.push(generateRoom(houseObj.rooms, i + id, maxSize))
	}

	houseObj.rooms.sort((a, b) => a.name.localeCompare(b.name))


	return houseObj
}
