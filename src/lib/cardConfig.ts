import { Zap, Thermometer, Wind, LucideIcon } from "lucide-react";
import { formatNumber } from "@/lib/formatters";

export interface CardData {
	title: string;
	value: string;
	subtitle: string;
	icon: LucideIcon;
	iconColor: string;
	bgColor: string;
	trend: string;
	trendUp: boolean;
}

interface SummaryData {
	energyTodayKwh: number;
	avgTemperature: number;
	avgCO2: number;
	airQuality: string;
}

/**
 * Generate card configuration from summary data
 */
export const generateCardData = (data: SummaryData): CardData[] => {
	return [
		{
			title: "Total Konsumsi Energi",
			value: `${formatNumber(data.energyTodayKwh)} kWh`,
			subtitle: "Hari ini",
			icon: Zap,
			iconColor: "text-amber-500",
			bgColor: "bg-amber-50 dark:bg-amber-950/20",
			trend: "+5.2%",
			trendUp: true,
		},
		{
			title: "Rata-rata Suhu Ruangan",
			value: `${data.avgTemperature.toFixed(1)}°C`,
			subtitle: "Optimal",
			icon: Thermometer,
			iconColor: "text-blue-500",
			bgColor: "bg-blue-50 dark:bg-blue-950/20",
			trend: "-0.8°C",
			trendUp: false,
		},
		{
			title: "Rata-rata CO₂",
			value: `${data.avgCO2} ppm`,
			subtitle: data.airQuality,
			icon: Wind,
			iconColor: "text-green-500",
			bgColor: "bg-green-50 dark:bg-green-950/20",
			trend: "-12 ppm",
			trendUp: false,
		},
	];
};
