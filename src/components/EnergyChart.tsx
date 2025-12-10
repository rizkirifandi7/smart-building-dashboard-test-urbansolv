"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Area,
	AreaChart,
} from "recharts";

interface EnergyData {
	hour: string;
	kwh: number;
}

interface TemperatureData {
	hour: string;
	temp: number;
}

interface EnergyChartProps {
	energyData: EnergyData[];
	temperatureData: TemperatureData[];
}

export function EnergyChart({ energyData, temperatureData }: EnergyChartProps) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle>Tren Konsumsi Energi (24 Jam)</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<AreaChart data={energyData}>
							<defs>
								<linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
									<stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis
								dataKey="hour"
								tick={{ fontSize: 12 }}
								interval={3}
								className="text-muted-foreground"
							/>
							<YAxis
								tick={{ fontSize: 12 }}
								className="text-muted-foreground"
								label={{ value: "kWh", angle: -90, position: "insideLeft" }}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: "hsl(var(--background))",
									border: "1px solid hsl(var(--border))",
									borderRadius: "8px",
								}}
							/>
							<Area
								type="monotone"
								dataKey="kwh"
								stroke="#f59e0b"
								strokeWidth={2}
								fill="url(#colorKwh)"
								name="Konsumsi (kWh)"
							/>
						</AreaChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Tren Suhu Rata-rata (24 Jam)</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={temperatureData}>
							<defs>
								<linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
									<stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis
								dataKey="hour"
								tick={{ fontSize: 12 }}
								interval={3}
								className="text-muted-foreground"
							/>
							<YAxis
								tick={{ fontSize: 12 }}
								domain={[20, 28]}
								className="text-muted-foreground"
								label={{ value: "°C", angle: -90, position: "insideLeft" }}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: "hsl(var(--background))",
									border: "1px solid hsl(var(--border))",
									borderRadius: "8px",
								}}
							/>
							<Line
								type="monotone"
								dataKey="temp"
								stroke="#3b82f6"
								strokeWidth={2}
								dot={{ fill: "#3b82f6", r: 3 }}
								activeDot={{ r: 5 }}
								name="Suhu (°C)"
							/>
						</LineChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	);
}
