import { useState } from "react";
import { DataUser, User } from "../../../@types/User";
import Button from "../../../components/button";
import Container from "../../../components/container";
import Input from "../../../components/input";
import Default from "../../../layout/default";
import UserService from "../../../services/UserService";

type Props = {
    user: User
}

export default function Delete({ user }: Props) {
    const userData = user.data;

    const [nome] = useState(userData.nome);
    const [email] = useState(userData.email);
    const [telefone] = useState(userData.telefone);
    const [altura] = useState(userData.altura);
    const [peso] = useState(userData.peso);
    const [isLoading, setLoading] = useState(false);

    async function handleDelete() {
        setLoading(true);

        const deleted = await UserService.deleteDocument(user.id);
        if (deleted) {
            alert("Usuário deletado com sucesso!");
            window.location.href = "/usuarios";
        } else {
            console.log(deleted);
        }
        return;
    }

    return (
        <Default titlePage="Deletar usuário">
            <Container>
                <h1 className={'text-2xl underline'}>
                    Deletar usuário
                </h1>
                <div className={'mt-10'}>
                    <Input idInput="nome" type={"text"} textLabel="Nome" value={nome} disabled />
                    <Input idInput="email" textLabel="E-mail" type={"email"} value={email} disabled />
                    <Input idInput="telefone" textLabel="Telefone" value={telefone} disabled />
                    <Input idInput="altura" textLabel="Altura" value={altura} disabled />
                    <Input idInput="peso" textLabel="Peso" value={peso} disabled />
                    <Button text={`${isLoading ? 'Carregando...' : 'Excluir'}`} onClick={isLoading ? () => { } : handleDelete} />
                </div>
            </Container>
        </Default>
    )

}

export async function getStaticProps({ params }: { params: User }) {
    const [user, error] = await UserService.getByDocument(params.id)
    if (!error) {
        return {
            props: {
                user
            }
        }
    }
}

export async function getStaticPaths() {
    const [users, error] = await UserService.get();
    if (!error) {
        const paths = users.map(user => ({ params: { id: user.id } }))
        return { paths, fallback: 'blocking' }
    }
}