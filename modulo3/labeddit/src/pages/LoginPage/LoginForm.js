import React, { useState } from "react"
import { InputsContainer } from "./styled"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { login } from "../../services/user"
import { useHistory } from 'react-router-dom'
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { CircularProgress } from "@material-ui/core"


const LoginForm = ({ setRigthButton }) => {

  useUnprotectedPage()
  const history = useHistory()
  const { form, onChangeInputs, clearFields } = useForm({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitLogin = (event) => {
    event.preventDefault()
    login(form, clearFields, history, setRigthButton, setIsLoading)

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
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
        </Button>
      </form>
    </InputsContainer>
  );
}

export default LoginForm;