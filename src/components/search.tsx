import { Input } from "@/components/ui/input";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SearchBlock() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div>
      <span className="relative">
        <Input className="min-w-16 md:w-46 lg:w-96" placeholder="ابحث" onClick={()=> setOpen((open) => !open)} />
        <Search className="absolute top-3 left-3"  size={16} />
      </span>
      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="ابحث" className="ps-8" />
        <CommandList>
          <CommandEmpty>لا توجد نتاج</CommandEmpty>
          <CommandGroup heading="اقترحات">
            <CommandItem>وثقني</CommandItem>
            <CommandItem>اذكار</CommandItem>
            <CommandItem>قعادة البيانت القرانية</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
