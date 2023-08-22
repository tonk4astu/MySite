import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className=' min-h-[50px]  bg-gradient-to-r
        from-slate-900 via-gray-800 to-indigo-900 border-indigo-700 '>
            <Link className='m-10 rounded text-yellow-400 '
                href="/">
                Home
            </Link>
            <Link className='m-10 rounded text-yellow-400 '
                href="/pachi">
                Pachi
            </Link>
        </nav>
    )
}