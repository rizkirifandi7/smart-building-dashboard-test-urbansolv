"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setMounted(true), 0);
		return () => clearTimeout(timer);
	}, []);

	if (!mounted) {
		return (
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Tren Konsumsi Energi (24 Jam)</CardTitle>
					</CardHeader>
					<CardContent className="h-[300px] flex items-center justify-center">
						<div className="animate-pulse bg-muted h-full w-full rounded-md" />
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Tren Suhu Rata-rata (24 Jam)</CardTitle>
					</CardHeader>
					<CardContent className="h-[300px] flex items-center justify-center">
						<div className="animate-pulse bg-muted h-full w-full rounded-md" />
					</CardContent>
				</Card>
			</div>
		);
	}

	const isDark = resolvedTheme === "dark";

	const colors = {
		text: isDark ? "#94a3b8" : "#64748b",
		grid: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
		tooltipBg: isDark ? "#0f172a" : "#ffffff",
		tooltipBorder: isDark ? "#1e293b" : "#e2e8f0",
		tooltipText: isDark ? "#f8fafc" : "#0f172a",
		kwhStroke: isDark ? "#22d3ee" : "#0891b2",
		kwhFillStart: isDark ? "#22d3ee" : "#0891b2",
		tempStroke: isDark ? "#818cf8" : "#4f46e5",
		tempFillStart: isDark ? "#818cf8" : "#4f46e5",
	};

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
									<stop
										offset="5%"
										stopColor={colors.kwhFillStart}
										stopOpacity={0.3}
									/>
									<stop
										offset="95%"
										stopColor={colors.kwhFillStart}
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
							<XAxis
								dataKey="hour"
								tick={{ fontSize: 12, fill: colors.text }}
								interval={3}
								tickLine={false}
								axisLine={false}
							/>
							<YAxis
								tick={{ fontSize: 12, fill: colors.text }}
								tickLine={false}
								axisLine={false}
								label={{
									value: "kWh",
									angle: -90,
									position: "insideLeft",
									fill: colors.text,
								}}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: colors.tooltipBg,
									border: `1px solid ${colors.tooltipBorder}`,
									borderRadius: "8px",
									color: colors.tooltipText,
								}}
							/>
							<Area
								type="monotone"
								dataKey="kwh"
								stroke={colors.kwhStroke}
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
									<stop
										offset="5%"
										stopColor={colors.tempFillStart}
										stopOpacity={0.3}
									/>
									<stop
										offset="95%"
										stopColor={colors.tempFillStart}
										stopOpacity={0}
									/>
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
							<XAxis
								dataKey="hour"
								tick={{ fontSize: 12, fill: colors.text }}
								interval={3}
								tickLine={false}
								axisLine={false}
							/>
							<YAxis
								tick={{ fontSize: 12, fill: colors.text }}
								domain={[20, 28]}
								tickLine={false}
								axisLine={false}
								label={{
									value: "°C",
									angle: -90,
									position: "insideLeft",
									fill: colors.text,
								}}
							/>
							<Tooltip
								contentStyle={{
									backgroundColor: colors.tooltipBg,
									border: `1px solid ${colors.tooltipBorder}`,
									borderRadius: "8px",
									color: colors.tooltipText,
								}}
							/>
							<Line
								type="monotone"
								dataKey="temp"
								stroke={colors.tempStroke}
								strokeWidth={2}
								dot={{ fill: colors.tempStroke, r: 3 }}
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
