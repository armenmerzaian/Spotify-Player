import React from "react";

export default function Button({
  to,
  children,
}: {
  to: string;
  children: string | number;
}) {
  return (
    <a
      href={to}
      className="px-6 py-2 bg-slate-100 rounded-full font-semibold"
    >
      {children}
    </a>
  );
}
