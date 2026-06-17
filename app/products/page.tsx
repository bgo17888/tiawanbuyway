import { ProductExplorer } from "@/components/ProductExplorer";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "商品選購",
  description: "瀏覽台灣百味精選的蛋品、米糧與季節限定商品。",
};

export default function ProductsPage() {
  return (
    <section className="page-shell section-space">
      <SectionHeading
        eyebrow="OUR SELECTION"
        title="台灣百味商品分類"
        description="從蛋品、米糧到季節限定，先用分類看見產地與風味，再慢慢找到適合你的選擇。"
      />
      <ProductExplorer />
    </section>
  );
}
