"use client"

interface Props {
    children: React.ReactNode;
}

export function LandingLayout({ children }: Props) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="border-x-1 min-h-screen md:min-w-[53rem] md:max-w-[53rem] border-dashed border-green-400/30 bg-green-600/2 flex flex-col">
        {children}
      </div>
    </div>
  )
}
