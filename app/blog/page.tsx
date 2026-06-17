import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/site";

export const metadata = {
  title: "百味誌",
  description: "閱讀食材知識、產地筆記與台灣百味的內容文章。",
};

export default function BlogPage() {
  return (
    <section className="page-shell section-space">
      <SectionHeading
        eyebrow="JOURNAL"
        title="百味誌"
        description="從食材、產地到生活方式，讓知識也成為支持在地的一部分。"
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {articles.map((article, index) => (
          <article className="group flex min-h-96 flex-col rounded-[1.7rem] border border-[#26382d]/10 bg-[#fffdf7] p-7" key={article.slug}>
            <div className="flex items-center justify-between text-[11px] tracking-[0.12em] text-[#99875f]">
              <span>{article.category}</span>
              <span>0{index + 1}</span>
            </div>
            <h2 className="mt-16 text-2xl leading-snug font-medium tracking-[-0.04em] text-[#304337]">{article.title}</h2>
            <p className="mt-5 text-sm leading-7 text-[#716d63]">{article.excerpt}</p>
            <Link className="mt-auto flex items-center justify-between border-t border-[#26382d]/10 pt-5 text-sm font-medium text-[#2f4938]" href={`/blog/${article.slug}`}>
              閱讀文章 <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
