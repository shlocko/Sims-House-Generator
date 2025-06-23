
export const roomNames = ['bedroom', 'bathroom', 'kitchen', 'living room', 'hallway', 'garage', 'game room', 'office', 'laundry', 'pet room', 'mud room', 'walk in closet', 'deck', 'balcony', 'pool', 'poolhouse', 'library', 'nursery', 'play room', 'shed', 'garden'];
export type roomName = (typeof roomNames)[number]

export type room = {
	id: number,
	name: (typeof roomNames)[number],
	xDim: number,
	yDim: number,
	budget: number,
	completed: boolean
}

export type house = {
	rooms: room[]
}
