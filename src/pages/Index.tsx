'use client'

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { NavBar } from "@/components/NavBar"
import { SwapInterface } from "@/components/SwapInterface"
import { ParticleBackground } from "@/components/ParticleBackground"
import { Button } from "@/components/ui/button"

export default function Index() {
  const [amount, setAmount] = React.useState("0")

  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />

      <NavBar />

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
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-black/40">
                <TabsTrigger 
                  value="swap"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70"
                >
                  Swap
                </TabsTrigger>
                <TabsTrigger 
                  value="bridge"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70"
                >
                  Bridge
                </TabsTrigger>
                <TabsTrigger 
                  value="create"
                  className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70"
                >
                  Create
                </TabsTrigger>
              </TabsList>

              <TabsContent value="swap">
                <SwapInterface amount={amount} setAmount={setAmount} />
              </TabsContent>

              <TabsContent value="bridge" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2 border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/50">
                    <div className="text-lg font-semibold">Bridge to L2</div>
                    <div className="text-sm text-gray-400">Move assets to Layer 2</div>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2 border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/50">
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