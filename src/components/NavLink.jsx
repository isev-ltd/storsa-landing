import Link from 'next/link'

export function NavLink({ href, target=null, children }) {
  return (
    <Link
      href={href}
      target={target}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
