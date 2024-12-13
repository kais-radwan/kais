import { LandingLayout } from "@/components/landing/layout"
import { GreenLink } from "@/components/landing/link"
import { Line } from "@/components/landing/whoami"

export default function Page() {
  return (
    <>
      <LandingLayout>
        <div className="flex items-center gap-3 border-b-1 border-dashed border-green-400/30 p-4 text-xs">
          <GreenLink
            label="kais radwan"
            className="bg-transparent text-white"
            href="/"
          />
          <GreenLink
            label="blog"
            href="/"
            className="bg-transparent text-white"
          />
          <GreenLink label="contact" href="/contact" />
        </div>
        <div className="flex flex-col gap-3 p-4">
          <Line
            label="email"
            value={
              <GreenLink
                href="mailto:kais.radwan.personal@gmail.com"
                label="kais.radwan.personal@gmail.com"
                target="_blank"
              />
            }
          />
          <Line
            label="twitter/x"
            value={
              <GreenLink
                href="https://x.com/kais_rad"
                label="DM ME"
                target="_blank"
              />
            }
          />
          <Line
            label="github"
            value={
              <GreenLink
                href="https://github.com/kais-radwan"
                label="CHECK MY PROJECTS"
                target="_blank"
              />
            }
          />
          <Line
            label="let's talk"
            value={
              <GreenLink
                href="https://cal.com/kais-radwan/20min"
                label="BOOK A CALL"
                target="_blank"
              />
            }
          />
        </div>
      </LandingLayout>
    </>
  )
}
