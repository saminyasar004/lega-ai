import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
	const location = useLocation();

	const menuItems = [
		{ name: "Home", path: "/home" },
		{ name: "Meet Legal AI", path: "/chat" },
		{ name: "Pricing", path: "/pricing" },
	];

	return (
		<header className="bg-transparent pt-6 w-full">
			<div className="container mx-auto px-4 flex items-center justify-between">
				<Link to="/home" className="flex items-center gap-2 group">
					<Scale className="w-8 h-8 text-[#007AFF] transition-transform group-hover:scale-110" />
					<span className="font-bold text-2xl text-[#007AFF]">
						LegaAI
					</span>
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					{menuItems.map((item) => {
						const isActive = location.pathname === item.path;
						return (
							<Link
								key={item.path}
								to={item.path}
								className={`text-sm tracking-wide transition-all duration-200 relative py-1 ${
									isActive
										? "text-[#007AFF] font-medium"
										: "text-[#94A3B8] hover:text-[#007AFF]"
								}`}
							>
								{item.name}
								{isActive && (
									<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007AFF]"></span>
								)}
							</Link>
						);
					})}
				</nav>

				<Link to="/signup">
					<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-[44px] px-8 text-sm font-semibold rounded-lg shadow-sm transition-all hover:shadow-blue-200">
						Get Started
					</Button>
				</Link>
			</div>
		</header>
	);
}
