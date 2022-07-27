type Props = {
    children: any
}

export default function Container({ children }: Props) {
    return (
        <section className={'bg-white rounded-xl p-10 mx-20 my-10'}>
            {children}
        </section>
    )
}