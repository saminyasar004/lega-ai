import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
	MessageSquare,
	Clock,
	Shield,
	Zap,
	Star,
	Sparkles,
	Twitter,
	Linkedin,
	Facebook,
} from "lucide-react";

export default function GuestHome() {
	return (
		<div className="min-h-screen w-full font-['Inter'] bg-white">
			<section className="bg-gradient-to-b from-[#E5F6FF] to-white pb-16 md:pb-24">
				<Navbar />
				<div className="container mx-auto px-4 text-center pt-32">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm text-blue-600 font-medium text-sm mb-6">
						<Sparkles className="w-4 h-4" />
						<span>AI-Powered Legal Advice</span>
					</div>

					<h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
						Legal Advice Made{" "}
						<span className="text-[#007AFF]">
							Simple & Accessible
						</span>
					</h1>

					<p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
						Get instant, AI-powered answers to your legal questions.
						Understand your rights, explore options, and make
						informed decisions
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-12 md:h-11 px-8 text-lg md:text-base font-medium rounded-lg shadow-none">
							Get Started
						</Button>
						<Button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 h-12 md:h-11 px-8 text-lg md:text-base font-normal rounded-lg shadow-none">
							View Pricing
						</Button>
					</div>
				</div>
			</section>

			{/* Why Choose LegalAI Section */}
			<section className="py-20 md:py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center mb-16 text-gray-900 leading-tight">
						Why Chose LegalAI?
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
						<Card className="bg-white border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
							<CardContent className="p-8 md:p-6">
								<div className="w-14 h-14 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 md:mb-4">
									<MessageSquare className="w-7 h-7 md:w-6 md:h-6 text-[#007AFF]" />
								</div>
								<h3 className="font-bold text-xl md:text-lg mb-3 md:mb-2 text-gray-900">
									AI Powered Chat
								</h3>
								<p className="text-gray-600 text-base md:text-sm leading-relaxed">
									Ask any legal-related question and receive
									instant answers powered by our AI system
									specialized in law.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
							<CardContent className="p-8 md:p-6">
								<div className="w-14 h-14 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 md:mb-4">
									<Clock className="w-7 h-7 md:w-6 md:h-6 text-[#007AFF]" />
								</div>
								<h3 className="font-bold text-xl md:text-lg mb-3 md:mb-2 text-gray-900">
									24/7 Availability
								</h3>
								<p className="text-gray-600 text-base md:text-sm leading-relaxed">
									Access legal guidance 24/7, whenever you
									need it. No appointments or waiting
									required.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
							<CardContent className="p-8 md:p-6">
								<div className="w-14 h-14 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 md:mb-4">
									<Shield className="w-7 h-7 md:w-6 md:h-6 text-[#007AFF]" />
								</div>
								<h3 className="font-bold text-xl md:text-lg mb-3 md:mb-2 text-gray-900">
									Fast & Private
								</h3>
								<p className="text-gray-600 text-base md:text-sm leading-relaxed">
									Your legal queries and data are always kept
									secure and confidential with end-to-end
									encryption.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 rounded-2xl">
							<CardContent className="p-8 md:p-6">
								<div className="w-14 h-14 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 md:mb-4">
									<Zap className="w-7 h-7 md:w-6 md:h-6 text-[#007AFF]" />
								</div>
								<h3 className="font-bold text-xl md:text-lg mb-3 md:mb-2 text-gray-900">
									Instant Response
								</h3>
								<p className="text-gray-600 text-base md:text-sm leading-relaxed">
									Receive instant responses to your legal
									questions. Save time and get answers right
									away.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 md:py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center mb-6 text-gray-900 leading-tight">
						How It Works?
					</h2>
					<p className="text-gray-600 text-center mb-16 text-lg max-w-2xl mx-auto">
						Getting legal guidance has never been easier 🎯 Follow
						these 4 easy steps to get started
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
						{[
							{
								step: "01",
								title: "Create Account",
								desc: "Sign up instantly with your email. No credit card required to start.",
							},
							{
								step: "02",
								title: "Ask Questions",
								desc: "Type your legal question in plain English. Our AI understands context.",
							},
							{
								step: "03",
								title: "Upload File",
								desc: "For deeper analysis, upload related legal documents for better insights.",
							},
							{
								step: "04",
								title: "Get Guidance",
								desc: "Receive clear and actionable legal guidance instantly.",
							},
						].map((item, idx) => (
							<div key={idx} className="text-center group">
								<div className="text-7xl md:text-6xl font-black text-blue-100 mb-6 transition-colors group-hover:text-blue-200">
									{item.step}
								</div>
								<h3 className="font-bold text-xl md:text-lg mb-3 text-gray-900">
									{item.title}
								</h3>
								<p className="text-gray-600 text-base md:text-sm leading-relaxed px-4 md:px-0">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 md:py-16 bg-white overflow-hidden">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-center mb-16 text-gray-900">
						Testimonials
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-12">
						{[1, 2, 3].map((i) => (
							<Card
								key={i}
								className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-2xl"
							>
								<CardContent className="p-8 md:p-6">
									<div className="flex gap-1 mb-4">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												key={star}
												className="w-5 h-5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-4">
										@johndoe3412
									</div>
									<p className="text-gray-600 text-base md:text-sm mb-6 leading-relaxed italic">
										"This app completely changed the way I
										approach legal questions. It's fast,
										accurate, and has saved me so much time
										and money."
									</p>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#007AFF] font-bold">
											AY
										</div>
										<div>
											<div className="font-bold text-base md:text-sm text-gray-900">
												Alex Yu
											</div>
											<div className="text-xs text-gray-500">
												Product Manager
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center">
						<a
							href="#"
							className="text-[#007AFF] hover:text-[#0066cc] font-bold text-base md:text-sm underline-offset-4 hover:underline transition-color"
						>
							View All Testimonials
						</a>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 md:py-20 bg-[#007AFF] relative overflow-hidden">
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
					<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[120%] bg-white rounded-full blur-3xl"></div>
				</div>
				<div className="container mx-auto px-6 text-center relative z-10">
					<h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
						Ready To Get Started?
					</h2>
					<p className="text-blue-50/90 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
						Join Thousands Of Users Who Trust LegalAI For Their
						Legal Questions
					</p>

					<div className="max-w-md mx-auto">
						<div className="flex flex-col sm:flex-row gap-4">
							<Input
								placeholder="Enter your email"
								className="h-14 bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus-visible:ring-white/30 text-lg rounded-xl"
							/>
							<Button className="h-14 px-8 bg-white text-[#007AFF] hover:bg-blue-50 font-bold text-lg shadow-xl shadow-black/10 whitespace-nowrap rounded-xl transition-all transform active:scale-95">
								Start Now
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 bg-gray-50 border-t border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 bg-[#007AFF] rounded flex items-center justify-center">
									<Sparkles className="w-5 h-5 text-white" />
								</div>
								<span className="font-bold text-lg text-gray-900">
									Logoipsum
								</span>
							</div>
							<p className="text-xs text-gray-500 max-w-xs leading-relaxed">
								Simplifying legal advice with AI-powered
								solutions. Get answers to your legal questions
								anytime, anywhere.
							</p>
							<p className="text-xs text-gray-400 mt-4">
								All rights reserved
							</p>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-6">
							<div className="flex gap-4">
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-600"
								>
									Pages
								</a>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-600"
								>
									Start LegalAI
								</a>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-600"
								>
									Pricing
								</a>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-600"
								>
									Privacy
								</a>
							</div>

							<div className="flex gap-3">
								<a
									href="#"
									className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
								>
									<Twitter className="w-4 h-4 text-gray-600" />
								</a>
								<a
									href="#"
									className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
								>
									<Linkedin className="w-4 h-4 text-gray-600" />
								</a>
								<a
									href="#"
									className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
								>
									<Facebook className="w-4 h-4 text-gray-600" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
