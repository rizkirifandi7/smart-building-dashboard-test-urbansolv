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
		<Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-cyan-500">
			{/* Background Gradient Effect */}
			<div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
				<CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
					{card.title}
				</CardTitle>
				<div
					className={`rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110 ${card.bgColor}`}
				>
					<Icon className={`h-5 w-5 ${card.iconColor}`} />
				</div>
			</CardHeader>
			<CardContent className="relative z-10">
				<div className="space-y-2">
					<div className="text-2xl font-semibold tracking-tight">{card.value}</div>
					<div className="flex items-center justify-between">
						<p className="text-xs text-muted-foreground font-medium bg-muted/50 px-2 py-1 rounded-md">
							{card.subtitle}
						</p>
						<div className="flex items-center gap-1.5 bg-background/50 px-2 py-1 rounded-full border shadow-sm">
							<TrendingUp
								className={`h-3.5 w-3.5 ${
									card.trendUp ? "text-emerald-500" : "text-rose-500 rotate-180"
								}`}
							/>
							<span
								className={`text-xs font-bold ${
									card.trendUp ? "text-emerald-600" : "text-rose-600"
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
