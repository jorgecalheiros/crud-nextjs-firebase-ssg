import Link from "next/link";

export default function Header() {


    return (
        <header className={'mb-10'}>
            <nav className={'bg-white border-gray-200 px-4 py-2.5'}>
                <div className={'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'}>
                    <Link href={"/"}>
                        <div>
                            <span className={'self-center text-xl font-semibold whitespace-nowrap dark:text-white'}>Desenvolvimento Web II</span>
                        </div>
                    </Link>
                    <div className={'hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'}>
                        <ul className={'flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'}>
                            <Link href={'/'}>
                                <li className={'cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'} >
                                    Home
                                </li>
                            </Link>
                            <Link href={'/usuarios'}>
                                <li className={'cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'} >
                                    Usuários
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className={'flex items-center lg:order-2'}>
                        <span className={'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'}>Crud NextJs Firestore</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}