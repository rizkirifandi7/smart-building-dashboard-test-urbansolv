"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { SummaryCards } from "@/components/SummaryCards";
import { RoomsTable } from "@/components/RoomsTable";
import { EnergyChart } from "@/components/EnergyChart";
import { FloorFilterSection } from "@/components/FloorFilterSection";
import buildingDataJson from "@/data/building-data.json";
import { BuildingData } from "@/types/building";
import { useFloors, useFilteredRooms, useRoomStats } from "@/hooks/useRoomData";

// Lazy load the 3D component for better initial performance
const BuildingViewCard = dynamic(
	() => import("@/components/BuildingViewCard"),
	{
		ssr: false,
		loading: () => (
			<div className="h-[400px] w-full bg-muted/30 animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">
				Loading 3D Model...
			</div>
		),
	}
);

const buildingData = buildingDataJson as BuildingData;

/**
 * Main dashboard page
 * Logic separated into custom hooks
 */
export default function Home() {
	const [selectedFloor, setSelectedFloor] = useState<string>("all");

	// Custom hooks for data logic
	const floors = useFloors(buildingData.rooms);
	const filteredRooms = useFilteredRooms(buildingData.rooms, selectedFloor);
	const floorStats = useRoomStats(filteredRooms);

	return (
		<div className="min-h-screen bg-background">
			<Header buildingName={buildingData.building} />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
					{/* Left Sidebar: Controls & Navigation - 25% width */}
					<aside className="lg:col-span-3 space-y-8 order-2 lg:order-1">
						<div className="sticky top-24 animate-in fade-in slide-in-from-left-8 duration-700">
							<FloorFilterSection
								selectedFloor={selectedFloor}
								floors={floors}
								stats={floorStats}
								onFloorChange={setSelectedFloor}
							/>
						</div>
					</aside>

					{/* Main Content Area - 75% width */}
					<div className="lg:col-span-9 space-y-8 order-1 lg:order-2">
						{/* Summary Cards */}
						<section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
							<SummaryCards data={buildingData.summary} />
						</section>

						{/* 3D Building View Section */}
						<section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
							<BuildingViewCard
								rooms={buildingData.rooms}
								buildingName={buildingData.building}
								onFloorClick={(floor) => {
									// Toggle selection: if clicked floor is already selected, reset to "all"
									setSelectedFloor(selectedFloor === floor ? "all" : floor);
								}}
							/>
						</section>

						{/* Charts Section */}
						<section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
							<EnergyChart
								energyData={buildingData.energyTrend}
								temperatureData={buildingData.temperatureTrend}
							/>
						</section>

						{/* Detailed Table Section */}
						<section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
							<RoomsTable rooms={filteredRooms} />
						</section>
					</div>
				</div>
			</main>
		</div>
	);
}
