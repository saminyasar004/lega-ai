import { Button } from "@/components/ui/button";
import { Mail, Sparkles, MessageSquare } from "lucide-react";

export default function LegalGuideLogin() {
	return (
		<div className="min-h-screen w-full bg-[#E5F6FF] flex items-center justify-center p-4 md:p-8 font-['Inter'] relative overflow-hidden">
			{/* Background Gradient/Effects - Subtle glow for the overall page if needed */}

			<div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
				{/* Left Side - Content */}
				<div className="flex flex-col items-start space-y-8 z-10">
					<div className="space-y-6">
						<h1 className="text-5xl md:text-6xl text-[#007AFF] font-['Playfair_Display'] font-bold leading-tight">
							Simple & Accessible
						</h1>

						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-100 shadow-sm text-blue-500 font-medium text-sm">
							<Sparkles className="w-4 h-4 fill-blue-500" />
							<span>AI-Powered Legal Guidance</span>
						</div>
					</div>

					<div className="w-full max-w-md space-y-4">
						<Button className="w-full h-14 bg-white hover:bg-gray-50 text-gray-600 dark:bg-white dark:text-gray-600 hover:dark:bg-gray-50 border border-gray-200 font-normal justify-start px-6 gap-4 text-base shadow-sm relative">
							{/* Google Icon SVG */}
							<svg className="w-5 h-5" viewBox="0 0 24 24">
								<path
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									fill="#4285F4"
								/>
								<path
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									fill="#34A853"
								/>
								<path
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-1.19-.58z"
									fill="#FBBC05"
								/>
								<path
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									fill="#EA4335"
								/>
							</svg>
							<span className="flex-1 text-center">
								Continue with google
							</span>
						</Button>

						<Button className="w-full h-14 bg-white hover:bg-gray-50 text-gray-600 dark:bg-white dark:text-gray-600 hover:dark:bg-gray-50 border border-gray-200 font-normal justify-start px-6 gap-4 text-base shadow-sm">
							<Mail className="w-5 h-5 text-blue-500" />
							<span className="flex-1 text-center">
								Continue with Email
							</span>
						</Button>

						<div className="relative flex items-center py-2">
							<div className="flex-grow border-t border-gray-300"></div>
							<span className="flex-shrink-0 mx-4 text-green-600 text-sm">
								Or
							</span>
							<div className="flex-grow border-t border-gray-300"></div>
						</div>

						<Button
							variant="outline"
							className="w-full h-14 bg-white hover:bg-blue-50 text-[#007AFF] dark:bg-white dark:text-[#007AFF] border border-[#007AFF] font-normal text-base shadow-sm"
						>
							Continue as Guest
						</Button>

						<div className="text-center pt-2">
							<span className="text-gray-600">
								Already have an account?{" "}
							</span>
							<a
								href="#"
								className="font-bold text-[#007AFF] hover:underline"
							>
								Sign In
							</a>
						</div>

						<div className="pt-8 text-xs text-gray-400 text-center leading-relaxed max-w-sm mx-auto">
							<span className="text-blue-400">Disclaimer:</span>{" "}
							By continuing, you agree to our Terms & Privacy
							Policy.
						</div>
					</div>
				</div>

				{/* Right Side - Illustration */}
				<div className="hidden md:flex items-center justify-center p-8">
					<img
						src="/spotlight-banner.svg"
						alt="AI Legal Guide Illustration"
						className="w-full max-w-[600px] h-auto object-contain animate-in fade-in zoom-in duration-700"
					/>
				</div>
			</div>
		</div>
	);
}
