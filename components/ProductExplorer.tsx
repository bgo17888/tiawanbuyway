"use client";

import { useState } from "react";
import { categories, products, type ProductCategory } from "@/data/site";
import { ProductCard } from "./ProductCard";

export function ProductExplorer() {
  const [active, setActive] = useState<"全部" | ProductCategory>("全部");
  const filtered = active === "全部" ? products : products.filter((product) => product.category === active);

  return (
    <>
      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm transition ${
              active === category
                ? "bg-[#2f4938] text-white"
                : "border border-[#2f4938]/15 bg-[#fffdf7] text-[#5f655d] hover:border-[#2f4938]/35"
            }`}
            key={category}
            onClick={() => setActive(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
