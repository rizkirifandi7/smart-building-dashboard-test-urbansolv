import { useMemo } from "react";
import { Room } from "@/types/building";

interface RoomStats {
	total: number;
	normal: number;
	warning: number;
	alert: number;
}

/**
 * Hook to calculate room statistics
 */
export const useRoomStats = (rooms: Room[]): RoomStats => {
	return useMemo(() => {
		const total = rooms.length;
		const normal = rooms.filter((r) => r.status === "Normal").length;
		const warning = rooms.filter((r) => r.status === "Warning").length;
		const alert = rooms.filter((r) => r.status === "Alert").length;

		return { total, normal, warning, alert };
	}, [rooms]);
};

/**
 * Hook to get unique floor numbers
 */
export const useFloors = (rooms: Room[]): number[] => {
	return useMemo(() => {
		const uniqueFloors = Array.from(new Set(rooms.map((room) => room.floor)));
		return uniqueFloors.sort((a, b) => a - b);
	}, [rooms]);
};

/**
 * Hook to filter rooms by floor
 */
export const useFilteredRooms = (
	rooms: Room[],
	selectedFloor: string
): Room[] => {
	return useMemo(() => {
		if (selectedFloor === "all") {
			return rooms;
		}
		return rooms.filter((room) => room.floor === parseInt(selectedFloor));
	}, [rooms, selectedFloor]);
};
