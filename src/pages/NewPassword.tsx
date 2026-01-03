import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";

export default function NewPassword() {
	return (
		<div className="min-h-screen w-full bg-[#E5F6FF] flex items-center justify-center p-4 md:p-8 font-['Inter'] relative overflow-hidden">
			<div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
				{/* Left Side - Content */}
				<div className="flex flex-col items-center md:items-start space-y-6 z-10 w-full max-w-md mx-auto md:mx-0">
					<h1 className="text-3xl md:text-4xl text-[#007AFF] font-['Playfair_Display'] font-bold text-center md:text-left w-full">
						New Password
					</h1>

					<div className="w-full bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-5">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="newPassword">
									New password
								</Label>
								<div className="relative">
									<Input
										id="newPassword"
										placeholder="••••••••"
										type="password"
										className="h-11 bg-white border-gray-200 pr-10"
									/>
									<button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
										<Eye className="w-4 h-4" />
									</button>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="confirmPassword">
									Confirm password
								</Label>
								<div className="relative">
									<Input
										id="confirmPassword"
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
								Done
							</Button>
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
