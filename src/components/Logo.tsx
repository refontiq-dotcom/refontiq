import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="refontiq-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#refontiq-gradient)" />
      <path d="M10 9h7a5.5 5.5 0 0 1 0 11h-7V9z" fill="white" fillOpacity="0.16" />
      <path d="M10 9h7a5.5 5.5 0 0 1 3.9 9.4L16.5 23h-4l4-4H10V9z" fill="white" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 transition-transform group-hover:scale-105" />
      <span className="font-display text-lg font-bold tracking-tight text-slate-900">
        {siteConfig.name}
      </span>
    </Link>
  );
}
