import { siteConfig } from "@/config/site"
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
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
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
      </div>
    </>
  )
}
