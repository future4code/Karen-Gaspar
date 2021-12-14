import React from "react"
import { InputsContainer} from "./styled"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"


const SignUpForm = () => {

  const { form, onChangeInputs, clearFields } = useForm({ name: "", email: "", password: "" })

  const onSubmitSignUp = (event) => {
    console.log(form)
    event.preventDefault()

  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitSignUp}>
        <TextField
            type={"text"}
            label={"Nome"}
            name={"name"}
            value={form.name}
            onChange={onChangeInputs}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
          />
          <TextField
            type={"email"}
            label={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={onChangeInputs}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
          />
          <TextField
            type={"password"}
            label={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChangeInputs}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            inputProps = {{pattern: "^.{8,}"}}
            title={"A senha deve ter no mínimo 8 e no máximo 30 caracteres"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Cadastrar
          </Button>
        </form>
      </InputsContainer>
  );
}

export default SignUpForm;