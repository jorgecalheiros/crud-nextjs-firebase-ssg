type Props = {
    children: any
}

export default function Container({ children }: Props) {
    return (
        <section className={'m-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'}>
            {children}
        </section>
    )
}