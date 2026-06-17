import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/data/site";

export const metadata = {
  title: "品牌故事",
  description: "閱讀台灣百味走進產地後整理出的地方品牌與在地故事。",
};

export default function StoriesPage() {
  return (
    <section className="page-shell section-space">
      <SectionHeading
        eyebrow="LOCAL STORIES"
        title="每一份選品之前，都有一段值得被理解的故事"
        description="我們不只挑商品，也記錄它背後的人、土地與生產過程。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {stories.map((story, index) => (
          <StoryCard index={index} key={story.slug} story={story} />
        ))}
      </div>
      <div className="mt-20 space-y-20">
        {stories.map((story, index) => (
          <article className="grid scroll-mt-28 gap-8 border-t border-[#26382d]/12 pt-10 lg:grid-cols-[0.35fr_1fr]" id={story.slug} key={story.slug}>
            <div>
              <p className="eyebrow">STORY 0{index + 1}</p>
              <p className="mt-4 text-sm text-[#8b8069]">{story.location}</p>
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#2f4938]">{story.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-9 text-[#706c62]">{story.excerpt}</p>
              <p className="mt-5 max-w-2xl text-base leading-9 text-[#706c62]">
                從採訪與走訪之中，我們更確定一件事：真正值得推薦的產品，不會只有漂亮包裝，而是有一套能被說明、被理解的價值邏輯。
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
