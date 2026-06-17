import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { LineCTA } from "@/components/LineCTA";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard } from "@/components/StoryCard";
import { articles, products, stories } from "@/data/site";
import { withBasePath } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="page-shell pt-5 sm:pt-7">
        <div className="relative min-h-[680px] overflow-hidden rounded-[2rem] bg-[#d9d5c8] sm:min-h-[720px]">
          <img
            alt="台灣在地農產主視覺，包含雞蛋、米糧與自然田野風景"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
            src={withBasePath("/images/hero-farm.png")}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233128]/88 via-[#233128]/48 to-transparent" />
          <div className="relative flex min-h-[680px] max-w-2xl flex-col justify-end px-6 py-12 text-white sm:min-h-[720px] sm:px-12 sm:py-16 lg:px-20">
            <p className="text-[11px] font-medium tracking-[0.28em] text-[#f0d895] uppercase">Local food · Local story</p>
            <h1 className="mt-5 text-[2.8rem] leading-[1.08] font-medium tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              台灣百味
              <span className="mt-2 block text-2xl tracking-[0.02em] text-white/75 sm:text-3xl">Taiwan Buy Way</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/83 sm:text-lg">
              從產地到餐桌，發現台灣每一個值得被看見的在地故事。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="button bg-[#f0d895] text-[#26382d] hover:bg-[#f6e5b5]" href="/products">
                查看商品 <ArrowIcon className="size-5" />
              </Link>
              <Link className="button border border-white/30 bg-white/8 text-white backdrop-blur hover:bg-white/15" href="/brands/youneng">
                進入品牌館
              </Link>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-white/22 pt-6">
              {[
                ["100%", "台灣在地"],
                ["產地", "透明可溯"],
                ["友善", "土地選擇"],
              ].map(([value, label]) => (
                <div className="border-r border-white/18 pr-4 last:border-0 last:pl-4 sm:px-5 sm:first:pl-0" key={label}>
                  <p className="text-lg font-medium text-[#f0d895]">{value}</p>
                  <p className="mt-1 text-[11px] tracking-[0.1em] text-white/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <SectionHeading eyebrow="OUR BELIEF" title="我們販售的不只是商品" />
        <div>
          <p className="text-xl leading-9 font-medium tracking-[-0.025em] text-[#3f4d43] sm:text-2xl sm:leading-10">
            而是農人的堅持、土地的溫度，
            <br className="hidden sm:block" />
            以及屬於台灣的美好滋味。
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#747066]">
            台灣百味以在地農產與地方品牌為核心，走進產地、理解生產，再把值得被看見的選品與故事，整理成安心而清楚的消費體驗。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["小農嚴選", "重視生產方式與土地關係"],
              ["產地直連", "縮短距離也保留信任"],
              ["內容選品", "讓商品背後的故事被理解"],
            ].map(([title, text]) => (
              <div className="rounded-3xl border border-[#26382d]/8 bg-[#fffdf7] p-5" key={title}>
                <p className="text-sm font-medium text-[#304337]">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[#7a7569]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee9dd]">
        <div className="page-shell section-space">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              description="先從日常會吃到的蛋品與米糧開始，慢慢把餐桌換成你真正想支持的樣子。"
              eyebrow="SELECTED PRODUCTS"
              title="精選商品"
            />
            <Link className="button button-outline self-start" href="/products">
              商品總覽 <ArrowIcon className="size-5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-8 sm:py-12">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#2f4938] text-[#fffdf7] lg:grid-cols-2">
          <div className="p-7 sm:p-12 lg:p-16">
            <p className="text-[11px] font-medium tracking-[0.2em] text-[#f0d895]">BRAND HOUSE</p>
            <p className="mt-10 text-sm tracking-[0.12em] text-white/55">本月主題品牌</p>
            <h2 className="mt-4 text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-5xl">優能農產</h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-white/68 sm:text-base">
              青農返鄉，讓雞蛋回歸自然與安心。從母雞的生活開始，把一顆日常雞蛋重新做成值得信任的食材。
            </p>
            <div className="mt-8 grid max-w-md gap-3 text-sm text-white/70">
              <p>品牌精神：青農返鄉，讓雞蛋回歸自然與安心。</p>
              <p>品牌特色：重視母雞健康、飼養環境與產品新鮮度。</p>
            </div>
            <Link className="button mt-9 bg-[#f0d895] text-[#26382d]" href="/brands/youneng">
              查看品牌館 <ArrowIcon className="size-5" />
            </Link>
          </div>
          <div className="relative min-h-96">
            <img
              alt="優能農產蛋品主視覺"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              src={withBasePath("/images/product-eggs.png")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2f4938]/30 to-transparent" />
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeading
          align="center"
          description="品牌之所以動人，不只因為產品，而是因為背後有人願意把事情做好。"
          eyebrow="LOCAL STORIES"
          title="台灣品牌故事"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {stories.map((story, index) => (
            <StoryCard index={index} key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="relative mx-auto aspect-[0.92] w-full max-w-xl">
            <div className="absolute inset-[8%] rounded-[45%_55%_42%_58%/55%_40%_60%_45%] bg-[#dce1d2]" />
            <div className="absolute top-[13%] left-[17%] text-[11px] tracking-widest text-[#617063]">TAIWAN</div>
            {[
              ["花蓮", "top-[27%] right-[20%]"],
              ["彰化", "top-[43%] left-[18%]"],
              ["台東", "bottom-[24%] right-[21%]"],
            ].map(([name, position]) => (
              <div className={`absolute ${position} flex items-center gap-2`} key={name}>
                <span className="size-2.5 rounded-full bg-[#b59343] ring-4 ring-[#b59343]/15" />
                <span className="text-sm font-medium text-[#435247]">{name}</span>
              </div>
            ))}
            <div className="absolute top-[20%] left-[42%] h-[58%] w-[24%] rotate-[-18deg] rounded-[55%_45%_60%_40%/40%_55%_45%_60%] border border-[#2f4938]/20 bg-[#f4f0e4]/60" />
          </div>
          <div>
            <SectionHeading
              description="產地不是標籤，而是理解食物的起點。知道來自哪裡，才能更清楚自己支持的是什麼。"
              eyebrow="TASTE OF PLACE"
              title="台灣產地地圖"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["01", "彰化", "友善蛋品與返鄉青農的飼養實踐"],
                ["02", "花蓮富里", "縱谷好米、水源與風土條件"],
                ["03", "台東池上", "日照、氣候與米飯的飽滿口感"],
              ].map(([number, place, note]) => (
                <div className="flex items-center gap-5 border-b border-[#26382d]/10 pb-4" key={place}>
                  <span className="text-xs text-[#ac9050]">{number}</span>
                  <p className="min-w-20 font-medium text-[#304337]">{place}</p>
                  <p className="text-sm text-[#7a7569]">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf7]">
        <div className="page-shell section-space">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="JOURNAL" title="百味誌" description="把產地知識、食材理解與生活方式，寫給真正關心餐桌的人。" />
            <Link className="hidden items-center gap-2 text-sm font-semibold text-[#2f4938] sm:flex" href="/blog">
              所有文章 <ArrowIcon className="size-5" />
            </Link>
          </div>
          <div className="mt-10 divide-y divide-[#26382d]/10 border-y border-[#26382d]/10">
            {articles.map((article, index) => (
              <Link className="group grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center" href={`/blog/${article.slug}`} key={article.slug}>
                <span className="text-xs text-[#ad9560]">0{index + 1}</span>
                <div>
                  <p className="text-[11px] tracking-[0.12em] text-[#8d887b]">{article.category}</p>
                  <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-[#304337] transition group-hover:text-[#9a7b36] sm:text-xl">{article.title}</h3>
                </div>
                <div className="flex items-center gap-5 text-xs text-[#918b7f]">
                  <span>{article.date}</span>
                  <ArrowIcon className="size-5 text-[#2f4938]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LineCTA />
    </>
  );
}
