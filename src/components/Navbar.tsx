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
		<header className="absolute top-0 left-0 w-full bg-transparent pt-8 select-none z-50">
			<div className="container mx-auto px-8 flex items-center justify-between relative">
				{/* Logo Section */}
				<Link
					to="/home"
					className="flex items-center active:opacity-80 transition-opacity"
				>
					<img
						src="/logo.svg"
						alt="LegaAI Logo"
						className="h-10 w-auto object-contain"
					/>
				</Link>

				{/* Desktop Navigation Link Center */}
				<nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
					{menuItems.map((item) => {
						const isActive = location.pathname === item.path;
						return (
							<Link
								key={item.path}
								to={item.path}
								className={`text-[0.95rem] transition-all duration-300 relative py-1.5 px-0.5 ${
									isActive
										? "text-[#007AFF] font-semibold"
										: "text-[#667085] font-medium hover:text-[#007AFF]"
								}`}
							>
								{item.name}
								{isActive && (
									<span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#007AFF] rounded-full"></span>
								)}
							</Link>
						);
					})}
				</nav>

				{/* Action Section */}
				<div className="flex items-center">
					<Link to="/signup">
						<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-[44px] px-8 text-[1rem] font-bold rounded-lg shadow-[0_4px_14px_0_rgba(0,118,255,0.25)] transition-all duration-300 transform active:scale-[0.98]">
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
