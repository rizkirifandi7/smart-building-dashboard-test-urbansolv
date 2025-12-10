"use client";

import { Canvas } from "@react-three/fiber";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building3DScene } from "@/components/3d/Building3DScene";
import { useTheme } from "next-themes";
import { useEffect, useState, Suspense } from "react";
import { Room } from "@/types/building";

interface BuildingViewCardProps {
	rooms: Room[];
	buildingName: string;
	onFloorClick?: (floor: string) => void;
}

export default function BuildingViewCard({
	rooms,
	buildingName,
	onFloorClick,
}: BuildingViewCardProps) {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setMounted(true), 0);
		return () => clearTimeout(timer);
	}, []);

	const isDark = mounted ? resolvedTheme === "dark" : true;

	return (
		<Card className="overflow-hidden border-l-4 border-l-cyan-500 shadow-lg">
			<CardHeader>
				<CardTitle>Visualisasi Gedung 3D</CardTitle>
			</CardHeader>
			<CardContent className="p-0">
				<div className="h-[400px] w-full bg-muted/30 relative">
					<Canvas
						frameloop="demand"
						gl={{ preserveDrawingBuffer: true, powerPreference: "default" }}
						camera={{ position: [8, 6, 8], fov: 45 }}
					>
						<Suspense fallback={null}>
							<Building3DScene
								rooms={rooms}
								buildingName={buildingName}
								isDark={isDark}
								onFloorClick={onFloorClick}
							/>
						</Suspense>
					</Canvas>

					{/* Legend Overlay */}
					<div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg border shadow-sm text-xs space-y-2">
						<div className="font-semibold mb-1">Keterangan</div>
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-cyan-500"></div>
							<span>Normal</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 rounded-full bg-rose-500"></div>
							<span>Alert / Bahaya</span>
						</div>
						<div className="pt-1 border-t mt-1 text-[10px] text-muted-foreground">
							* Klik lantai untuk filter
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
