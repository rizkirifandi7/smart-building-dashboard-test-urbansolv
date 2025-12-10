import { Text } from "@react-three/drei";

interface FloorProps {
	position: [number, number, number];
	floorNumber: number;
	roomCount: number;
	alertCount: number;
}

/**
 * 3D Floor component
 * Presentational component for single floor
 */
export function Floor3D({
	position,
	floorNumber,
	roomCount,
	alertCount,
}: FloorProps) {
	const color = alertCount > 0 ? "#ef4444" : "#3b82f6";

	return (
		<group position={position}>
			{/* Floor box */}
			<mesh>
				<boxGeometry args={[4, 0.2, 3]} />
				<meshStandardMaterial color={color} opacity={0.8} transparent />
			</mesh>

			{/* Floor label */}
			<Text
				position={[0, 0.3, 1.6]}
				fontSize={0.3}
				color="white"
				anchorX="center"
				anchorY="middle"
			>
				Lantai {floorNumber}
			</Text>

			{/* Room count */}
			<Text
				position={[0, 0.3, -1.6]}
				fontSize={0.2}
				color="white"
				anchorX="center"
				anchorY="middle"
			>
				{roomCount} ruangan
			</Text>
		</group>
	);
}
