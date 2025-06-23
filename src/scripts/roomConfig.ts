import { createStore } from "solid-js/store";
import { roomConfig, roomName } from "./types";
import { makePersisted } from "@solid-primitives/storage";

const initialRoomConfiguration: Record<roomName, roomConfig> = {
	"bedroom": {
		minDim: 3, maxDim: 20, minCount: 1, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 1
	},
	"bathroom": {
		minDim: 2, maxDim: 20, minCount: 1, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.8
	},
	"kitchen": {
		minDim: 2, maxDim: 20, minCount: 1, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.2
	},
	"living room": {
		minDim: 2, maxDim: 20, minCount: 1, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"hallway": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"garage": {
		minDim: 6, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.5
	},
	"game room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.2
	},
	"office": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.5
	},
	"laundry": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 1,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 1
	},
	"pet room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 1,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.8
	},
	"mud room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.4
	},
	"walk in closet": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"deck/balcony/patio": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.5
	},
	"pool": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.4
	},
	"poolhouse": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.3
	},
	"library": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.5
	},
	"nursery": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.5
	},
	"play room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.4
	},
	"shed": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"garden": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"gym": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.25
	},
	"dining room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.55
	},
	"home theatre": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.1
	},
	"Bar": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.25
	},
	"teen room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"Child Room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.6
	},
	"Butler Room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 1,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.1
	},
	"Pantry": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 1,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.55
	},
	"Crafts Room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.4
	},
	"Workshop": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.4
	},
	"Outdoor Play Yard": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 1,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.55
	},
	"meditation room": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.1
	},
	"home business": {
		minDim: 2, maxDim: 20, minCount: 0, maxCount: 999,
		minBudget: 500, maxBudget: 20000, frequencyConstant: 0.25
	},
};

export const initMissingRoomConfigs = () => {
	Object.entries(initialRoomConfiguration).forEach(([name, conf]) => {
		if (!(name in roomConfiguration)) {
			setRoomConfiguration(name, conf)
		}
	});
}

export const resetConfigToDefault = () => {
	setRoomConfiguration(initialRoomConfiguration)
}

// Create a store from the object
export const [roomConfiguration, setRoomConfiguration] =
	makePersisted(createStore<Record<roomName, roomConfig>>(), { name: "persistedRoomConfiguration" });
