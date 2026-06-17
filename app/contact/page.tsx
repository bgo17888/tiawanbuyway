import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "聯絡我們",
  description: "商品詢問、企業團購與品牌合作，歡迎聯絡台灣百味。",
};

export default function ContactPage() {
  return (
    <section className="page-shell section-space">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <SectionHeading
            eyebrow="CONTACT"
            title="想聊商品、合作或團購嗎？"
            description="留下你的需求，我們會用最適合的方式協助你找到合適的在地選品。"
          />
          <div className="mt-10 space-y-6 border-t border-[#26382d]/10 pt-8 text-sm text-[#706c62]">
            <div>
              <p className="text-xs text-[#a38c59]">EMAIL</p>
              <p className="mt-2">hello@taiwanbuyway.tw</p>
            </div>
            <div>
              <p className="text-xs text-[#a38c59]">LINE</p>
              <p className="mt-2">@taiwanbuyway</p>
            </div>
            <div>
              <p className="text-xs text-[#a38c59]">SERVICE HOURS</p>
              <p className="mt-2">週一至週五 09:00-18:00</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
