import React from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h3"
        align="center"
      >
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro 
        handleSubmitForm={handleSubmitForm}
        validarCPF={validarCPF}
      />
    </Container>
  );
}

function handleSubmitForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11){
    return({ valido: false, texto: "CPF deve ter 11 digitos"});
  }
  else {
    return({ valido: true, texto: ""});
  }
}

export default App;
