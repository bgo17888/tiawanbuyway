import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · NOT FOUND</p>
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.04em] text-[#26382d]">這個頁面目前找不到</h1>
        <p className="mt-4 text-sm text-[#716d63]">先回首頁看看台灣百味的其他內容與選品。</p>
        <Link className="button button-primary mt-7" href="/">
          回到首頁
        </Link>
      </div>
    </section>
  );
}
