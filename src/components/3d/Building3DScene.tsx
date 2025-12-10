import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { Floor3D } from "./Floor3D";
import { useFloorData } from "@/hooks/useBuildingData";
import { Room } from "@/types/building";

interface Building3DSceneProps {
	rooms: Room[];
	buildingName: string;
}

/**
 * 3D Building Scene
 * Contains camera, lights, and building model
 */
export function Building3DScene({ rooms, buildingName }: Building3DSceneProps) {
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
			/>

			{/* Lighting */}
			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={1} />
			<directionalLight position={[-10, -10, -5]} intensity={0.3} />

			{/* Ground */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
				<planeGeometry args={[10, 10]} />
				<meshStandardMaterial color="#94a3b8" />
			</mesh>

			{/* Building floors */}
			{floors.map((floorNum, index) => (
				<Floor3D
					key={floorNum}
					position={[0, index * 1.5, 0]}
					floorNumber={floorNum}
					roomCount={floorData[floorNum].count}
					alertCount={floorData[floorNum].alerts}
				/>
			))}

			{/* Building name */}
			<Text
				position={[0, floors.length * 1.5 + 0.5, 0]}
				fontSize={0.4}
				color="#1e293b"
				anchorX="center"
				anchorY="middle"
			>
				{buildingName}
			</Text>
		</>
	);
}
