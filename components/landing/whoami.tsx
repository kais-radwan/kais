import { Command } from "./command"
import { GreenLink } from "./link"

interface LineProps {
  label: string
  value: string | React.ReactNode
}

export const Line = ({ label, value }: LineProps) => {
  return (
    <div className="flex w-full gap-1 text-xs text-green-400">
      <div className="min-w-max opacity-60">{label}:</div>
      <div className="">{value}</div>
    </div>
  )
}

export function Whoami() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Command content="whoami" />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="relative">
          <div className="absolute top-0 left-0 flex h-full w-56  items-center justify-center bg-grid-small-black z-10" />
          <img
            src="/images/avatars/kais.png"
            className="w-56 opacity-40"
          />
          <div className="absolute left-0 top-0 h-full w-56 bg-green-500/20"></div>
        </div>
        <div className="flex flex-col gap-2.5 pt-5">
          <Line label="name" value="kais radwan" />
          <Line label="age" value="19" />
          <Line
            label="experience"
            value="~5 years - frontend, backend, ui/ux, ai"
          />
          <Line
            label="about"
            value="software engineer building ai and web projects"
          />
          <Line
            label="links"
            value={
              <div className="flex items-center gap-2">
                <GreenLink
                  href="https://x.com/kais_rad"
                  label="TWITTER/X"
                  target="_blank"
                />
                <GreenLink
                  href="https://github.com/kais-radwan"
                  label="GITHUB"
                  target="_blank"
                />
              </div>
            }
          />
          <div className="my-2 w-[80%] border-t-1 border-green-400/20"></div>
          <Line
            label="frontend"
            value="html5, css, js/ts, react, next.js, tailwindcss"
          />
          <Line
            label="backend"
            value="node, go, python, typescript, C (entry)"
          />
          {/* <div className="text-xs text-green-400/40">{`"i solve problems the same way eminem kills beats"`}</div> */}
        </div>
      </div>
    </div>
  )
}
