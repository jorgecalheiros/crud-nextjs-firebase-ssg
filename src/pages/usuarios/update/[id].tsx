import { GetStaticPropsResult } from "next";
import { ChangeEvent, useState } from "react";
import { DataUser, User } from "../../../@types/User";
import Button from "../../../components/button";
import Container from "../../../components/container";
import Input from "../../../components/input";
import Default from "../../../layout/default";
import UserService from "../../../services/UserService";

type Props = {
    user: User
}

export default function Update({ user }: Props) {
    const userData = user.data;

    const [nome, setNome] = useState(userData.nome);
    const [email, setEmail] = useState(userData.email);
    const [telefone, setTelefone] = useState(userData.telefone);
    const [altura, setAltura] = useState(userData.altura);
    const [peso, setPeso] = useState(userData.peso);
    const [isLoading, setLoading] = useState(false);

    const data: DataUser = {
        nome,
        email,
        telefone,
        altura,
        peso
    }

    function getTextInput(event: ChangeEvent<any>, callback: Function) {
        const { value } = event.target;
        callback(value);
    }

    async function handleSubmit() {
        setLoading(true);
        if (!nome || !email || !telefone || !altura || !peso) {
            alert('Preencha os campos');
            return;
        }

        const updated = await UserService.updateDocument(user.id, data);
        if (updated) {
            alert("Usuário alterado");
            window.location.href = '/usuarios';
        } else {
            console.log(updated)
        }
        return;
    }

    return (
        <Default titlePage="Alterar usuário">
            <Container>
                <h1 className={'text-2xl underline'}>
                    Alterar usuário
                </h1>
                <div className={'mt-10'}>
                    <Input idInput="nome" placeholder=" " type={"text"} textLabel="Nome" value={nome} onChange={(e) => { getTextInput(e, setNome) }} />
                    <Input idInput="email" textLabel="E-mail" type={"email"} value={email} onChange={(e) => { getTextInput(e, setEmail) }} />
                    <Input idInput="telefone" textLabel="Telefone" value={telefone} onChange={(e) => { getTextInput(e, setTelefone) }} />
                    <Input idInput="altura" textLabel="Altura" value={altura} onChange={(e) => { getTextInput(e, setAltura) }} />
                    <Input idInput="peso" textLabel="Peso" value={peso} onChange={(e) => { getTextInput(e, setPeso) }} />
                    <Button text={`${isLoading ? 'Carregando...' : 'Alterar'}`} onClick={isLoading ? () => { } : handleSubmit} />
                </div>
            </Container>
        </Default>
    )
}

export async function getStaticProps({ params }: { params: User }) {
    const [user, error] = await UserService.getByDocument(params.id);

    if (!error) {
        return {
            props: {
                user
            },
            revalidate: 20
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }
}

export async function getStaticPaths() {
    const [users, error] = await UserService.get();
    if (!error) {
        const paths = users.map(user => ({ params: { id: user.id } }));
        return { paths, fallback: 'blocking' }
    }
}