import {
	OrbitControls,
	PerspectiveCamera,
	Environment,
	ContactShadows,
	Grid,
	Text,
} from "@react-three/drei";
import { Floor3D } from "./Floor3D";
import { useFloorData } from "@/hooks/useBuildingData";
import { Room } from "@/types/building";

interface Building3DSceneProps {
	rooms: Room[];
	buildingName: string;
	isDark?: boolean;
	onFloorClick?: (floor: string) => void;
}

/**
 * 3D Building Scene
 * Contains camera, lights, and building model
 */
export function Building3DScene({
	rooms,
	buildingName,
	isDark = true,
	onFloorClick,
}: Building3DSceneProps) {
	const { floorData, floors } = useFloorData(rooms);

	return (
		<>
			<PerspectiveCamera makeDefault position={[8, 6, 8]} />
			<OrbitControls
				enablePan={true}
				enableZoom={true}
				enableRotate={true}
				minDistance={5}
				maxDistance={20}
				autoRotate
				autoRotateSpeed={0.5}
			/>

			{/* Lighting & Environment */}
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={1} castShadow />
			<Environment preset="city" />

			{/* Ground & Shadows */}
			<Grid
				position={[0, -0.5, 0]}
				args={[20, 20]}
				cellColor={isDark ? "#334155" : "#cbd5e1"}
				sectionColor={isDark ? "#475569" : "#94a3b8"}
				fadeDistance={20}
				fadeStrength={1}
			/>
			<ContactShadows
				position={[0, -0.49, 0]}
				opacity={0.4}
				scale={20}
				blur={2}
				far={4.5}
				resolution={256}
				frames={1}
			/>

			{/* Building floors */}
			{floors.map((floorNum, index) => (
				<Floor3D
					key={floorNum}
					position={[0, index * 1.5, 0]}
					floorNumber={floorNum}
					roomCount={floorData[floorNum].count}
					alertCount={floorData[floorNum].alerts}
					onClick={() => onFloorClick?.(floorNum.toString())}
				/>
			))}

			{/* Building name */}
			<Text
				position={[0, floors.length * 1.5 + 0.5, 0]}
				fontSize={0.4}
				color={isDark ? "white" : "black"}
				anchorX="center"
				anchorY="middle"
				outlineWidth={0.02}
				outlineColor={isDark ? "#000000" : "#ffffff"}
			>
				{buildingName}
			</Text>
		</>
	);
}
