"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { SummaryCards } from "@/components/SummaryCards";
import { RoomsTable } from "@/components/RoomsTable";
import { EnergyChart } from "@/components/EnergyChart";
import { FloorFilterSection } from "@/components/FloorFilterSection";
import buildingDataJson from "@/data/building-data.json";
import { BuildingData } from "@/types/building";
import { useFloors, useFilteredRooms, useRoomStats } from "@/hooks/useRoomData";

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
		<div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
			<Header buildingName={buildingData.building} />

			<main className="container py-6 space-y-6 mx-auto">
				<SummaryCards data={buildingData.summary} />

				<FloorFilterSection
					selectedFloor={selectedFloor}
					floors={floors}
					stats={floorStats}
					onFloorChange={setSelectedFloor}
				/>

				<RoomsTable rooms={filteredRooms} />

				<EnergyChart
					energyData={buildingData.energyTrend}
					temperatureData={buildingData.temperatureTrend}
				/>
			</main>
		</div>
	);
}

