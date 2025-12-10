import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BuildingInfoPanelProps {
	buildingName: string;
	totalFloors: number;
	totalRooms: number;
}

/**
 * Building information panel
 * Pure presentational component
 */
export function BuildingInfoPanel({
	buildingName,
	totalFloors,
	totalRooms,
}: BuildingInfoPanelProps) {
	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Kontrol</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Interaksi:</h4>
						<ul className="text-sm text-muted-foreground space-y-1">
							<li>🖱️ Klik kiri + drag: Rotasi</li>
							<li>🖱️ Klik kanan + drag: Pan</li>
							<li>⚙️ Scroll: Zoom in/out</li>
						</ul>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Legend</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<div className="flex items-center gap-3">
						<div className="h-4 w-4 rounded bg-cyan-500" />
						<span className="text-sm">Lantai Normal</span>
					</div>
					<div className="flex items-center gap-3">
						<div className="h-4 w-4 rounded bg-rose-500" />
						<span className="text-sm">Lantai dengan Alert</span>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Info Gedung</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<div className="flex justify-between">
						<span className="text-sm text-muted-foreground">Nama:</span>
						<span className="text-sm font-medium">{buildingName}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-sm text-muted-foreground">Total Lantai:</span>
						<span className="text-sm font-medium">{totalFloors}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-sm text-muted-foreground">
							Total Ruangan:
						</span>
						<span className="text-sm font-medium">{totalRooms}</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
