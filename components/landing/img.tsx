"use client"

import { IconMaximize } from "@tabler/icons-react"
import { useState } from "react"

interface Props {
  path: string
}

export function ImageProject({ path }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="group relative border border-dashed border-green-400/30 p-2 flex items-center justify-center">
        <img src={path} className="object-cover" />
        <div
          className="absolute right-0 top-0 flex hidden items-center justify-center border-4 border-background bg-green-400 p-1 text-black group-hover:flex cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <IconMaximize size={14} />
        </div>
      </div>
      {open && (
        <div
          className="fixed left-0 top-0 flex flex h-full w-full items-center justify-center bg-background/70 backdrop-blur z-50"
          onClick={() => setOpen(false)}
        >
          <img src={path} className="w-[70%] border border-green-400" />
        </div>
      )}
    </>
  )
}
