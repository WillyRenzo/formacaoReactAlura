import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function RegisterForm({ sendForm, validateCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErrors] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendForm({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        id="form-register_nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        id="form-register_sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(e) => {
          let tmpCpf = e.target.value;
          if (tmpCpf.length >= 11) {
            tmpCpf = tmpCpf.substr(0, 11);
          }
          setCpf(tmpCpf);
        }}

        onBlur={(e) => {
          const ehValido = validateCPF(cpf);
          setErrors({ cpf: ehValido });
        }}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        id="form-register_cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            name="form-register_promocao"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            name="form-register_novidade"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegisterForm;
