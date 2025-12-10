interface StatCardProps {
	value: number;
	label: string;
	variant: "default" | "success" | "warning" | "danger";
}

const variantStyles = {
	default: "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100",
	success:
		"bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400",
	warning:
		"bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400",
	danger: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400",
};

/**
 * Presentational component for stat card
 */
export function StatCard({ value, label, variant }: StatCardProps) {
	return (
		<div className={`text-center p-4 rounded-lg ${variantStyles[variant]}`}>
			<div className="text-2xl font-bold">{value}</div>
			<div className="text-sm text-muted-foreground">{label}</div>
		</div>
	);
}
