import { createComment } from "../../services/posts"
import TextField from "@material-ui/core/TextField"
import { useForm } from "../../hooks/useForm"
import { Button, CircularProgress } from "@material-ui/core"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import { InputsContainer } from "./styled"
import { useState } from "react"


const PostForm = (props) => {

    useProtectedPage()
    const {id, updatePage} = props
    const {form, onChangeInputs, clearFields} = useForm({ body: "" })
    const [isLoading, setIsLoading] = useState(false)
  
    const onSubmitComment = (event) => {
      event.preventDefault()
      createComment(id, form, clearFields, setIsLoading, updatePage)
    }
    
    return (
        <InputsContainer>
          <form onSubmit={onSubmitComment}>
            <TextField
              type={"text"}
              label={"Comentário"}
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
             {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Comentar</>}
            </Button>
          </form>
        </InputsContainer>
    );
  }
  
  export default PostForm;