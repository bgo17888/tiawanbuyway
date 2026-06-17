import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { LineCTA } from "@/components/LineCTA";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "關於台灣百味",
  description: "認識台灣百味如何從產地出發，整理出值得信任的在地農產與地方品牌。",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow="ABOUT US" title="讓好的產地，被更多人好好看見" />
          <p className="text-xl leading-10 tracking-[-0.03em] text-[#49574d] sm:text-2xl">
            台灣百味是一座連接產地、品牌與餐桌的橋。我們相信，知道食物從哪裡來，會讓每一次消費都更有意義。
          </p>
        </div>
      </section>

      <section className="bg-[#eee9dd]">
        <div className="page-shell section-space grid gap-5 md:grid-cols-3">
          {[
            ["01", "走進產地", "了解耕作、飼養與生產過程，先建立理解，再推薦商品。"] ,
            ["02", "整理價值", "把品牌精神、特色與食材資訊說清楚，讓選購不只看價格。"] ,
            ["03", "連回生活", "讓好食材真正走進日常餐桌，也讓支持土地變得更容易。"] ,
          ].map(([number, title, text]) => (
            <article className="rounded-[1.7rem] bg-[#fffdf7] p-8" key={title}>
              <p className="text-xs text-[#ad9154]">{number}</p>
              <h2 className="mt-12 text-2xl font-medium text-[#2f4938]">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-[#716d63]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-space text-center">
        <p className="mx-auto max-w-3xl text-2xl leading-[1.8] font-medium tracking-[-0.04em] text-[#304337] sm:text-4xl">
          一份好食材的價值，
          <br />
          不只在入口的滋味，也在它如何被生產。
        </p>
        <Link className="button button-primary mt-9" href="/stories">
          閱讀品牌故事 <ArrowIcon className="size-5" />
        </Link>
      </section>

      <LineCTA />
    </>
  );
}
