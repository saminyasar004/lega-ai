import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";

export default function LegalGuideSignIn() {
	return (
		<div className="min-h-screen w-full bg-[#E5F6FF] flex items-center justify-center p-4 md:p-8 font-['Inter'] relative overflow-hidden">
			<div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
				{/* Left Side - Content */}
				<div className="flex flex-col items-center md:items-start space-y-6 z-10 w-full max-w-md mx-auto md:mx-0">
					<h1 className="text-3xl md:text-4xl text-[#007AFF] font-['Playfair_Display'] font-bold text-center md:text-left w-full">
						Sign in to your account
					</h1>

					<div className="w-full bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-6">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email address</Label>
								<Input
									id="email"
									placeholder="your@email.com"
									type="email"
									className="h-11 bg-white border-gray-200"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Input
										id="password"
										placeholder="••••••••"
										type="password"
										className="h-11 bg-white border-gray-200 pr-10"
									/>
									<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
										<Eye className="w-4 h-4" />
									</button>
								</div>
							</div>

							<Button className="w-full h-11 bg-[#007AFF] hover:bg-[#0069d9] text-white">
								Sign In
							</Button>

							<div className="flex justify-end">
								<a
									href="#"
									className="text-xs text-gray-600 hover:text-blue-600 font-medium"
								>
									Forgot password?
								</a>
							</div>
						</div>

						<div className="relative flex items-center">
							<div className="flex-grow border-t border-gray-200"></div>
							<span className="flex-shrink-0 mx-4 text-gray-400 text-xs">
								Or continue with
							</span>
							<div className="flex-grow border-t border-gray-200"></div>
						</div>

						<Button className="w-full h-11 bg-white hover:bg-gray-50 text-gray-600 dark:bg-white dark:text-gray-600 hover:dark:bg-gray-50 border border-gray-200 font-normal gap-3 shadow-none">
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
							Continue with google
						</Button>

						<div className="text-center">
							<span className="text-gray-600 text-sm">
								Don't have an account?{" "}
							</span>
							<a
								href="#"
								className="font-bold text-[#007AFF] hover:underline text-sm"
							>
								Sign Up
							</a>
						</div>
					</div>

					<div className="w-full text-center">
						<p className="text-[10px] text-blue-300 max-w-xs mx-auto leading-tight">
							<span className="text-blue-400 font-medium">
								Disclaimer:
							</span>{" "}
							I provide information only. For complex legal
							matters, please consult with experts.
						</p>
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
