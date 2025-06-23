
export const roomNames = ['bedroom', 'bathroom', 'kitchen', 'living room', 'hallway', 'garage', 'game room', 'office', 'laundry', 'pet room', 'mud room', 'walk in closet', 'deck/balcony/patio', 'pool', 'poolhouse', 'library', 'nursery', 'play room', 'shed', 'garden', 'gym', 'dining room', 'home theatre', 'Bar', 'teen room', 'Child Room', 'Butler Room', 'Pantry', 'Crafts Room', 'Workshop', 'Outdoor Play Yard', 'meditation room', 'home business'];
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

export type roomConfig = {
	minDim: number,
	maxDim: number,
	minBudget: number,
	maxBudget: number,
	minCount: number,
	maxCount: number,
	frequencyConstant: number,
}
