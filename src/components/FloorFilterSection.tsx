import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { StatCard } from "./StatCard";

interface FloorStats {
	total: number;
	normal: number;
	warning: number;
	alert: number;
}

interface FloorFilterSectionProps {
	selectedFloor: string;
	floors: number[];
	stats: FloorStats;
	onFloorChange: (floor: string) => void;
}

/**
 * Floor filter and statistics section
 * Pure presentational component
 */
export function FloorFilterSection({
	selectedFloor,
	floors,
	stats,
	onFloorChange,
}: FloorFilterSectionProps) {
	return (
		<Card>
			<CardHeader>
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div>
						<CardTitle>Filter Ruangan</CardTitle>
						<p className="text-sm text-muted-foreground mt-1">
							Pilih lantai untuk melihat detail ruangan
						</p>
					</div>
					<div className="flex items-center gap-4">
						<Select value={selectedFloor} onValueChange={onFloorChange}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Pilih Lantai" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Semua Lantai</SelectItem>
								{floors.map((floor) => (
									<SelectItem key={floor} value={floor.toString()}>
										Lantai {floor}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Link href="/building-view">
							<Button variant="outline" className="gap-2">
								<Building2 className="h-4 w-4" />
								3D View
							</Button>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<StatCard
						value={stats.total}
						label="Total Ruangan"
						variant="default"
					/>
					<StatCard value={stats.normal} label="Normal" variant="success" />
					<StatCard value={stats.warning} label="Warning" variant="warning" />
					<StatCard value={stats.alert} label="Alert" variant="danger" />
				</div>
			</CardContent>
		</Card>
	);
}
