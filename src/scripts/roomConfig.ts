import { roomConfig, roomName } from "./types";

export const roomConfiguration = new Map<roomName, roomConfig>

roomConfiguration.set("bedroom", {
	minDim: 3,
	maxDim: 20,
	minCount: 1,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.75,
});

roomConfiguration.set("bathroom", {
	minDim: 2,
	maxDim: 20,
	minCount: 1,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.7,
});

roomConfiguration.set("kitchen", {
	minDim: 2,
	maxDim: 20,
	minCount: 1,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.2,
});

roomConfiguration.set("living room", {
	minDim: 2,
	maxDim: 20,
	minCount: 1,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.6,
});

roomConfiguration.set("hallway", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.6,
});

roomConfiguration.set("garage", {
	minDim: 6,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.5,
});

roomConfiguration.set("game room", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.2,
});

roomConfiguration.set("office", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.5,
});

roomConfiguration.set("laundry", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 1,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 1,
});

roomConfiguration.set("pet room", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 1,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.8,
});

roomConfiguration.set("mud room", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.4,
});

roomConfiguration.set("walk in closet", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.6,
});

roomConfiguration.set("deck/balcony/patio", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.5,
});

roomConfiguration.set("pool", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.4,
});

roomConfiguration.set("poolhouse", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.3,
});

roomConfiguration.set("library", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.5,
});

roomConfiguration.set("nursery", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.5,
});

roomConfiguration.set("play room", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.4,
});

roomConfiguration.set("shed", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.6,
});

roomConfiguration.set("garden", {
	minDim: 2,
	maxDim: 20,
	minCount: 0,
	maxCount: 999,
	minBudget: 500,
	maxBudget: 20000,
	frequencyConstant: 0.6,
});
