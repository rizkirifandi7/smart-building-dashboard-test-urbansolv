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
			iconColor: "text-cyan-600 dark:text-cyan-400",
			bgColor:
				"bg-cyan-50 border-cyan-200 dark:bg-cyan-950/30 dark:border-cyan-900/50 border",
			trend: "+5.2%",
			trendUp: true,
		},
		{
			title: "Rata-rata Suhu Ruangan",
			value: `${data.avgTemperature.toFixed(1)}°C`,
			subtitle: "Optimal",
			icon: Thermometer,
			iconColor: "text-blue-600 dark:text-blue-400",
			bgColor:
				"bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900/50 border",
			trend: "-0.8°C",
			trendUp: false,
		},
		{
			title: "Rata-rata CO₂",
			value: `${data.avgCO2} ppm`,
			subtitle: data.airQuality,
			icon: Wind,
			iconColor: "text-emerald-600 dark:text-emerald-400",
			bgColor:
				"bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900/50 border",
			trend: "-12 ppm",
			trendUp: false,
		},
	];
};
