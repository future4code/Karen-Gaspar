import { createPost } from "../../services/posts"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import { InputsContainer } from "./styled"


const FeedForm = () => {

    useProtectedPage()
    const { form, onChangeInputs, clearFields} = useForm({ title: "", body: "" })
  
    const onSubmitFeed = (event) => {
      event.preventDefault()
      createPost(form, clearFields)
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
              type={"text"}
              label={"Post"}
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
              Postar
            </Button>
          </form>
        </InputsContainer>
    );
  }
  
  export default FeedForm;