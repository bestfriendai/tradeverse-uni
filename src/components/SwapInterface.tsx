import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowDown } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SwapInterfaceProps {
  amount: string
  setAmount: (value: string) => void
}

export const SwapInterface = ({ amount, setAmount }: SwapInterfaceProps) => (
  <div className="space-y-6">
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
  </div>
)