import { GetStaticPropsResult } from "next";
import Link from "next/link";
import { User } from "../../@types/User";
import Container from "../../components/container";
import Default from "../../layout/default";
import UserService from "../../services/UserService";

type Props = {
    users: User[]
}

export function Tr({ user }: { user: User }) {
    const dataUser = user.data;
    return (
        <tr className={'bg-white border-b dark:bg-gray-800 dark:border-gray-700'}>
            <td className={'py-4 px-6'}>{dataUser.nome}</td>
            <td className={'py-4 px-6'}>{dataUser.email}</td>
            <td className={'py-4 px-6'} >{dataUser.telefone}</td>
            <td className={'py-4 px-6'}>
                <Link href={`/usuarios/${user.id}`}>
                    <span className={'font-medium text-green-600 dark:text-green-500 hover:underline mr-10 cursor-pointer'}>
                        Detalhes
                    </span>
                </Link>
                <Link href={`/usuarios/update/${user.id}`}>
                    <span className={'font-medium text-blue-600 dark:text-blue-500 hover:underline mr-10 cursor-pointer'}>
                        Editar
                    </span>
                </Link>
                <Link href={`/usuarios/delete/${user.id}`}>
                    <span className={'font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer'}>
                        Excluir
                    </span>
                </Link>
            </td>
        </tr>
    )
}

export default function Usuarios({ users }: Props) {
    return (
        <Default titlePage="Usuários">
            <Container>
                <h1 className={'text-2xl underline'}>
                    Usuários
                </h1>
                <div className="mt-10">
                    <Link href={'/usuarios/create'}>
                        <span className={'px-4 py-2 w-fit cursor-pointer bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200'}>
                            Adicionar + um usuário
                        </span>
                    </Link>
                </div>
                <table className={'mt-10 table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'}>
                    <thead className={'text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-500 dark:text-gray-400'}>
                        <tr>
                            <th className={'py-3 px-6'}>Nome</th>
                            <th className={'py-3 px-6'}>E-mail</th>
                            <th className={'py-3 px-6'}>Telefone</th>
                            <th className={'py-3 px-6'}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <Tr user={user} key={index} />)}
                    </tbody>
                </table>
            </Container>
        </Default>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const [users, error] = await UserService.get();

    return {
        props: {
            users: !error ? users : []
        },
        revalidate: 20
    }
}