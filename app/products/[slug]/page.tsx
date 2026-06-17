import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 2);

  return (
    <>
      <section className="page-shell section-space">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#eee9dd]">
            <img alt={product.name} className="absolute inset-0 h-full w-full object-cover" src={product.image} />
          </div>
          <div className="lg:px-8">
            <p className="eyebrow">
              {product.category} · {product.origin}
            </p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.055em] text-[#26382d]">{product.name}</h1>
            <p className="mt-5 text-lg text-[#9a7b36]">{product.eyebrow}</p>
            <p className="mt-7 text-base leading-9 text-[#706c62]">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span className="rounded-full bg-[#e7e7d9] px-4 py-2 text-sm text-[#4d5d51]" key={feature}>
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-9 border-y border-[#26382d]/10 py-6">
              <p className="text-sm text-[#817b6f]">商品規格</p>
              <p className="mt-2 text-lg font-medium text-[#304337]">{product.priceLabel}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button button-primary" href="/line">
                LINE 立即詢問 <ArrowIcon className="size-5" />
              </Link>
              <Link className="button button-outline" href="/contact">
                填寫詢問表單
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#eee9dd]">
          <div className="page-shell section-space">
            <p className="eyebrow">RELATED PRODUCTS</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[#26382d]">同分類推薦</h2>
            <div className="mt-9 grid max-w-4xl gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
