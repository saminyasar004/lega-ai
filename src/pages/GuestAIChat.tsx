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
			{/* Header */}
			<header className="bg-white border-b border-blue-100">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 bg-[#007AFF] rounded flex items-center justify-center">
							<Sparkles className="w-4 h-4 text-white" />
						</div>
						<span className="font-bold text-lg text-gray-800">
							LegalAI
						</span>
					</div>

					<nav className="hidden md:flex items-center gap-6">
						<a
							href="/home"
							className="text-sm text-gray-600 hover:text-blue-600"
						>
							Home
						</a>
						<a
							href="#chat"
							className="text-sm text-[#007AFF] font-medium border-b-2 border-[#007AFF] pb-1"
						>
							Meet Legal AI
						</a>
						<a
							href="#pricing"
							className="text-sm text-gray-600 hover:text-blue-600"
						>
							Pricing
						</a>
					</nav>

					<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-9 px-5 text-sm font-medium rounded-md shadow-none">
						Get Started
					</Button>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-12 max-w-4xl">
				{/* Chat Section */}
				<div className="text-center mb-8">
					<h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#007AFF] mb-3">
						Introducing Legal AI
					</h1>
					<p className="text-gray-600 text-lg">
						Ask us about legal information
					</p>
				</div>

				{/* Chat Input Area */}
				<Card className="mb-12 bg-white border border-blue-100 shadow-sm">
					<CardContent className="p-6">
						<div className="flex items-start gap-3 mb-4">
							<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
								<Lightbulb className="w-5 h-5 text-yellow-600" />
							</div>
							<div className="flex-1">
								<textarea
									placeholder="What do you want to know about legal information? Type your question here..."
									className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder:text-gray-400"
								/>
							</div>
						</div>
						<div className="flex justify-end">
							<Button className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-10 px-6 text-sm font-medium rounded-md shadow-none gap-2">
								<Send className="w-4 h-4" />
								Send Message
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* About Me & AI Features */}
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					<Card className="bg-blue-50/50 border border-blue-100">
						<CardContent className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								About Me
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-blue-50/50 border border-blue-100">
						<CardContent className="p-6">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								AI Features
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</CardContent>
					</Card>
				</div>

				{/* How It Works */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold text-[#007AFF] mb-8">
						How It Works?
					</h2>
					<p className="text-gray-600 mb-8">
						Get answers to your legal questions in just a few simple
						steps
					</p>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
							<div key={item.step} className="text-center">
								<div className="text-4xl font-bold text-blue-100 mb-2">
									{item.step}
								</div>
								<h4 className="font-bold text-gray-900 mb-1 text-sm">
									{item.title}
								</h4>
								<p className="text-xs text-gray-600">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="py-8 bg-white border-t border-gray-200 mt-12">
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
								AI-powered legal guidance made accessible. Get
								answers to your legal questions 24/7.
							</p>
							<p className="text-xs text-gray-400 mt-4">
								All rights reserved
							</p>
						</div>

						<div className="flex flex-col items-center gap-4">
							<div className="text-xs font-medium text-gray-600">
								Pages
							</div>
							<div className="flex gap-4">
								<a
									href="/home"
									className="text-sm text-[#007AFF] hover:underline"
								>
									Home
								</a>
								<a
									href="#"
									className="text-sm text-[#007AFF] hover:underline"
								>
									Terms
								</a>
							</div>
						</div>

						<div className="flex flex-col items-center gap-4">
							<div className="text-xs font-medium text-gray-600">
								Legal
							</div>
							<div className="flex gap-4">
								<a
									href="#"
									className="text-sm text-[#007AFF] hover:underline"
								>
									Meet LegalAI
								</a>
								<a
									href="#"
									className="text-sm text-[#007AFF] hover:underline"
								>
									Privacy
								</a>
							</div>
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
			</footer>

			{/* Modal - Want To Test the Legal AI? */}
			{showModal && (
				<div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
					<Card className="w-full max-w-md bg-white border-none shadow-xl animate-in zoom-in duration-200">
						<CardContent className="p-8 text-center">
							<h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-gray-900 mb-2">
								Want To Test the Legal AI?
							</h2>
							<p className="text-gray-600 mb-6">
								Create an account and get started
							</p>

							<div className="flex flex-col sm:flex-row gap-3 justify-center">
								<Button
									onClick={() => setShowModal(false)}
									className="bg-white hover:bg-gray-50 text-red-500 border-2 border-red-500 h-11 px-8 text-base font-medium rounded-md shadow-none"
								>
									Cancel
								</Button>
								<Button
									onClick={() =>
										(window.location.href = "/signup")
									}
									className="bg-[#007AFF] hover:bg-[#0066cc] text-white h-11 px-8 text-base font-medium rounded-md shadow-none"
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
