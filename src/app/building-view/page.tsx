"use client";

import { Canvas } from "@react-three/fiber";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import buildingDataJson from "@/data/building-data.json";
import { BuildingData } from "@/types/building";
import { Building3DScene } from "@/components/3d/Building3DScene";
import { BuildingInfoPanel } from "@/components/BuildingInfoPanel";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const buildingData = buildingDataJson as BuildingData;

/**
 * Building 3D View Page
 * Clean separation of logic and UI
 */
export default function BuildingViewPage() {
	const totalFloors = new Set(buildingData.rooms.map((r) => r.floor)).size;
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted ? resolvedTheme === "dark" : true;

	return (
		<div className="min-h-screen bg-background p-6">
			<div className="container mx-auto space-y-6">
				<div className="flex items-center gap-4">
					<Link href="/">
						<Button variant="outline" size="icon">
							<ArrowLeft className="h-4 w-4" />
						</Button>
					</Link>
					<div>
						<h1 className="text-3xl font-bold">3D Building Visualization</h1>
						<p className="text-muted-foreground">
							Visualisasi gedung dalam tampilan 3D interaktif
						</p>
					</div>
				</div>

				<div className="grid gap-6 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<Card className="overflow-hidden">
							<CardHeader>
								<CardTitle>Model Gedung 3D</CardTitle>
							</CardHeader>
							<CardContent className="p-0">
								<div className="h-[600px] w-full bg-muted/30">
									<Canvas>
										<Building3DScene
											rooms={buildingData.rooms}
											buildingName={buildingData.building}
											isDark={isDark}
										/>
									</Canvas>
								</div>
							</CardContent>
						</Card>
					</div>

					<BuildingInfoPanel
						buildingName={buildingData.building}
						totalFloors={totalFloors}
						totalRooms={buildingData.rooms.length}
					/>
				</div>
			</div>
		</div>
	);
}
