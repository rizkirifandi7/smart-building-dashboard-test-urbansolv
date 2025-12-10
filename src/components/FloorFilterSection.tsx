import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2 } from "lucide-react";

interface FloorFilterSectionProps {
	selectedFloor: string;
	floors: number[];
	onFloorChange: (floor: string) => void;
	className?: string;
}

/**
 * Floor filter section
 * Pure presentational component
 */
export function FloorFilterSection({
	selectedFloor,
	floors,
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
		</Card>
	);
}
