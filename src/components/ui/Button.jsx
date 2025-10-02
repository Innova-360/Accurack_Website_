import Link from "next/link";

export default function Button({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`font-plusjakarta flex items-center justify-center transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
