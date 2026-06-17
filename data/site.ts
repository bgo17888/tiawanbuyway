export type ProductCategory = "蛋品" | "米糧" | "季節限定";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  origin: string;
  image: string;
  eyebrow: string;
  description: string;
  features: string[];
  priceLabel: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "free-range-eggs",
    name: "放牧鮮蛋",
    category: "蛋品",
    origin: "彰化｜優能農產",
    image: "/images/product-eggs.png",
    eyebrow: "每日新鮮集蛋",
    description: "以友善飼養和舒適環境照顧母雞，帶來蛋香濃郁、風味自然的日常好蛋。",
    features: ["友善飼養", "蛋香濃郁", "新鮮直送"],
    priceLabel: "10 入裝｜歡迎洽詢",
    badge: "人氣選品",
  },
  {
    slug: "lingzhi-eggs",
    name: "靈芝蛋",
    category: "蛋品",
    origin: "彰化｜優能農產",
    image: "/images/product-eggs.png",
    eyebrow: "機能日常選擇",
    description: "從飼養管理到配送品質都仔細把關，適合家庭日常料理與穩定補充。",
    features: ["特色機能蛋品", "家庭常備", "產地配送"],
    priceLabel: "10 入裝｜歡迎洽詢",
  },
  {
    slug: "fuli-rice",
    name: "富里香米",
    category: "米糧",
    origin: "花蓮｜富里鄉",
    image: "/images/product-rice.png",
    eyebrow: "花東縱谷好米",
    description: "來自花東縱谷的潔淨水源與日夜溫差，米香自然、口感飽滿，適合日常主食。",
    features: ["花東好米", "香氣自然", "口感 Q 彈"],
    priceLabel: "2 公斤｜歡迎洽詢",
    badge: "產地推薦",
  },
  {
    slug: "milk-rice",
    name: "牛奶米",
    category: "米糧",
    origin: "台東｜池上",
    image: "/images/product-rice.png",
    eyebrow: "柔軟清甜",
    description: "米飯口感溫潤柔軟，適合家庭餐桌與便當料理，冷掉後依然保有細緻口感。",
    features: ["台灣在地米", "口感柔軟", "家庭料理適用"],
    priceLabel: "2 公斤｜歡迎洽詢",
  },
  {
    slug: "selected-egg-yolk",
    name: "優選蛋黃",
    category: "季節限定",
    origin: "彰化｜優能農產",
    image: "/images/product-yolk.png",
    eyebrow: "節慶限定選品",
    description: "專為端午粽與節慶料理準備的濃郁蛋黃，色澤飽滿、香氣厚實。",
    features: ["端午料理適用", "香氣濃郁", "數量限定"],
    priceLabel: "依需求報價｜預約詢問",
    badge: "季節限定",
  },
];

export const stories = [
  {
    slug: "young-farmer-homecoming",
    location: "彰化",
    title: "回到土地，重新定義一顆安心的蛋",
    excerpt: "從青農返鄉到友善飼養，優能農產把一顆日常雞蛋做回食材本身該有的樣子。",
    tone: "green",
  },
  {
    slug: "fuli-rice-season",
    location: "花蓮富里",
    title: "縱谷的風與水，養出一碗有記憶的飯",
    excerpt: "沿著花東縱谷的稻田前進，看氣候、水源與土地如何一起塑造米香與口感。",
    tone: "gold",
  },
  {
    slug: "seasonal-table",
    location: "台灣餐桌",
    title: "吃當季，不只是新鮮，也是更好的日常選擇",
    excerpt: "當餐桌願意跟著節氣走，支持在地便不再是口號，而是每天都做得到的事。",
    tone: "brown",
  },
] as const;

export const articles = [
  {
    slug: "how-to-choose-fresh-eggs",
    category: "食材知識",
    title: "一顆好蛋怎麼選？從蛋殼到保存的 5 個日常觀察",
    excerpt: "除了大小與顏色，更重要的是飼養方式、新鮮度與保存條件。",
    date: "2026.05.28",
    readTime: "5 分鐘",
  },
  {
    slug: "taiwan-rice-texture",
    category: "產地筆記",
    title: "為什麼台灣米這麼好吃？認識產地、品種與口感",
    excerpt: "從花東到西部平原，不同風土條件讓每一碗白飯都有自己的個性。",
    date: "2026.05.16",
    readTime: "6 分鐘",
  },
  {
    slug: "farm-to-table",
    category: "永續生活",
    title: "產地到餐桌，不只是距離更短",
    excerpt: "知道食物從哪裡來，會讓我們更願意珍惜每一次購買與每一餐的選擇。",
    date: "2026.04.30",
    readTime: "4 分鐘",
  },
] as const;

export const categories: Array<"全部" | ProductCategory> = ["全部", "蛋品", "米糧", "季節限定"];
