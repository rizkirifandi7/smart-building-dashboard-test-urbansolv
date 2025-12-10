import { Building2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
	buildingName: string;
}

export function Header({ buildingName }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-muted">
						<Building2 className="h-6 w-6 " />
					</div>
					<div>
						<h1 className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
							Urbansolv Smart Building Dashboard
						</h1>
						<p className="text-sm text-muted-foreground">{buildingName}</p>
					</div>
				</div>
				<ThemeToggle />
			</div>
		</header>
	);
}
