import Link from "next/link"
import { ArrowLeft, Leaf, Gift, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function RedeemRewards() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-green-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center gap-2 font-semibold text-green-700" href="/dashboard">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>EcoSort</span>
          </Link>
          <nav>
            <Link className="text-green-600 hover:text-green-800" href="/dashboard">
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-green-800">Redeem Your Green Rewards</h1>
        <div className="mb-8 rounded-lg bg-green-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-green-800">Your Green Points</h2>
              <p className="text-3xl font-bold text-green-600">1,250 pts</p>
            </div>
            <Award className="h-12 w-12 text-green-600" />
          </div>
          <Progress className="mt-4" value={62.5} />
          <p>You&apos;re 750 points away from reaching the next tier!</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Eco-Friendly Water Bottle</CardTitle>
              <CardDescription className="text-green-600">Reduce plastic waste with this reusable bottle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Gift className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">500 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Composting Starter Kit</CardTitle>
              <CardDescription className="text-green-600">Start your home composting journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Gift className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">750 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Tree Planting Donation</CardTitle>
              <CardDescription className="text-green-600">Contribute to local reforestation efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Gift className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">1000 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Recycled Tote Bag</CardTitle>
              <CardDescription className="text-green-600">Stylish bag made from recycled materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Gift className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">300 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Energy-Efficient LED Bulbs</CardTitle>
              <CardDescription className="text-green-600">Pack of eco-friendly light bulbs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Gift className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">400 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Free Waste Pickup</CardTitle>
              <CardDescription className="text-green-600">One-time free waste collection service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Truck className="h-24 w-24 text-green-600" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-semibold text-green-700">600 pts</span>
              <Button className="bg-green-600 text-white hover:bg-green-700">Redeem</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}