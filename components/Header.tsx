"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "關於我們" },
  { href: "/stories", label: "品牌故事" },
  { href: "/brands/youneng", label: "優能農產" },
  { href: "/products", label: "商品選購" },
  { href: "/blog", label: "百味誌" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#26382d]/8 bg-[#f8f4e9]/92 backdrop-blur-md">
      <div className="page-shell flex h-[76px] items-center justify-between">
        <Link aria-label="台灣百味首頁" className="group flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center rounded-full bg-[#2f4938] text-sm font-semibold tracking-wider text-[#f7e8bd]">
            百味
          </span>
          <span>
            <span className="block text-[15px] font-semibold tracking-[0.16em] text-[#26382d]">台灣百味</span>
            <span className="block text-[9px] tracking-[0.21em] text-[#8a7e64] uppercase">Taiwan Buy Way</span>
          </span>
        </Link>

        <nav aria-label="主要導覽" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link className="button button-outline !px-5 !py-2.5" href="/contact">
            聯絡我們
          </Link>
          <Link className="button button-primary !px-5 !py-2.5" href="/line">
            加入 LINE
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label="開啟選單"
          className="grid size-11 place-items-center rounded-full border border-[#26382d]/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-px w-5 bg-[#26382d]" />
            <span className="block h-px w-5 bg-[#26382d]" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#26382d]/8 bg-[#f8f4e9] px-5 py-6 lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                className="border-b border-[#26382d]/8 py-4 text-base text-[#26382d]"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link className="button button-outline" href="/contact" onClick={() => setOpen(false)}>
                聯絡我們
              </Link>
              <Link className="button button-primary" href="/line" onClick={() => setOpen(false)}>
                加入 LINE
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
