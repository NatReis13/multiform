import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Themer } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //ler e execultar o nome na proxima page

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    }); // atualizar e mostrar o passo que esta
  },[]);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2"); //só passa de pagina se estiver diferente de vazio
    }else{
        alert("❌ Preencha os dados.");
    };
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    }); // mandar o valor que esta no campo digitado
  };

  return (
    <Themer>
      <C.Container>
        <p>Passo 1/3 📃</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo:
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
       
      </C.Container>
    </Themer>
  );
};
