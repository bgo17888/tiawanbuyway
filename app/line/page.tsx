import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata = {
  title: "LINE 會員",
  description: "加入台灣百味 LINE 官方帳號，接收產季消息與商品資訊。",
};

export default function LinePage() {
  return (
    <section className="page-shell section-space">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#dfe5d5] px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="absolute -top-24 -left-24 size-72 rounded-full border border-[#2f4938]/10" />
        <div className="absolute -right-24 -bottom-24 size-80 rounded-full border border-[#2f4938]/10" />
        <div className="relative mx-auto max-w-2xl">
          <span className="mx-auto grid size-20 place-items-center rounded-[1.5rem] bg-[#2f4938] text-xl font-semibold text-[#f0d895]">LINE</span>
          <p className="eyebrow mt-8">TAIWAN BUY WAY MEMBERS</p>
          <h1 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[#26382d] sm:text-6xl">把產地消息留在身邊</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#626b5d]">
            加入 LINE 官方帳號，第一時間收到產季預告、限量選品與團購資訊，也能直接詢問商品細節。
          </p>
          <a className="button button-primary mt-9" href="https://line.me/" rel="noreferrer" target="_blank">
            前往加入 LINE <ArrowIcon className="size-5" />
          </a>
          <p className="mt-5 text-xs text-[#7c8578]">官方帳號 ID：@taiwanbuyway</p>
          <div className="mt-12 grid gap-3 text-left sm:grid-cols-3">
            {["產季通知", "限量商品提醒", "一對一詢問"].map((benefit) => (
              <div className="rounded-2xl bg-[#fffdf7]/65 p-5 text-sm font-medium text-[#425347]" key={benefit}>
                {benefit}
              </div>
            ))}
          </div>
          <Link className="mt-9 inline-flex text-sm text-[#526157] underline underline-offset-4" href="/contact">
            也可以改用聯絡表單
          </Link>
        </div>
      </div>
    </section>
  );
}
