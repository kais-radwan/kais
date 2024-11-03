import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"
import { LandingLayout } from "@/components/landing/layout"
import { GreenLink } from "@/components/landing/link"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <>
      <LandingLayout>
        <div className="flex items-center gap-3 border-b-1 border-dashed border-green-400/30 p-4 text-xs">
          <GreenLink label="kais radwan" href="/" className="bg-transparent text-white" />
          <GreenLink
            label="blog"
            href="/blog"
          />
          <GreenLink
            label="contact"
            href="mailto:kais.radwan.personal@gmail.com"
            className="bg-transparent text-white"
          />
        </div>
        <div className="p-4">
        {posts?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {posts.map((post, index) => (
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
      </LandingLayout>
    </>
  )
}
