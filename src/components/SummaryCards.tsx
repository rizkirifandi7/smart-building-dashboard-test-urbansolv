import { generateCardData } from "@/lib/cardConfig";
import { SummaryCardItem } from "./SummaryCardItem";

interface SummaryData {
	energyTodayKwh: number;
	avgTemperature: number;
	avgCO2: number;
	airQuality: string;
}

interface SummaryCardsProps {
	data: SummaryData;
}

/**
 * Container component for summary cards
 * Separates data logic from UI rendering
 */
export function SummaryCards({ data }: SummaryCardsProps) {
	const cards = generateCardData(data);

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{cards.map((card, index) => (
				<SummaryCardItem key={index} card={card} />
			))}
		</div>
	);
}
