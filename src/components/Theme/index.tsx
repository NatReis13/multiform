import { ReactNode } from "react";
import * as C from "./styles";
import { Header}  from '../Header';

type Props = {
  children: ReactNode;
};

export const Themer = ({children}: Props) =>{
    return(
        <C.Container>
<C.Area>
    <Header/>
    <C.Steps>
        <C.Sidebar>
✔
        </C.Sidebar>
        <C.Page>
            {children}
        </C.Page>
    </C.Steps>
</C.Area>
        </C.Container>
    )
}
