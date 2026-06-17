"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="grid min-h-96 place-items-center rounded-[1.7rem] border border-[#2f4938]/10 bg-[#fffdf7] p-10 text-center">
        <div>
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#dfe5d5] text-xl text-[#2f4938]">✓</span>
          <h2 className="mt-5 text-2xl font-medium text-[#26382d]">訊息已送出</h2>
          <p className="mt-3 text-sm leading-7 text-[#716d63]">我們會在 1-2 個工作天內與你聯繫，謝謝你的來信。</p>
        </div>
      </div>
    );
  }

  return (
    <form className="rounded-[1.7rem] border border-[#2f4938]/10 bg-[#fffdf7] p-6 sm:p-9" onSubmit={submit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">
          姓名
          <input className="form-input" name="name" placeholder="請輸入您的姓名" required />
        </label>
        <label className="form-label">
          聯絡電話
          <input className="form-input" name="phone" placeholder="09xx-xxx-xxx" required type="tel" />
        </label>
      </div>
      <label className="form-label mt-5">
        電子信箱
        <input className="form-input" name="email" placeholder="hello@example.com" type="email" />
      </label>
      <label className="form-label mt-5">
        詢問類型
        <select className="form-input" defaultValue="商品詢問" name="topic">
          <option>商品詢問</option>
          <option>企業團購</option>
          <option>品牌合作</option>
          <option>其他需求</option>
        </select>
      </label>
      <label className="form-label mt-5">
        訊息內容
        <textarea className="form-input min-h-36 resize-y" name="message" placeholder="請留下商品、數量、預算或合作需求" required />
      </label>
      <button className="button button-primary mt-7 w-full justify-center sm:w-auto" type="submit">
        送出訊息
      </button>
      <p className="mt-4 text-xs leading-6 text-[#8b867a]">送出表單即表示同意我們依照隱私政策處理您的聯絡資訊。</p>
    </form>
  );
}
