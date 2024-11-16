import { Button } from "@/components/ui/button"
import { Settings } from 'lucide-react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"

export const NavBar = () => (
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
)