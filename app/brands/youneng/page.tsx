import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/site";

export const metadata = {
  title: "優能農產品牌館",
  description: "認識優能農產的友善飼養理念與代表商品。",
};

export default function YounengPage() {
  const brandProducts = products.filter((product) => product.origin.includes("優能農產"));

  return (
    <>
      <section className="page-shell pt-6">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#2f4938] text-white lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16">
            <p className="text-[11px] tracking-[0.2em] text-[#f0d895]">BRAND HOUSE</p>
            <p className="mt-12 text-sm tracking-[0.14em] text-white/55">彰化｜友善蛋品</p>
            <h1 className="mt-4 text-5xl font-medium tracking-[-0.055em] sm:text-6xl">優能農產</h1>
            <p className="mt-6 text-xl leading-9 text-white/82">青農返鄉，讓雞蛋回歸自然與安心。</p>
          </div>
          <div className="relative min-h-[480px]">
            <Image alt="優能農產品牌主視覺" className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src="/images/product-eggs.png" />
          </div>
        </div>
      </section>

      <section className="page-shell section-space grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading eyebrow="BRAND STORY" title="從母雞健康開始，把安心帶回餐桌" />
        <div className="space-y-5 text-base leading-9 text-[#706c62]">
          <p>
            優能農產嚴選台灣優質蛋品與在地農產，重視母雞健康、飼養環境與產品新鮮度，希望讓消費者吃到真正安心的食材。
          </p>
          <p>
            對優能農產來說，蛋不是大量流通的制式商品，而是需要被認真對待的日常食材。從飼養管理、清潔環境到出貨節奏，每一個細節都影響最後端上桌的品質。
          </p>
          <Link className="button button-outline mt-3" href="/contact">
            詢問合作與團購 <ArrowIcon className="size-5" />
          </Link>
        </div>
      </section>

      <section className="bg-[#eee9dd]">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="BRAND PRODUCTS" title="優能農產選品" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brandProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
