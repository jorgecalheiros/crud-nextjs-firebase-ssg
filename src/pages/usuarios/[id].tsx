import { GetStaticProps, GetStaticPropsResult } from "next";
import { User } from "../../@types/User";
import Container from "../../components/container";
import Default from "../../layout/default"
import UserService from "../../services/UserService";

type Props = {
    user: User
}

export default function Usuario({ user }: Props) {
    const userData = user.data;
    return (
        <Default titlePage={userData.nome}>
            <Container>
                <h1 className={'text-2xl underline'}>{userData.nome}</h1>
            </Container>
        </Default>
    )
}

export async function getStaticProps({ params }: { params: User }): Promise<GetStaticPropsResult<any>> {
    const [user, error] = await UserService.getByDocument(params.id)
    return {
        props: {
            user: error ? user : {}
        },
        revalidate: 20
    }
}

export async function getStaticPaths() {
    const [users, error] = await UserService.get();
    if (!error) {
        const paths = users.map(user => ({ params: { id: user.id } }))
        return { paths, fallback: 'blocking' }
    }

}