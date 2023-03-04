import Link from "next/link";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-slate-700 hover:underline hover:text-slate-900 hover:underline-offset-8 hover:decoration-red-600 hover:decoration-2"
    >
      {children}
    </Link>
  );
}
