import { Text, useCursor } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloorProps {
	position: [number, number, number];
	floorNumber: number;
	roomCount: number;
	alertCount: number;
	onClick?: () => void;
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
	onClick,
}: FloorProps) {
	const [hovered, setHovered] = useState(false);
	useCursor(hovered, "pointer", "auto");

	const groupRef = useRef<THREE.Group>(null);
	const materialRef = useRef<THREE.MeshStandardMaterial>(null);

	const hasAlert = alertCount > 0;
	const baseColor = new THREE.Color(hasAlert ? "#f43f5e" : "#06b6d4");
	const hoverColor = new THREE.Color("#22d3ee");
	const textColor = "white";

	useFrame((state, delta) => {
		if (groupRef.current) {
			const targetScale = hovered ? 1.05 : 1;
			// Smoothly interpolate scale
			groupRef.current.scale.lerp(
				new THREE.Vector3(targetScale, targetScale, targetScale),
				delta * 10
			);
		}
		if (materialRef.current) {
			const targetColor = hovered ? hoverColor : baseColor;
			// Smoothly interpolate color
			materialRef.current.color.lerp(targetColor, delta * 10);
		}
	});

	return (
		<group
			ref={groupRef}
			position={position}
			onPointerOver={(e) => {
				e.stopPropagation();
				setHovered(true);
			}}
			onPointerOut={() => setHovered(false)}
			onClick={(e) => {
				e.stopPropagation();
				onClick?.();
			}}
		>
			{/* Floor Slab */}
			<mesh castShadow receiveShadow>
				<boxGeometry args={[4, 0.2, 3]} />
				<meshStandardMaterial
					ref={materialRef}
					color={hasAlert ? "#f43f5e" : "#06b6d4"} // Initial color
					opacity={0.9}
					transparent
					roughness={0.1}
					metalness={0.1}
				/>
			</mesh>

			{/* Glass Walls (Visual flair) */}
			<mesh position={[0, 0.15, 0]}>
				<boxGeometry args={[3.9, 0.1, 2.9]} />
				<meshPhysicalMaterial
					color={baseColor}
					opacity={0.3}
					transparent
					roughness={0}
					metalness={0.9}
					transmission={0.5}
					thickness={0.5}
				/>
			</mesh>

			{/* Floor label */}
			<Text
				position={[0, 0.5, 1.6]}
				fontSize={0.3}
				color={textColor}
				anchorX="center"
				anchorY="middle"
				outlineWidth={0.02}
				outlineColor="#000000"
			>
				Lantai {floorNumber}
			</Text>

			{/* Room count */}
			<Text
				position={[0, 0.5, -1.6]}
				fontSize={0.2}
				color={textColor}
				anchorX="center"
				anchorY="middle"
				outlineWidth={0.02}
				outlineColor="#000000"
			>
				{roomCount} ruangan
				{hasAlert && ` • ${alertCount} Alert`}
			</Text>
		</group>
	);
}
