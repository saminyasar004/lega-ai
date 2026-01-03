import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Linkedin, Facebook } from "lucide-react";

export default function PricingPage() {
	return (
		<div className="min-h-screen w-full bg-[#EBF8FF] font-['Inter'] flex flex-col">
			<Navbar />

			{/* Main Content */}
			<main className="flex-grow container mx-auto px-4 pt-32 md:pt-40 pb-20 md:pb-24">
				{/* Hero Text */}
				<div className="text-center mb-16 max-w-5xl mx-auto space-y-8 md:space-y-12">
					<p className="text-2xl md:text-4xl lg:text-5xl text-[#5D5D5D] font-['Playfair_Display'] leading-relaxed px-2 md:px-4">
						To enjoy the full concierge experience — unlimited
						support, personalized recommendations, and direct access
						to human experts — please explore our membership plans."
					</p>
					<h2 className="text-3xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#2D2D2D] pt-2">
						Premium Plans of Legal AI
					</h2>
				</div>

				{/* Pricing Section */}
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-stretch pt-8 md:pt-12">
						{/* Free Plan */}
						<div className="relative group">
							<Card className="h-full bg-white/80 backdrop-blur-sm border border-blue-100 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,122,255,0.15)] transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,122,255,0.25)] flex flex-col overflow-hidden">
								<CardContent className="p-8 md:p-10 flex flex-col h-full">
									<div className="text-center mb-8">
										<div className="text-[3rem] md:text-[3.5rem] font-bold text-[#1A2B3C] mb-2 font-['Inter'] leading-tight">
											$0.0
											<span className="text-[1.5rem] md:text-[1.75rem] font-medium text-[#1A2B3C]">
												/mth
											</span>
										</div>
										<div className="text-[#007AFF] text-xl font-semibold mb-1">
											Free plan
										</div>
										<div className="text-[#8E9AAF] text-sm">
											Billed Monthly.
										</div>
									</div>

									<div className="space-y-5 mb-10 flex-grow">
										{[
											"Access to all basic features",
											"Basic reporting and analytics",
											"Up to 10 individual users",
											"20GB individual data each user",
											"Basic chat and email support",
										].map((feature, i) => (
											<div
												key={i}
												className="flex items-center gap-4"
											>
												<div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
													<Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
												</div>
												<span className="text-[#4A5568] text-[0.95rem]">
													{feature}
												</span>
											</div>
										))}
									</div>

									<Button className="w-full h-14 md:h-[3.75rem] bg-[#1E88E5] hover:bg-[#1976D2] text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/20">
										Selected
									</Button>
								</CardContent>
							</Card>
						</div>

						{/* Plus Plan - Most Popular */}
						<div className="relative group">
							{/* Curve Arrow and Most Popular text */}
							<div className="absolute -top-16 -right-4 md:-right-12 pointer-events-none hidden lg:block">
								<div className="relative">
									<span className="absolute -top-10 -left-4 whitespace-nowrap text-[#007AFF] font-['Playfair_Display'] italic font-semibold text-lg rotate-[-5deg]">
										Most popular!
									</span>
									<svg
										width="120"
										height="100"
										viewBox="0 0 120 100"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="text-[#007AFF] opacity-80"
									>
										<path
											d="M10 20C30 40 50 80 80 90"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeDasharray="1 0"
										/>
										<path
											d="M70 80L82 92L92 78"
											stroke="currentColor"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>

							<Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,122,255,0.3)] transform transition-all duration-300 md:hover:scale-[1.02] flex flex-col overflow-hidden">
								<CardContent className="p-8 md:p-10 flex flex-col h-full">
									{/* Mobile Most Popular Badge */}
									<div className="lg:hidden flex justify-center mb-4">
										<span className="bg-blue-50 text-[#007AFF] px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
											MOST POPULAR
										</span>
									</div>
									<div className="text-center mb-8">
										<div className="text-[3rem] md:text-[3.5rem] font-bold text-[#1A2B3C] mb-2 font-['Inter'] leading-tight">
											$20
											<span className="text-[1.5rem] md:text-[1.75rem] font-medium text-[#1A2B3C]">
												/mth
											</span>
										</div>
										<div className="text-[#007AFF] text-xl font-semibold mb-1">
											Plus plan
										</div>
										<div className="text-[#8E9AAF] text-sm">
											Billed Monthly.
										</div>
									</div>

									<div className="space-y-5 mb-10 flex-grow">
										{[
											"200+ integrations",
											"Advanced reporting and analytics",
											"Up to 20 individual users",
											"40GB individual data each user",
											"Priority chat and email support",
										].map((feature, i) => (
											<div
												key={i}
												className="flex items-center gap-4"
											>
												<div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
													<Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
												</div>
												<span className="text-[#4A5568] text-[0.95rem]">
													{feature}
												</span>
											</div>
										))}
									</div>

									<Button className="w-full h-14 md:h-[3.75rem] bg-[#1E88E5] hover:bg-[#1976D2] text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/20">
										Get started
									</Button>
								</CardContent>
							</Card>
						</div>

						{/* Elite Plan */}
						<div className="relative group">
							<Card className="h-full bg-white/80 backdrop-blur-sm border border-blue-100 rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,122,255,0.15)] transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,122,255,0.25)] flex flex-col overflow-hidden">
								<CardContent className="p-8 md:p-10 flex flex-col h-full">
									<div className="text-center mb-8">
										<div className="text-[3rem] md:text-[3.5rem] font-bold text-[#1A2B3C] mb-2 font-['Inter'] leading-tight">
											$40
											<span className="text-[1.5rem] md:text-[1.75rem] font-medium text-[#1A2B3C]">
												/mth
											</span>
										</div>
										<div className="text-[#007AFF] text-xl font-semibold mb-1">
											Elite plan
										</div>
										<div className="text-[#8E9AAF] text-sm">
											Billed Monthly.
										</div>
									</div>

									<div className="space-y-5 mb-10 flex-grow">
										{[
											"Advanced custom fields",
											"Audit log and data history",
											"Unlimited individual users",
											"Unlimited individual data",
											"Personalised+priotity service",
										].map((feature, i) => (
											<div
												key={i}
												className="flex items-center gap-4"
											>
												<div className="w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center flex-shrink-0">
													<Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
												</div>
												<span className="text-[#4A5568] text-[0.95rem]">
													{feature}
												</span>
											</div>
										))}
									</div>

									<Button className="w-full h-14 md:h-[3.75rem] bg-[#1E88E5] hover:bg-[#1976D2] text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/20">
										Get started
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="py-20 bg-white md:bg-white/50 backdrop-blur-sm mt-auto border-t border-blue-100">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
						<div className="max-w-md">
							<div className="flex items-center gap-3 mb-6">
								<img
									src="/logo.svg"
									alt="LegaAI Logo"
									className="h-10 w-auto"
								/>
							</div>
							<p className="text-[#64748B] text-lg leading-relaxed mb-8 pr-0 md:pr-8">
								AI-powered legal guidance made accessible. Get
								answers to your legal questions 24/7.
							</p>
							<p className="text-[#94A3B8] text-sm">
								All rights reserved.
							</p>
						</div>

						<div className="flex flex-row gap-16 md:gap-24">
							<div>
								<div className="text-sm font-bold text-[#64748B] mb-6 uppercase tracking-wider">
									Pages
								</div>
								<div className="flex flex-col gap-4">
									<a
										href="/home"
										className="text-[#007AFF] font-medium hover:underline decoration-2 underline-offset-4"
									>
										Home
									</a>
									<a
										href="/chat"
										className="text-[#007AFF] font-medium hover:underline decoration-2 underline-offset-4"
									>
										Meet Legal AI
									</a>
									<a
										href="/pricing"
										className="text-[#007AFF] font-medium hover:underline decoration-2 underline-offset-4"
									>
										Pricing
									</a>
								</div>
							</div>

							<div>
								<div className="text-sm font-bold text-[#64748B] mb-6 uppercase tracking-wider">
									Legal
								</div>
								<div className="flex flex-col gap-4">
									<a
										href="#"
										className="text-[#007AFF] font-medium hover:underline decoration-2 underline-offset-4"
									>
										Terms
									</a>
									<a
										href="#"
										className="text-[#007AFF] font-medium hover:underline decoration-2 underline-offset-4"
									>
										Privacy
									</a>
								</div>
							</div>
						</div>

						<div className="flex gap-6 items-center pt-8 md:pt-0">
							<a
								href="#"
								className="text-[#94A3B8] hover:text-[#007AFF] transition-colors"
							>
								<svg
									viewBox="0 0 24 24"
									className="w-7 h-7 fill-current"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
								</svg>
							</a>
							<a
								href="#"
								className="text-[#94A3B8] hover:text-[#007AFF] transition-colors"
							>
								<Linkedin className="w-7 h-7" />
							</a>
							<a
								href="#"
								className="text-[#94A3B8] hover:text-[#007AFF] transition-colors"
							>
								<Facebook className="w-7 h-7" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
