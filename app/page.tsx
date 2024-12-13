import { ImageProject } from "@/components/landing/img"
import { LandingLayout } from "@/components/landing/layout"
import { GreenLink } from "@/components/landing/link"
import { Project } from "@/components/landing/project"
import { Whoami } from "@/components/landing/whoami"
import AudioPlayer from "@/components/player"
import { formatDate } from "@/lib/utils"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import Image from "next/image"
import Link from "next/link"

export default async function IndexPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <AudioPlayer src="/soundtrack.mp3" />
      <LandingLayout>
        <div className="flex items-center gap-3 border-b-1 border-dashed border-green-400/30 p-4 text-xs">
          <GreenLink label="kais radwan" href="/" />
          <GreenLink
            label="blog"
            href="/"
            className="bg-transparent text-white"
          />
          <GreenLink
            label="contact"
            href="/contact"
            className="bg-transparent text-white"
          />
        </div>
        <Whoami />
        <div className="px-4 text-xs">
          <GreenLink
            label="let's work together"
            href="https://cal.com/kais-radwan/20min"
            target="_blank"
            className="py-1.5"
          />
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 h-10 md:h-14 w-full bg-background"></div>
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=kais-radwan&bg_color=transparent&color=4ade80&line=4ade80&point=22c55e&area=true&hide_border=true"
            className="mt-4 w-full"
          />
        </div>
        <div className="mt-5 flex flex-col gap-4 border-green-400/10 p-4">
          <div className="flex flex-col gap-3">
            <Project
              name="Scoopika"
              href="https://github.com/kais-radwan/kedis"
              state="ONLINE"
              description="Dev platform to build multimodal LLM-powered apps"
              date="launched Jul 2024 - [open_source]"
            />
            <Project
              name="Coslynx"
              href="https://coslynx.com"
              state="ONLINE"
              description="Generate MVPs using AI"
              date="launched Aug 2024"
            />
            <Project
              name="Koxy v1"
              href="https://koxy-ai.web.app"
              state="ONLINE"
              description="Serverless no-code AI-powered tool"
              date="launched Aug 2023"
            />
            <Project
              name="Kedis"
              href="https://koxy-ai.web.app"
              state="ONLINE"
              description="Custom Redis clone with collections, data validation, and RAG"
              date="launched Sep 2024 - [open_source]"
            />
            <Project
              name="Koxy v2"
              state="DEV"
              description="Low-code AI-powered builder for backend tasks and ai automations"
              date="Started Oct 2024"
              href="https://koxy.cloud"
            />
            <div className="my-4 flex items-center gap-2 text-xs text-green-400/60">
              <div className="w-[50%] border-t-1 border-green-400/20"></div>
              10+ clients projects & designs
            </div>
            <div className="flex grid w-full grid-cols-1 md:grid-cols-2 gap-2">
              <ImageProject path="/images/designs/koxy-v2.png" />
              <ImageProject path="/images/designs/coslynx.png" />
              <ImageProject path="/images/designs/waitlast.gif" />
              <ImageProject path="/images/designs/serinus.png" />
              <ImageProject path="/images/designs/scoopika.gif" />
              <ImageProject path="/images/designs/getaresume.png" />
              <ImageProject path="/images/designs/bento1.png" />
              <ImageProject path="/images/designs/leadsfinder.jpeg" />
              <ImageProject path="/images/designs/scoopika-pricing.gif" />
              <ImageProject path="/images/designs/scoopika-in.png" />
            </div>
            <div className="my-4 flex items-center gap-2 text-xs text-green-400/60">
              <div className="w-[50%] border-t-1 border-green-400/20"></div>i
              write sometimes
            </div>
            {posts?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {posts.slice(0, 4).map((post, index) => (
                  <article
                    key={post._id}
                    className="group relative flex flex-col space-y-2 border border-dashed border-green-400/30 p-2"
                  >
                    {post.image && (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={804}
                        height={452}
                        className="mb-2 bg-muted transition-colors"
                        priority={index <= 1}
                      />
                    )}
                    <h2 className="text-sm">{post.title}</h2>
                    {post.description && (
                      <p className="text-xs text-muted-foreground">
                        {post.description}
                      </p>
                    )}
                    {post.date && (
                      <p className="text-[10px] text-muted-foreground opacity-70">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <Link href={post.slug} className="absolute inset-0">
                      <span className="sr-only">View Article</span>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <p>No posts published.</p>
            )}
          </div>
        </div>
        {/* <div className="mt-3 flex flex-col gap-4 border-green-400/10 p-4">
          <Command content="skills --frontend" />
          <div className="text-xs text-green-400">
            html5, css, javascript, typescript, react, next.js, tailwindcss,
            redux, framer-motion
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-4 border-b-1 border-dashed border-green-400/10 p-4">
          <Command content="skills --backend" />
          <div className="text-xs text-green-400">
            node, deno, go, python, typescript, rust (learning)
          </div>
        </div> */}
      </LandingLayout>

      {/* <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Blog
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Articles, news, and tutorials from Scoopika and community.
          </p>
          <div className="space-x-4">
            <Link
              href={siteConfig.links.twitter}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on Twitter/X
            </Link>
          </div>
        </div>
      </section>
      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Latest posts
            </h1>
            <p className="text-xl text-muted-foreground">
              The latest published blog posts
            </p>
          </div>
        </div>
        <hr className="my-8" />
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.slice(0, 4).map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
        <div className="h-20"></div>
        <Link
          href="/blog"
          className="rounded-md bg-muted px-4 py-1.5 text-sm font-medium"
        >
          See all posts
        </Link>
      </div> */}
    </>
  )
}
