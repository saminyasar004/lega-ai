import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
	Sparkles,
	Lightbulb,
	Twitter,
	Linkedin,
	Facebook,
	Send,
} from "lucide-react";
import { useState } from "react";

export default function GuestAIChat() {
	const [showModal, setShowModal] = useState(true);

	return (
		<div className="min-h-screen w-full bg-gradient-to-b from-[#E5F6FF] to-white font-['Inter'] relative">
			<Navbar />

			{/* Main Content */}
			<main className="container mx-auto px-4 pt-32 pb-12 max-w-4xl">
				{/* Chat Section */}
				<div className="text-center mb-10 md:mb-12">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold text-[#007AFF] mb-4">
						Introducing Legal AI
					</h1>
					<p className="text-gray-600 text-lg md:text-xl">
						Ask us about legal information
					</p>
				</div>

				{/* Chat Input Area */}
				<Card className="mb-12 bg-white border border-blue-100 shadow-xl rounded-2xl overflow-hidden">
					<CardContent className="p-6 md:p-8">
						<div className="flex flex-col md:flex-row items-start gap-4 mb-6">
							<div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center flex-shrink-0">
								<Lightbulb className="w-6 h-6 text-yellow-600" />
							</div>
							<div className="flex-1 w-full">
								<textarea
									placeholder="What do you want to know about legal information? Type your question here..."
									className="w-full min-h-[160px] p-4 bg-gray-50/50 border border-gray-100 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-700 placeholder:text-gray-400 text-lg"
								/>
							</div>
						</div>
						<div className="flex justify-end">
							<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-12 md:h-11 px-8 md:px-6 text-lg md:text-sm font-bold rounded-xl shadow-lg shadow-blue-500/10 gap-2 w-full md:w-auto">
								<Send className="w-5 h-5 md:w-4 md:h-4" />
								Send Message
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* About Me & AI Features */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
					<Card className="bg-white border border-blue-50 shadow-sm rounded-2xl">
						<CardContent className="p-8 md:p-6">
							<h3 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3 font-['Playfair_Display']">
								About Me
							</h3>
							<p className="text-gray-600 text-base md:text-sm leading-relaxed">
								Our Legal AI is trained on vast legal databases
								to provide you with accurate and helpful legal
								information instantly.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-white border border-blue-50 shadow-sm rounded-2xl">
						<CardContent className="p-8 md:p-6">
							<h3 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 md:mb-3 font-['Playfair_Display']">
								AI Features
							</h3>
							<p className="text-gray-600 text-base md:text-sm leading-relaxed">
								Utilizing state-of-the-art NLP, we understand
								complex legal queries and provide structured,
								easy-to-understand responses.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* How It Works */}
				<div className="text-center mb-20 md:mb-12">
					<h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#007AFF] mb-12">
						How It Works?
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
						{[
							{
								step: "01",
								title: "Create Account",
								desc: "Sign up instantly with your email",
							},
							{
								step: "02",
								title: "Ask Question",
								desc: "Type your legal question in plain English",
							},
							{
								step: "03",
								title: "Upload File",
								desc: "Upload documents for analysis",
							},
							{
								step: "04",
								title: "Get Answer",
								desc: "Receive instant legal guidance",
							},
						].map((item) => (
							<div key={item.step} className="text-center group">
								<div className="text-5xl md:text-4xl font-black text-blue-100 mb-4 group-hover:text-blue-200 transition-colors">
									{item.step}
								</div>
								<h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
									{item.title}
								</h4>
								<p className="text-xs md:text-sm text-gray-600 px-2 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="py-20 md:py-16 bg-white border-t border-blue-50 mt-12">
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
							<p className="text-[#94A3B8] text-sm font-medium">
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
										className="text-[#007AFF] font-bold hover:underline underline-offset-4"
									>
										Home
									</a>
									<a
										href="/chat"
										className="text-[#007AFF] font-bold hover:underline underline-offset-4"
									>
										Meet Legal AI
									</a>
									<a
										href="/pricing"
										className="text-[#007AFF] font-bold hover:underline underline-offset-4"
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
										className="text-[#007AFF] font-bold hover:underline underline-offset-4"
									>
										Terms
									</a>
									<a
										href="#"
										className="text-[#007AFF] font-bold hover:underline underline-offset-4"
									>
										Privacy
									</a>
								</div>
							</div>
						</div>

						<div className="flex gap-6 items-center pt-4 md:pt-0">
							<a
								href="#"
								className="text-[#94A3B8] hover:text-[#007AFF] transition-colors"
							>
								<Twitter className="w-7 h-7" />
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

			{/* Modal - Want To Test the Legal AI? */}
			{showModal && (
				<div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-6 z-[100]">
					<Card className="w-full max-w-md bg-white border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-in zoom-in duration-200 rounded-[2rem] overflow-hidden">
						<CardContent className="p-10 md:p-8 text-center">
							<h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-4 leading-tight">
								Want To Test the Legal AI?
							</h2>
							<p className="text-gray-600 mb-8 text-lg">
								Create an account and get started with our AI
								legal expert today.
							</p>

							<div className="flex flex-col gap-4 sm:flex-row sm:gap-3 justify-center">
								<Button
									onClick={() => setShowModal(false)}
									className="bg-white hover:bg-gray-50 text-red-500 border-2 border-red-500 h-14 md:h-11 px-8 text-lg md:text-base font-bold rounded-xl shadow-none w-full sm:w-auto"
								>
									Cancel
								</Button>
								<Button
									onClick={() =>
										(window.location.href = "/signup")
									}
									className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-14 md:h-11 px-8 text-lg md:text-base font-bold rounded-xl shadow-xl shadow-blue-500/20 w-full sm:w-auto"
								>
									Create Account
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
}
