import Toolbar from '@material-ui/core/Toolbar'
import styled from 'styled-components'

export const StyledToolBar = styled(Toolbar)`
display: flex;
justify-content: space-between;
img{
    width: 38px;
    margin-right: 8px;
}

@media screen and (max-device-width : 480px){
width: 90vw;
`
