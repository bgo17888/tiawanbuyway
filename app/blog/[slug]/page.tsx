import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="page-shell section-space">
      <div className="mx-auto max-w-3xl">
        <Link className="inline-flex items-center gap-2 text-sm text-[#6f766e]" href="/blog">
          <ArrowIcon className="size-5 rotate-180" /> 返回文章列表
        </Link>
        <div className="mt-10 border-b border-[#26382d]/10 pb-10">
          <p className="eyebrow">{article.category}</p>
          <h1 className="mt-5 text-4xl leading-tight font-medium tracking-[-0.05em] text-[#26382d] sm:text-5xl">{article.title}</h1>
          <div className="mt-7 flex gap-5 text-xs text-[#918b7f]">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="space-y-7 pt-10 text-base leading-9 text-[#68675f]">
          <p className="text-xl leading-10 text-[#46554a]">{article.excerpt}</p>
          <h2 className="pt-5 text-2xl font-medium text-[#304337]">先理解，再選擇</h2>
          <p>
            台灣百味想處理的，不只是販售，而是資訊不對稱。當我們更清楚食物從哪裡來、如何被生產、適合怎麼吃，消費就不再只是交易，而是一種判斷。
          </p>
          <p>
            文章內容會從最實際的角度出發，整理大家在挑選蛋品、米糧與節慶食材時最常遇到的問題，讓每一次購買都更貼近真實需求。
          </p>
          <blockquote className="my-10 border-l-2 border-[#c19d4e] bg-[#eee9dd] px-7 py-6 text-lg leading-9 text-[#4d5a50]">
            知道食物從哪裡來，是一種照顧自己，也是一種支持土地的方式。
          </blockquote>
          <h2 className="pt-5 text-2xl font-medium text-[#304337]">把知識放回餐桌</h2>
          <p>
            真正有用的食材知識，不是艱深術語，而是幫助你今天晚上做出更好的那一頓飯。從產地到餐桌，理解永遠是最好的開始。
          </p>
        </div>
      </div>
    </article>
  );
}
