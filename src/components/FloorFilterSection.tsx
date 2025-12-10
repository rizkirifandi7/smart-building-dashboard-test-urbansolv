import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Settings2 } from "lucide-react";
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
	className?: string;
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
	className,
}: FloorFilterSectionProps) {
	return (
		<Card className={`border-l-4 border-l-cyan-500 shadow-lg ${className}`}>
			<CardHeader className="pb-4">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-2">
						<div className="p-2 bg-cyan-500/10 rounded-lg">
							<Settings2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
						</div>
						<div>
							<CardTitle className="text-base">Control Panel</CardTitle>
							<p className="text-xs text-muted-foreground">Manajemen Lantai</p>
						</div>
					</div>
				</div>

				<div className="space-y-2">
					<label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						Pilih Lantai
					</label>
					<Select value={selectedFloor} onValueChange={onFloorChange}>
						<SelectTrigger className="w-full bg-background/50 backdrop-blur-sm">
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
				</div>
			</CardHeader>

			<CardContent>
				<div className="space-y-3">
					<div className="flex items-center gap-2 mb-2">
						<LayoutDashboard className="h-4 w-4 text-muted-foreground" />
						<span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
							Ringkasan Status
						</span>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<StatCard value={stats.total} label="Total" variant="default" />
						<StatCard value={stats.normal} label="Normal" variant="success" />
						<StatCard value={stats.warning} label="Warning" variant="warning" />
						<StatCard value={stats.alert} label="Alert" variant="danger" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
