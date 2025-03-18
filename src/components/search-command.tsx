"use client"

import { useState, useEffect } from "react"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "../components/ui/command"
import { Dialog, DialogContent } from "../components/ui/dialog"
import { Home, FileText, BookOpen, MessageSquare, LinkIcon, User, Keyboard } from "lucide-react"

export default function SearchCommand() {
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

  const navigation = [
    {
      title: "Home",
      icon: <Home className="mr-2 h-4 w-4" />,
      href: "#",
      description: "Welcome to my forever work-in-progress!",
    },
    {
      title: "Projects",
      icon: <FileText className="mr-2 h-4 w-4" />,
      href: "#",
      description: "Showcase of my projects",
    },
    {
      title: "Blog",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
      href: "#",
      description: "Thoughts, mental models, and tutorials",
    },
    {
      title: "Guestbook",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
      href: "#",
      description: "Leave a message for me",
    },
    {
      title: "Links",
      icon: <LinkIcon className="mr-2 h-4 w-4" />,
      href: "#",
      description: "All my links are here",
    },
    {
      title: "About",
      icon: <User className="mr-2 h-4 w-4" />,
      href: "#",
      description: "Learn more about me",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 bg-[#F0F4F8] border-[#A5C8D6] max-w-2xl">
        <Command className="rounded-lg border-none bg-transparent">
          <CommandInput placeholder="Search..." className="h-12" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              {navigation.map((item) => (
                <CommandItem
                  key={item.title}
                  onSelect={() => {
                    window.location.href = item.href
                    setOpen(false)
                  }}
                  className="flex items-center py-3 px-4 cursor-pointer hover:bg-[#A5C8D6]/20"
                >
                  {item.icon}
                  <div>
                    <div className="font-medium text-[#1B2631]">{item.title}</div>
                    <div className="text-sm text-[#3F4E4F]">{item.description}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="flex items-center justify-end p-2 text-xs text-[#3F4E4F] border-t border-[#D9E4E0]">
            <div className="flex items-center mr-2">
              <Keyboard className="h-3 w-3 mr-1" />
              <span>to navigate</span>
            </div>
            <div className="flex items-center">
              <span className="bg-[#D9E4E0] text-[#1B2631] px-1.5 py-0.5 rounded text-xs mr-1">⌘</span>
              <span>to open</span>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

