import { Room } from "@/types/building";

type StatusType = "Normal" | "Warning" | "Alert";

/**
 * Get badge color classes based on room status
 */
export const getStatusColor = (status: StatusType): string => {
	const colorMap: Record<StatusType, string> = {
		Normal:
			"bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
		Warning:
			"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
		Alert:
			"bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
	};

	return colorMap[status];
};

/**
 * Get floor color for 3D visualization
 */
export const getFloorColor = (hasAlert: boolean): string => {
	return hasAlert ? "#ef4444" : "#3b82f6";
};

/**
 * Sort rooms by floor and name
 */
export const sortRooms = (rooms: Room[]): Room[] => {
	return [...rooms].sort((a, b) => {
		if (a.floor !== b.floor) {
			return a.floor - b.floor;
		}
		return a.name.localeCompare(b.name);
	});
};
