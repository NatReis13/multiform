import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Themer } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";


export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //ler e execultar o nome na proxima page

  useEffect(() => {
    if (state.name === "") {
      navigate("/"); //caso não tenha nome ou atualize volta para page 1
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    } // atualizar e mostrar o passo que esta
  }, []);

  const handleNextStep = () => {
   if(state.email !== '' && state.github !== ''){
    console.log(state); //tem que enviar para um servidor aqui
   } else{
    alert("Preecha os dados!");
   }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    }); // mandar o valor que esta no campo digitado
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    }); // mandar o valor que esta no campo digitado
  };


  return (
    <Themer>
      <C.Container>
        <p>Passo 3/3 📃</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos.</p>

        <hr />

        <label>
          Qual o seu email?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual o seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backbutton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
       
      </C.Container>
    </Themer>
  );
};
