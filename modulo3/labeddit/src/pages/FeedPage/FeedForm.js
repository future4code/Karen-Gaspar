import { createPost } from "../../services/posts"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button, CircularProgress } from "@material-ui/core"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { InputsContainer } from "./styled"
import { useState } from "react"


const FeedForm = (props) => {

  useProtectedPage()
  const { form, onChangeInputs, clearFields } = useForm({ title: "", body: "" })
  const [isLoading, setIsLoading] = useState(false)
  const { updatePage } = props

  const onSubmitFeed = (event) => {
    event.preventDefault()
    createPost(form, clearFields, setIsLoading, updatePage)
  }

  return (
    <InputsContainer>
      <form onSubmit={onSubmitFeed}>
        <TextField
          type={"text"}
          label={"Título"}
          name={"title"}
          value={form.title}
          onChange={onChangeInputs}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          required
        />
        <TextField
          label={"O que você está pensando?"}
          name={"body"}
          value={form.body}
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
          {isLoading ? <CircularProgress color={"primary"} size={24} /> : <>Postar</>}
        </Button>
      </form>
    </InputsContainer>
  );
}

export default FeedForm;