import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="h-10 w-5 rounded bg-[#db4444]" />
          <p className="text-sm font-semibold text-[#db4444]">{eyebrow}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-[0.02em] text-black">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-zinc-500">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {action}
    </div>
  );
}
