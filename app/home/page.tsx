'use client'
import Link from "next/link"
import { Bell, Calendar, FileText, Home, LayoutDashboard, Leaf, MessageSquare, Settings, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function Component() {
    const router = useRouter()
    return (
        <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <aside className="hidden w-64 border-r border-green-200 bg-green-50 lg:block">
                <div className="flex h-full flex-col">
                    <div className="border-b border-green-200 p-6">
                        <Link className="flex items-center gap-2 font-semibold text-green-700" href="#">
                            <Leaf className="h-6 w-6 text-green-600" />
                            <span>EcoSort</span>
                        </Link>
                    </div>
                    <nav className="flex-1 p-4">
                        <div className="grid gap-2">
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-green-700 hover:bg-green-100 hover:text-green-800"
                                href="#"
                            >
                                <Home className="h-4 w-4" />
                                Dashboard
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-green-700 hover:bg-green-100 hover:text-green-800"
                                href="#"
                            >
                                <Calendar className="h-4 w-4" />
                                Schedule Pickup
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-green-700 hover:bg-green-100 hover:text-green-800"
                                href="#"
                            >
                                <MessageSquare className="h-4 w-4" />
                                Community Forum
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-green-700 hover:bg-green-100 hover:text-green-800"
                                href="#"
                            >
                                <FileText className="h-4 w-4" />
                                Waste Reports
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-green-700 hover:bg-green-100 hover:text-green-800"
                                href="#"
                            >
                                <Settings className="h-4 w-4" />
                                Settings
                            </Link>
                        </div>
                    </nav>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1">
                <header className="border-b border-green-200">
                    <div className="flex h-16 items-center gap-4 px-6">
                        <Link className="lg:hidden" href="#">
                            <Leaf className="h-6 w-6 text-green-600" />
                            <span className="sr-only">Home</span>
                        </Link>
                        <div className="ml-auto flex items-center gap-4">
                            <Button size="icon" variant="ghost" className="text-green-700 hover:bg-green-100 hover:text-green-800">
                                <Bell className="h-4 w-4" />
                                <span className="sr-only">Notifications</span>
                            </Button>
                        </div>
                    </div>
                </header>
                <div className="grid gap-6 p-6">
                    <div className="grid gap-2">
                        <h1 className="text-2xl font-bold tracking-tight text-green-800">Welcome back!</h1>
                        <p className="text-green-600">Here's an overview of your waste management activities</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-green-200 bg-green-50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Truck className="h-8 w-8 text-green-600" />
                                <div className="grid gap-1">
                                    <CardTitle className="text-green-800">Next Pickup</CardTitle>
                                    <CardDescription className="text-green-600">Schedule your waste collection</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-green-700">Tomorrow, 9 AM</p>
                                <Button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700" variant="default">
                                    View Schedule
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="border-green-200 bg-green-50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <LayoutDashboard className="h-8 w-8 text-green-600" />
                                <div className="grid gap-1">
                                    <CardTitle className="text-green-800">Waste Analytics</CardTitle>
                                    <CardDescription className="text-green-600">Track your recycling impact</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-green-700">75% Recycled</p>
                                <Button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700" variant="default">
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="border-green-200 bg-green-50">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Leaf className="h-8 w-8 text-green-600" />
                                <div className="grid gap-1">
                                    <CardTitle className="text-green-800">Green Points</CardTitle>
                                    <CardDescription className="text-green-600">Your sustainability rewards</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-green-700">1,250 pts</p>
                                <Button className="mt-4 w-full bg-green-600 text-white hover:bg-green-700" variant="default" onClick={()=>router.push('/redeem-rewards')}>
                                    Redeem Rewards
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="border-green-200">
                        <CardHeader>
                            <CardTitle className="text-green-800">Find Recycling Centers</CardTitle>
                            <CardDescription className="text-green-600">Locate the nearest recycling facility in your area</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-4">
                                <Input placeholder="Enter your zip code" className="border-green-200 focus:border-green-400 focus:ring-green-400" />
                                <Button className="bg-green-600 text-white hover:bg-green-700">Search</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-green-200">
                        <CardHeader>
                            <CardTitle className="text-green-800">Community Forum</CardTitle>
                            <CardDescription className="text-green-600">Connect with other eco-conscious individuals</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <h3 className="font-semibold text-green-800">Latest Discussions</h3>
                                    <div className="grid gap-2">
                                        <Link className="text-sm text-green-600 hover:text-green-800 hover:underline" href="#">
                                            Tips for reducing plastic waste
                                        </Link>
                                        <Link className="text-sm text-green-600 hover:text-green-800 hover:underline" href="#">
                                            Monthly community cleanup event
                                        </Link>
                                        <Link className="text-sm text-green-600 hover:text-green-800 hover:underline" href="#">
                                            Composting best practices
                                        </Link>
                                    </div>
                                </div>
                                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" onClick={()=>router.push('/forum')}>Visit Forum</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}