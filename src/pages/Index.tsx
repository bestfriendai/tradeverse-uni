'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowDown, Settings } from 'lucide-react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"

export default function Index() {
  const [amount, setAmount] = React.useState("0")
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []
    
    const colors = ['#00FFFF', '#1E90FF', '#32CD32', '#FFD700'].map(color => color + '40')
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 15 + 5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, #13151C, #000000)' }}
      />

      <Navbar 
        className="bg-transparent backdrop-blur-sm border-b border-white/10" 
        maxWidth="full"
        position="sticky"
      >
        <NavbarBrand>
          <p className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">UniFree</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white/90 hover:text-white" href="#">Swap</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white/90 hover:text-white" href="#">Bridge</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white/90 hover:text-white" href="#">Pool</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button variant="ghost" size="icon" className="text-white/90 hover:text-white">
              <Settings className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
              Connect Wallet
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Trade on Unichain
          </h2>
          <p className="text-gray-400 text-lg">
            The exclusive platform for Unichain trading pre-launch
          </p>
        </div>

        <Card className="w-full max-w-md mx-auto bg-[#13151C]/90 backdrop-blur-xl border-[#2A2B2E]">
          <CardContent className="p-6">
            <Tabs defaultValue="swap" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="swap">Swap</TabsTrigger>
                <TabsTrigger value="bridge">Bridge</TabsTrigger>
                <TabsTrigger value="create">Create</TabsTrigger>
              </TabsList>

              <TabsContent value="swap" className="space-y-6">
                <div className="p-4 rounded-xl bg-black/40 space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>You pay</span>
                    <span>Balance: 1.45 ETH</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-0 bg-transparent text-2xl focus-visible:ring-1 focus-visible:ring-cyan-400/50"
                      placeholder="0"
                    />
                    <Select defaultValue="eth">
                      <SelectTrigger className="w-[120px] bg-black/40 border-0 focus:ring-1 focus:ring-cyan-400/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#13151C] border-[#2A2B2E]">
                        <SelectItem value="eth">ETH</SelectItem>
                        <SelectItem value="btc">BTC</SelectItem>
                        <SelectItem value="usdt">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center -my-2">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="rounded-full bg-[#13151C] border border-[#2A2B2E] hover:bg-[#2A2B2E] hover:text-cyan-400"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 rounded-xl bg-black/40 space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>You receive</span>
                    <span>Balance: 5000 Unidoge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={amount ? String(Number(amount) * 124950) : "0"}
                      readOnly
                      className="border-0 bg-transparent text-2xl focus-visible:ring-1 focus-visible:ring-cyan-400/50"
                      placeholder="0"
                    />
                    <Select defaultValue="unidoge">
                      <SelectTrigger className="w-[120px] bg-black/40 border-0 focus:ring-1 focus:ring-cyan-400/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#13151C] border-[#2A2B2E]">
                        <SelectItem value="unidoge">Unidoge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                  disabled={!amount || Number(amount) <= 0}
                >
                  {!amount || Number(amount) <= 0 ? "Enter an amount" : "Swap"}
                </Button>
              </TabsContent>

              <TabsContent value="bridge" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <div className="text-lg font-semibold">Bridge to L2</div>
                    <div className="text-sm text-gray-400">Move assets to Layer 2</div>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <div className="text-lg font-semibold">Bridge to L1</div>
                    <div className="text-sm text-gray-400">Move assets to Layer 1</div>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="create" className="space-y-4">
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">Create New Pool</h3>
                  <p className="text-gray-400">Create a new liquidity pool and earn fees</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}