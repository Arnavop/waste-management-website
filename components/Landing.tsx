'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Truck, BarChart, Leaf,  } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
    const [activeTab, setActiveTab] = useState("home")
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-black">
            <header className="p-4 bg-white shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Recycle className="h-8 w-8 text-green-600" />
                        <span className="text-2xl font-bold text-green-800">EcoSort</span>
                    </div>
                    <div className="space-x-4">
                        <Button variant="ghost">About</Button>
                        <Button variant="ghost">Services</Button>
                        <Button variant="ghost">Contact</Button>
                        <Button onClick={()=>router.push('/auth')}>Get Started</Button>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto mt-8 p-4">
                <section className="text-center mb-12 ">
                    <h1 className="text-5xl font-bold mb-4">Revolutionizing Waste Management</h1>
                    <p className="text-xl text-gray-600 mb-8">Smart solutions for a cleaner, greener future</p>
                    <div className="flex justify-center space-x-4">
                        <Button size="lg" className="bg-green-600 hover:bg-green-700">
                            Schedule Pickup
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </section>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="services">Services</TabsTrigger>
                        <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
                    </TabsList>
                    <TabsContent value="home" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Truck className="h-12 w-12 text-green-600" />}
                                title="Smart Collection"
                                description="AI-powered route optimization for efficient waste collection"
                            />
                            <FeatureCard
                                icon={<BarChart className="h-12 w-12 text-green-600" />}
                                title="Waste Analytics"
                                description="Real-time data on waste generation and recycling rates"
                            />
                            <FeatureCard
                                icon={<Leaf className="h-12 w-12 text-green-600" />}
                                title="Green Rewards"
                                description="Earn points for responsible waste disposal and recycling"
                            />
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Find Your Nearest Recycling Center</h2>
                            <div className="flex space-x-4">
                                <Input placeholder="Enter your zip code" className="flex-grow" />
                                <Button>Search</Button>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="services" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ServiceCard
                                title="Residential Waste Management"
                                description="Tailored solutions for homes and apartments"
                                features={["Weekly pickups", "Recycling bins provided", "Hazardous waste disposal"]}
                            />
                            <ServiceCard
                                title="Commercial Waste Solutions"
                                description="Comprehensive waste management for businesses"
                                features={["Custom collection schedules", "Waste audits", "Compliance assistance"]}
                            />
                            <ServiceCard
                                title="Event Waste Management"
                                description="Keep your events clean and green"
                                features={["Temporary bin rentals", "On-site sorting stations", "Post-event cleanup"]}
                            />
                            <ServiceCard
                                title="E-Waste Recycling"
                                description="Responsible disposal of electronic waste"
                                features={["Secure data destruction", "Precious metal recovery", "Environmental compliance"]}
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="impact" className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Your Environmental Impact</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ImpactCard
                                    title="Waste Diverted"
                                    value="1,234 tons"
                                    description="Amount of waste diverted from landfills"
                                />
                                <ImpactCard
                                    title="CO2 Reduced"
                                    value="567 tons"
                                    description="Equivalent CO2 emissions reduced"
                                />
                                <ImpactCard
                                    title="Trees Saved"
                                    value="8,901"
                                    description="Number of trees saved through recycling efforts"
                                />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Waste Reduction Tips</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Use reusable bags and containers</li>
                                <li>Compost organic waste</li>
                                <li>Choose products with minimal packaging</li>
                                <li>Repair and repurpose items before discarding</li>
                                <li>Donate usable items instead of throwing them away</li>
                            </ul>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            <footer className="bg-green-800 text-white mt-12 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p>123 Green Street, Eco City, EC 12345</p>
                            <p>Phone: (555) 123-4567</p>
                            <p>Email: info@ecosort.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About Us</a></li>
                                <li><a href="#" className="hover:underline">Services</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-green-300">Facebook</a>
                                <a href="#" className="hover:text-green-300">Twitter</a>
                                <a href="#" className="hover:text-green-300">Instagram</a>
                                <a href="#" className="hover:text-green-300">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2023 EcoSort. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
//@ts-ignore
function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
//@ts-ignore
function ServiceCard({ title, description, features }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2">
                
                {features.map((feature:any, index:any) => (
                    <li key={index} className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                            <Leaf className="h-4 w-4" />
                        </Badge>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}
//@ts-ignore
function ImpactCard({ title, value, description }) {
    return (
        <div className="bg-green-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">{value}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}