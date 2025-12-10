import { useMemo } from "react";
import { Room } from "@/types/building";

interface FloorData {
	count: number;
	alerts: number;
}

/**
 * Hook to process building data for 3D visualization
 */
export const useFloorData = (rooms: Room[]) => {
	return useMemo(() => {
		// Group rooms by floor
		const floorData = rooms.reduce((acc, room) => {
			if (!acc[room.floor]) {
				acc[room.floor] = { count: 0, alerts: 0 };
			}
			acc[room.floor].count++;
			if (room.status === "Alert") {
				acc[room.floor].alerts++;
			}
			return acc;
		}, {} as Record<number, FloorData>);

		// Get sorted floor numbers
		const floors = Object.keys(floorData)
			.map(Number)
			.sort((a, b) => a - b);

		return { floorData, floors };
	}, [rooms]);
};
