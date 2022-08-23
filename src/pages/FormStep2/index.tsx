import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Themer } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //ler e execultar o nome na proxima page

  useEffect(() => {
    if (state.name === "") {
      navigate("/"); //caso não tenha nome ou atualize volta para page 1
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    } // atualizar e mostrar o passo que esta
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3"); //só passa de pagina se estiver diferente de vazio
    } else {
      alert("❌ Preencha os dados.");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });

    // troca level selecionado e borda verde
  };

  return (
    <Themer>
      <C.Container>
        <p>Passo 2/3 - {state.name}</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="😅"
          selected={state.level === 0}
          onClick={() => {
            setLevel(0);
          }}
        />

        <SelectOption
          title="Sou Programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => {
            setLevel(1);
          }}
        />

        <Link to="/" className="backbutton">Voltar</Link>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Themer>
  );
};
