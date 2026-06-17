import Link from "next/link";
import type { Product } from "@/data/site";
import { ArrowIcon } from "./ArrowIcon";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-[#26382d]/9 bg-[#fffdf7]">
      <Link className="relative block aspect-[1.08] overflow-hidden bg-[#eee7d8]" href={`/products/${product.slug}`}>
        <img
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          loading="lazy"
          src={product.image}
        />
        {product.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-[#fffdf7]/92 px-3 py-1.5 text-[11px] tracking-[0.08em] text-[#4a5f4f] backdrop-blur">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 text-[11px] tracking-[0.12em] text-[#948467]">
          <span>{product.category}</span>
          <span>{product.origin}</span>
        </div>
        <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-[#26382d]">{product.name}</h3>
        <p className="mt-3 min-h-14 text-sm leading-7 text-[#716d63]">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature) => (
            <span className="rounded-full bg-[#f2eee2] px-3 py-1.5 text-[11px] text-[#695f4c]" key={feature}>
              {feature}
            </span>
          ))}
        </div>
        <Link className="mt-6 flex items-center justify-between border-t border-[#26382d]/9 pt-5 text-sm font-medium text-[#2f4938]" href={`/products/${product.slug}`}>
          查看商品
          <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
