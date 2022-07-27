import Link from "next/link";

export default function Footer() {
    return (
        <footer className={'p-4 bg-white md:px-6 md:py-8 dark:bg-gray-800 fixed bottom-0 w-full'}>
            <div className={'sm:flex sm:items-center sm:justify-between px-4 py-2.5 mx-auto max-w-screen-xl'}>
                <Link href={'/'}>
                    <div>
                        <span className={'self-center text-xl font-semibold whitespace-nowrap dark:text-white'}>Jorge Calheiros</span>
                    </div>
                </Link>
                <ul className={'flex flex-wrap items-center mb-6 sm:mb-0'}>
                    <Link href={'/'}>
                        <li className={'text-sm text-gray-500 hover:underline dark:text-gray-400'}>
                            GitHub
                        </li>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}