import "./assets/App.css";
import RegisterForm from "./components/RegisterForm";
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <RegisterForm sendForm={sendForm} validateCPF={validateCPF}/>
    </Container>
  );
}

function sendForm(data){
  console.log(data);
}

function validateCPF(cpf){
  if(cpf.length !== 11){
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  }else{
    return { valido: true, texto: "" };
  }
}

export default App;
