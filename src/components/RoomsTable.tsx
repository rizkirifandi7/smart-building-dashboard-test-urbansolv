import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "./StatCard";
import { LayoutDashboard } from "lucide-react";

export interface Room {
	id: number;
	name: string;
	floor: number;
	temperature: number;
	co2: number;
	humidity: number;
	status: "Normal" | "Warning" | "Alert";
}

interface FloorStats {
	total: number;
	normal: number;
	warning: number;
	alert: number;
}

interface RoomsTableProps {
	rooms: Room[];
	stats: FloorStats;
}

import { getStatusColor } from "@/lib/roomUtils";

/**
 * Table component to display room data
 * Uses utility function for status colors
 */
export function RoomsTable({ rooms, stats }: RoomsTableProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Daftar Ruangan</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="mb-6">
					<div className="flex items-center gap-2 mb-3">
						<LayoutDashboard className="h-4 w-4 text-muted-foreground" />
						<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
							Ringkasan Status
						</span>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<StatCard value={stats.total} label="Total" variant="default" />
						<StatCard value={stats.normal} label="Normal" variant="success" />
						<StatCard value={stats.warning} label="Warning" variant="warning" />
						<StatCard value={stats.alert} label="Alert" variant="danger" />
					</div>
				</div>

				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">Nama Ruang</TableHead>
								<TableHead className="text-center">Lantai</TableHead>
								<TableHead className="text-center">Suhu (°C)</TableHead>
								<TableHead className="text-center">CO₂ (ppm)</TableHead>
								<TableHead className="text-center">Kelembaban (%)</TableHead>
								<TableHead className="text-center">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{rooms.length === 0 ? (
								<TableRow>
									<TableCell
										colSpan={6}
										className="h-24 text-center text-muted-foreground"
									>
										Tidak ada data ruangan untuk lantai ini.
									</TableCell>
								</TableRow>
							) : (
								rooms.map((room) => (
									<TableRow key={room.id} className="hover:bg-muted/50">
										<TableCell className="font-medium">{room.name}</TableCell>
										<TableCell className="text-center">{room.floor}</TableCell>
										<TableCell className="text-center font-mono">
											{room.temperature.toFixed(1)}
										</TableCell>
										<TableCell className="text-center font-mono">
											{room.co2}
										</TableCell>
										<TableCell className="text-center font-mono">
											{room.humidity}
										</TableCell>
										<TableCell className="text-center">
											<Badge
												className={getStatusColor(room.status)}
												variant="outline"
											>
												{room.status}
											</Badge>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}
