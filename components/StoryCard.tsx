import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

const tones = {
  green: "from-[#dbe1d2] to-[#eef0e4]",
  gold: "from-[#ead8a9] to-[#f4ead1]",
  brown: "from-[#d9c7b2] to-[#eee4d7]",
};

type Story = {
  slug: string;
  location: string;
  title: string;
  excerpt: string;
  tone: keyof typeof tones;
};

export function StoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <article className={`relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${tones[story.tone]} p-7 sm:p-8`}>
      <div className="absolute -right-10 -bottom-14 size-48 rounded-full border border-[#26382d]/10" />
      <div className="absolute right-8 bottom-8 size-24 rounded-full border border-[#26382d]/10" />
      <p className="text-[11px] tracking-[0.18em] text-[#615c4e]">0{index + 1} — {story.location}</p>
      <h3 className="mt-16 max-w-xs text-2xl leading-snug font-medium tracking-[-0.04em] text-[#26382d]">{story.title}</h3>
      <p className="mt-4 max-w-sm text-sm leading-7 text-[#625f56]">{story.excerpt}</p>
      <Link className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2f4938]" href={`/stories#${story.slug}`}>
        閱讀故事 <ArrowIcon className="size-5" />
      </Link>
    </article>
  );
}
