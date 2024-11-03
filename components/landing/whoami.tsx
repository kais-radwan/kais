import { Command } from "./command"
import { GreenLink } from "./link"

interface LineProps {
  label: string
  value: string | React.ReactNode
}

const Line = ({ label, value }: LineProps) => {
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
      <div className="flex gap-5">
        <div className="relative ">
          <img
            src="/me-transparent.jpeg"
            className="w-56 border-dashed border-green-400/50"
          />
          <img
            src="/me-transparent.jpeg"
            className="absolute top-0 w-56 border-dashed border-green-400/50"
          />
        </div>
        <div className="flex flex-col gap-2.5 pt-5">
          <Line label="name" value="kais radwan" />
          <Line label="age" value="19" />
          <Line
            label="experience"
            value="~5 years - frontend, backend, ui/ux, ai, databases"
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
            value="node, deno, go, python, typescript, rust (learning)"
          />
          {/* <div className="text-xs text-green-400/40">{`"i solve problems the same way eminem kills beats"`}</div> */}
        </div>
      </div>
    </div>
  )
}
