import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

export function LineCTA() {
  return (
    <section className="page-shell section-space">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#dfe5d5] px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
        <div className="absolute -top-20 -right-12 size-64 rounded-full border border-[#2f4938]/12" />
        <div className="absolute -right-2 -bottom-28 size-80 rounded-full border border-[#2f4938]/10" />
        <div className="relative grid items-center gap-9 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">LINE MEMBERS</p>
            <h2 className="mt-4 text-3xl leading-tight font-medium tracking-[-0.04em] text-[#26382d] sm:text-4xl">
              把產地消息，送進你的日常。
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#626b5d] sm:text-base">
              加入 LINE 會員，收到產季預告、限量選品與農人故事，也可以直接詢問商品與團購需求。
            </p>
          </div>
          <Link className="button button-primary min-w-44 justify-center" href="/line">
            加入 LINE 會員 <ArrowIcon className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
