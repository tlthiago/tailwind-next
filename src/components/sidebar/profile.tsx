import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://github.com/tlthiago.png" className="w-10 h-10 rounded-full" alt="" />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Thiago Alves</span>
        <span className="truncate text-sm text-zinc-500">thiagoalves@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-200 rounded-md">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}