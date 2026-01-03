import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		{ name: "Home", path: "/home" },
		{ name: "Meet Legal AI", path: "/chat" },
		{ name: "Pricing", path: "/pricing" },
	];

	// Close menu on route change
	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isMenuOpen]);

	return (
		<header className="absolute top-0 left-0 w-full bg-transparent pt-6 md:pt-8 select-none z-50">
			<div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">
				{/* Logo Section */}
				<Link
					to="/home"
					className="flex items-center active:opacity-80 transition-opacity z-[60]"
				>
					<img
						src="/logo.svg"
						alt="LegaAI Logo"
						className="h-8 md:h-10 w-auto object-contain"
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

				{/* Desktop Action Section */}
				<div className="hidden md:flex items-center">
					<Link to="/signup">
						<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-[44px] px-8 text-[1rem] font-bold rounded-lg shadow-[0_4px_14px_0_rgba(0,118,255,0.25)] transition-all duration-300 transform active:scale-[0.98]">
							Get Started
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden p-2 text-[#667085] hover:text-[#007AFF] transition-colors z-[60]"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="w-8 h-8" />
					) : (
						<Menu className="w-8 h-8" />
					)}
				</button>

				{/* Mobile Navigation Overlay */}
				<div
					className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 md:hidden transition-all duration-300 ease-in-out ${
						isMenuOpen
							? "opacity-100 visible"
							: "opacity-0 invisible pointer-events-none"
					}`}
				>
					<div className="flex flex-col items-center justify-center h-full gap-8 p-4">
						{menuItems.map((item) => {
							const isActive = location.pathname === item.path;
							return (
								<Link
									key={item.path}
									to={item.path}
									className={`text-2xl transition-all duration-300 ${
										isActive
											? "text-[#007AFF] font-bold"
											: "text-[#667085] font-medium"
									}`}
								>
									{item.name}
								</Link>
							);
						})}
						<Link to="/signup" className="w-full max-w-xs mt-4">
							<Button className="w-full bg-[#007AFF] hover:bg-[#0066cc] text-white h-[56px] text-lg font-bold rounded-xl shadow-lg">
								Get Started
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
