# 台灣百味 Taiwan Buy Way

以 Next.js、TypeScript、Tailwind CSS 製作的品牌網站 MVP，聚焦台灣在地農產品、地方品牌、產地故事與 LINE 詢問導流。

## 專案結構

```text
app/
  page.tsx                   # 首頁
  about/page.tsx             # 關於台灣百味
  stories/page.tsx           # 品牌故事
  brands/youneng/page.tsx    # 優能農產品牌館
  products/
    page.tsx                 # 商品分類與篩選
    [slug]/page.tsx          # 商品詳情
  blog/
    page.tsx                 # 文章列表
    [slug]/page.tsx          # 文章內容
  contact/page.tsx           # 聯絡表單
  line/page.tsx              # LINE 會員導流
components/
  Header.tsx
  Footer.tsx
  ProductCard.tsx
  StoryCard.tsx
  ProductExplorer.tsx
  ContactForm.tsx
  LineCTA.tsx
  SectionHeading.tsx
data/
  site.ts                    # 商品、文章、故事與分類假資料
public/images/               # 網站示意素材
```

## 執行

```bash
pnpm install
pnpm dev
```

正式建置：

```bash
pnpm build
pnpm start
```

## 商品資料格式

商品型別定義與假資料位於 `data/site.ts`：

```ts
type Product = {
  slug: string;
  name: string;
  category: "蛋品" | "米糧" | "季節限定";
  origin: string;
  image: string;
  eyebrow: string;
  description: string;
  features: string[];
  priceLabel: string;
  badge?: string;
};
```

## 下一階段

1. 串接 Sanity、Strapi 或 Payload CMS，替換 `data/site.ts`。
2. 串接 LINE 官方帳號正式連結、LIFF 或 Messaging API。
3. 將聯絡表單接到 Resend、SendGrid、Google Sheets 或 CRM。
4. 加入庫存、規格、購物車及綠界／藍新金流。
5. 補上 GA4、Meta Pixel、Search Console 與結構化資料。
6. 由品牌端提供正式攝影素材後，替換 `public/images` 示意圖片。
