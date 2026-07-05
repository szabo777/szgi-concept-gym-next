"use client";

import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { newsPosts, type NewsPost } from "@/data/news";

export default function NewsSection() {
  const [activePost, setActivePost] = useState<NewsPost | null>(null);

  return (
    <section className="pageSectionDark newsPage">
      <span className="eyebrow">HÍREINK</span>
      <h1>Új gépek, friss órarend, erősebb közösség.</h1>

      <div className="newsGrid">
        {newsPosts.map((post) => (
          <article key={post.title} className="newsPostCard">
            <div className="newsImageWrap">
              <Image
                src={post.image}
                alt={post.title}
                width={640}
                height={380}
              />
              <span>{post.category}</span>
            </div>

            <div className="newsPostContent">
              <small>{post.date}</small>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>

              <button onClick={() => setActivePost(post)} type="button">
                Elolvasom <ArrowRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {activePost && (
        <div className="modalBackdrop">
          <article className="newsModal modalWide">
            <button
              type="button"
              className="modalClose"
              onClick={() => setActivePost(null)}
              aria-label="Bezárás"
            >
              <X size={22} />
            </button>

            <Image
              src={activePost.image}
              alt={activePost.title}
              width={900}
              height={420}
            />

            <div className="newsModalBody">
              <span className="eyebrow">{activePost.category}</span>
              <small>{activePost.date}</small>
              <h2>{activePost.title}</h2>

              {activePost.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}