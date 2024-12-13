import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

interface Props {
  name: string
  description: string
  state: "ONLINE" | "DEV" | "ABANDONED"
  href?: string
  date?: string
}

function State({ state }: { state: Props["state"] }) {
  return <div></div>
}

export function Project({ name, state, href, description, date }: Props) {
  if (state !== "ONLINE") {
    return (
      <Link
        href={`${href}`}
        target="_blank"
        className="group flex w-full cursor-pointer flex-col gap-2 border-l-2 border-green-400/30 p-0.5 pl-3 text-green-400 opacity-70 hover:bg-green-600/5 hover:opacity-100"
      >
        <div className="flex items-center gap-2 text-sm">
          <div className="group-hover:underline">{name}</div>
          <div className="bg-orange-400 px-2 text-xs font-semibold text-black">
            UNDER DEV
          </div>
          <IconArrowUpRight size={12} className="hidden group-hover:block" />
        </div>
        <div className="text-xs">{description}</div>
        {date && <div className="text-[10px] opacity-60">{date}</div>}
      </Link>
    )
  }

  return (
    <Link
      href={`${href}`}
      target="_blank"
      className="group flex w-full cursor-pointer flex-col gap-2 border-l-2 border-green-400/30 p-0.5 pl-3 text-green-400 opacity-70 hover:bg-green-600/5 hover:opacity-100"
    >
      <div className="flex items-center gap-2 text-sm">
        <div className="group-hover:underline">{name}</div>
        <div className="bg-green-400 px-2 text-xs font-semibold text-black">
          ONLINE
        </div>
        <IconArrowUpRight size={12} className="hidden group-hover:block" />
      </div>
      <div className="text-xs">{description}</div>
      {date && <div className="text-[10px] opacity-60">{date}</div>}
    </Link>
  )
}
