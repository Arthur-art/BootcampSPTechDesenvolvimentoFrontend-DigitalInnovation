import React, { useEffect, useState } from 'react'
import { Button, ChakraProvider, Container, FormControl, FormLabel, Input } from "@chakra-ui/react"
import style from './style.module.scss'
export const Forms = () => {
    const [onChange, setOnChange] = useState({});
    const [onChangeName, setOnChangeName] = useState("")
    const [onChangePass, setOnChangePass] = useState("");
    const [onChangeEmail, setOnChangeEmail] = useState("");
    const [onChangeEndereco, setOnChangeEndereco] = useState("");
    const [form, setForm] = useState([])

    const handleChangeName = ({ target }) => {
        const { value } = target;
        setOnChangeName(value)
    }
    const handleChangeEmail = ({ target }) => {
        const { value } = target;
        setOnChangeEmail(value)
    }
    const handleChangeEndereco = ({ target }) => {
        const { value } = target;
        setOnChangeEndereco(value)
    }

    const handleChangePass = ({ target }) => {
        const { value } = target;
        setOnChangePass(value)
    }

    const handleChange = () => {
        setOnChange({ name: onChangeName, password: onChangePass, endereco: onChangeEndereco, email: onChangeEmail })
    }

    useEffect(() => {
        handleChange()
    }, [onChangeName, onChangePass, onChangeEmail, onChangeEndereco])


    const handleSubmit = (event) => {
        event.preventDefault();
        setForm((prev) => ([onChange, ...prev]))
        setOnChangeName("")
        setOnChangePass("")
        setOnChangeEmail("")
        setOnChangeEndereco("")
        setOnChange({})
        console.log(form)
    }
    console.log(form)

    return (
        <>
            <ChakraProvider>
                <Container display="flex" gridGap="5" justifyContent="space-around" marginBottom="2rem" flexDirection="column">
                    <Container fontSize="2rem" display="flex" justifyContent="center">
                        <h1>Você está no cadastro</h1>
                    </Container>
                </Container>
                <Container marginBottom="2rem" display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">
                    <FormLabel>Foto de Perfil</FormLabel>
                    <input type="file" name="arquivos" className="btn btn-success" accept="image/png, image/jpeg" multiple />
                </Container>

                <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">

                    <FormControl isRequired id="username">
                        <FormLabel>Nome</FormLabel>
                        <Input onChange={handleChangeName} value={onChangeName || ""} name="name" />

                    </FormControl>

                    <FormControl isRequired id="endereco">
                        <FormLabel>Endereço</FormLabel>
                        <Input onChange={handleChangeEndereco} value={onChangeEndereco || ""} name="endereco" />

                    </FormControl>

                    <FormControl isRequired id="email">
                        <FormLabel>E-mail</FormLabel>
                        <Input onChange={handleChangeEmail} value={onChangeEmail || ""} name="email" />

                    </FormControl>

                    <FormControl isRequired id="password">
                        <FormLabel>Senha</FormLabel>
                        <Input onChange={handleChangePass} value={onChangePass || ""} name="password" />
                        <FormLabel>Confirmar Senha</FormLabel>
                        <Input onChange={handleChangePass} value={onChangePass || ""} name="password" />

                    </FormControl>
                    <Button onClick={handleSubmit}>Salvar</Button>
                </Container>
            </ChakraProvider>
        </>
    )
}

/*
<ChakraProvider>
                <Container className={style.container}>
                    <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input onChange={handleChangeName} value={onChangeName || ""} name="name" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input onChange={handleChangePass} value={onChangePass || ""} name="password" />
                    </FormControl>
                    <Button onClick={handleSubmit}>Salvar</Button>
                </Container>
            </ChakraProvider>
*/


