import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ handleSubmitForm, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocao, setPromocao] = useState(true);
    const [novidade, setNovidade] = useState(true);
    const [erros, setErros] = useState({ 
        nome: { valido: true, mensagem: ""},
        sobrenome: { valido: true, mensagem: ""},
        cpf: { valido: true, mensagem: ""},
     });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmitForm({nome, sobrenome, cpf, promocao, novidade});
            }}
        >
            <TextField id="nome"
                value={nome}
                onChange={(e) => {setNome(e.target.value)}}
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!erros.nome.valido}
                helperText={erros.nome.mensagem}
            />

            <TextField
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!erros.sobrenome.valido}
                helperText={erros.sobrenome.mensagem}
            />

            <TextField
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!erros.cpf.valido}
                helperText={erros.cpf.mensagem}
                onBlur={(e) => {
                    const validacao = validarCPF(e.target.value);
                    let err = erros;
                    err.cpf = validacao;
                    setErros(err);
                }}
            />

            <FormControlLabel
                control={
                    <Switch 
                        name="promocoes"
                        color="primary"
                        checked={promocao}
                        onChange={(e) => setPromocao(e.target.checked)}/>}
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                    name="novidades" 
                    color="primary"
                    checked={novidade}
                    onChange={(e) => setNovidade(e.target.checked)} />}
                label="Novidades"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro;