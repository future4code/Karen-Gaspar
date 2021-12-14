import React from "react"
import { InputsContainer} from "./styled"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"


const LoginForm = () => {

  const { form, onChangeInputs, clearFields } = useForm({ email: "", password: "" })

  const onSubmitLogin = (event) => {
    console.log(form)
    event.preventDefault()

  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitLogin}>
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
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Entrar
          </Button>
        </form>
      </InputsContainer>
  );
}

export default LoginForm;