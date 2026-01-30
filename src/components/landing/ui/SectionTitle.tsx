interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = centered ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl text-gray-600 mt-4 max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
