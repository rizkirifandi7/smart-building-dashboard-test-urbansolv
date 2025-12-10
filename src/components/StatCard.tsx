interface StatCardProps {
	value: number;
	label: string;
	variant: "default" | "success" | "warning" | "danger";
}

const variantStyles = {
	default:
		"bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800/50 dark:text-slate-200 dark:border-slate-700/50 border",
	success:
		"bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800/50 border",
	warning:
		"bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50 border",
	danger:
		"bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800/50 border",
};

/**
 * Presentational component for stat card
 */
export function StatCard({ value, label, variant }: StatCardProps) {
	return (
		<div
			className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all hover:scale-105 ${variantStyles[variant]}`}
		>
			<div className="text-xl font-bold tracking-tight">{value}</div>
			<div className="text-[10px] uppercase tracking-wider font-medium opacity-80">
				{label}
			</div>
		</div>
	);
}
