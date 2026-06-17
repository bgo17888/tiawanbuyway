import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#24362b] text-[#f8f4e9]">
      <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[#f0d895] text-sm font-semibold text-[#26382d]">百味</span>
            <div>
              <p className="font-semibold tracking-[0.18em]">台灣百味</p>
              <p className="text-[10px] tracking-[0.22em] text-[#f8f4e9]/55 uppercase">Taiwan Buy Way</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[#f8f4e9]/68">
            從產地到餐桌，分享台灣在地農產、品牌故事與值得被看見的真實風土。
          </p>
        </div>
        <div>
          <p className="footer-title">探索百味</p>
          <div className="mt-5 grid gap-3 text-sm text-[#f8f4e9]/68">
            <Link href="/products">商品選購</Link>
            <Link href="/brands/youneng">優能農產</Link>
            <Link href="/stories">品牌故事</Link>
            <Link href="/blog">百味誌</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">聯絡資訊</p>
          <div className="mt-5 space-y-3 text-sm leading-6 text-[#f8f4e9]/68">
            <p>週一至週五 09:00-18:00</p>
            <p>hello@taiwanbuyway.tw</p>
            <p>LINE 官方帳號：@taiwanbuyway</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 台灣百味 Taiwan Buy Way</p>
          <p>讓每一份選擇，都回到土地的價值。</p>
        </div>
      </div>
    </footer>
  );
}
