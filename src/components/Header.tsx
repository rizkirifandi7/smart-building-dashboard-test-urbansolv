import { Building2 } from "lucide-react";

interface HeaderProps {
	buildingName: string;
}

export function Header({ buildingName }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-16 items-center">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg--to-br from-blue-600 to-blue-700">
						<Building2 className="h-6 w-6 text-white" />
					</div>
					<div>
						<h1 className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
							Urbansolv Smart Building Dashboard
						</h1>
						<p className="text-sm text-muted-foreground">{buildingName}</p>
					</div>
				</div>
			</div>
		</header>
	);
}
