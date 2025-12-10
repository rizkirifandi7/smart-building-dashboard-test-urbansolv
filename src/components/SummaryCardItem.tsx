import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { CardData } from "@/lib/cardConfig";

interface SummaryCardItemProps {
	card: CardData;
}

/**
 * Individual summary card component
 */
export function SummaryCardItem({ card }: SummaryCardItemProps) {
	const Icon = card.icon;

	return (
		<Card className="overflow-hidden hover:shadow-md transition-shadow">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium text-muted-foreground">
					{card.title}
				</CardTitle>
				<div className={`rounded-lg p-2 ${card.bgColor}`}>
					<Icon className={`h-5 w-5 ${card.iconColor}`} />
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-1">
					<div className="text-3xl font-bold">{card.value}</div>
					<div className="flex items-center justify-between">
						<p className="text-xs text-muted-foreground">{card.subtitle}</p>
						<div className="flex items-center gap-1">
							<TrendingUp
								className={`h-3 w-3 ${
									card.trendUp ? "text-green-500" : "text-red-500 rotate-180"
								}`}
							/>
							<span
								className={`text-xs font-medium ${
									card.trendUp ? "text-green-500" : "text-red-500"
								}`}
							>
								{card.trend}
							</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
