import { Room } from "@/types/building";

type StatusType = "Normal" | "Warning" | "Alert";

/**
 * Get badge color classes based on room status
 */
export const getStatusColor = (status: StatusType): string => {
	const colorMap: Record<StatusType, string> = {
		Normal:
			"bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20",
		Warning:
			"bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
		Alert:
			"bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
	};

	return colorMap[status];
};

/**
 * Get floor color for 3D visualization
 */
export const getFloorColor = (hasAlert: boolean): string => {
	return hasAlert ? "#f43f5e" : "#06b6d4";
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
