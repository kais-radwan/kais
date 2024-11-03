import { IconArrowRight, IconBrandGit, IconGitFork } from "@tabler/icons-react"

interface Props {
  content: string
}

export function Command({ content }: Props) {
  return (
    <div className="flex items-center gap-2 text-xs text-green-400/70">
      <b className="text-white/70 flex items-center">
        $ kais_brain
      </b>
      <div className="">
        {"[remote]"}
      </div>
      <div>
        <IconArrowRight size={12} />
      </div>
      {/* <div>$</div> */}
      <div className="text-white/70">{content}</div>
    </div>
  )
}
