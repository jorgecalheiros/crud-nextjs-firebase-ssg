import { ChangeEvent, useState } from "react";
import { DataUser } from "../../@types/User";
import Button from "../../components/button";
import Container from "../../components/container";
import Input from "../../components/input";
import Default from "../../layout/default";
import UserService from "../../services/UserService";

export default function Create() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
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

        const created = await UserService.addCollection(data);
        if (created) {
            window.location.href = `/usuarios`
        } else {
            console.log(created);
        }
        return;
    }

    return (
        <Default titlePage="Cadastrar usuário">
            <Container>
                <h1 className={'text-2xl underline'}>
                    Cadastrar usuário
                </h1>
                <div className={'mt-10'}>
                    <Input idInput="nome" placeholder=" " type={"text"} textLabel="Nome" value={nome} onChange={(e) => { getTextInput(e, setNome) }} />
                    <Input idInput="email" textLabel="E-mail" type={"email"} value={email} onChange={(e) => { getTextInput(e, setEmail) }} />
                    <Input idInput="telefone" textLabel="Telefone" value={telefone} onChange={(e) => { getTextInput(e, setTelefone) }} />
                    <Input idInput="altura" textLabel="Altura" value={altura} onChange={(e) => { getTextInput(e, setAltura) }} />
                    <Input idInput="peso" textLabel="Peso" value={peso} onChange={(e) => { getTextInput(e, setPeso) }} />
                    <Button text={`${isLoading ? 'Carregando...' : 'Cadastrar'}`} onClick={isLoading ? () => { } : handleSubmit} />
                </div>
            </Container>
        </Default>
    )
}

export async function getStaticProps() {
    return {
        props: {

        }
    }
}