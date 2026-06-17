type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight font-medium tracking-[-0.04em] text-[#26382d] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] leading-8 text-[#6f6b5f] sm:text-base">{description}</p>
      )}
    </div>
  );
}
