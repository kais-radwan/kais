import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

interface Props {
  label: React.ReactNode
  href: string
  target?: string
  className?: string
}

export function GreenLink({ label, href, target, className }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={`relative flex items-center justify-center gap-1 bg-green-400 px-2 font-semibold text-black hover:underline ${className}`}
    >
      <div className="absolute -bottom-1 -right-1 h-5 w-2 rotate-[20deg] bg-background"></div>
      {label}
      {target === "_blank" && <IconArrowUpRight size={12} />}
    </Link>
  )
}
