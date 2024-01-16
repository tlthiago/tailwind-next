import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users } from "lucide-react";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";
import { UsedSpaceWidget } from "./usedSpaceWidget";
import { Profile } from "./profile";
import { InputRoot, InputControl, InputPrefix } from "../input";

export function Sidebar() {
  return (
    <aside className='border-r border-zinc-200 px-5 py-8 flex flex-col gap-6'>
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>
      <nav className="space-y-0.5">
        <NavItem title='Home' icon={Home} />
        <NavItem title='Dashboard' icon={BarChart} />
        <NavItem title='Projects' icon={SquareStack} />
        <NavItem title='Tasks' icon={CheckSquare} />
        <NavItem title='Reporting' icon={Flag} />
        <NavItem title='Users' icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title='Support' icon={LifeBuoy} />
          <NavItem title='Setting' icon={Cog} />
        </nav>
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}