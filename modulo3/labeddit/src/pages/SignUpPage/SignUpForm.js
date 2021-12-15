import React from "react"
import { InputsContainer} from "./styled"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { signUp } from "../../services/user"
import { useHistory } from "react-router-dom"


const SignUpForm = ({setRigthButton}) => {
  
  useUnprotectedPage()
  const history = useHistory()
  const { form, onChangeInputs, clearFields } = useForm({ username: "", email: "", password: "" })

  const onSubmitSignUp = (event) => {
    event.preventDefault()
    signUp(form, clearFields, history, setRigthButton)
  }

  return (
      <InputsContainer>
        <form onSubmit={onSubmitSignUp}>
        <TextField
            type={"text"}
            label={"Nome"}
            name={"username"}
            value={form.username}
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