import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`bg-navdemobuttonBg text-[#FCFCFC] font-plusjakarta font-medium text-[16px] uppercase rounded-[32px] w-[148px] h-[40px] flex items-center justify-center transition-colors duration-200 hover:bg-[#0a5a6b] ${className}`}
    >
      {children}
    </Link>
  );
}
