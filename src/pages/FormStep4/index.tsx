import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Themer } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import imgagemEscolhida1 from "../../svgs/imgok.png";

export const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm(); //ler e execultar o nome na proxima page

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    }); // atualizar e mostrar o passo que esta
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    }); // mandar o valor que esta no campo digitado
  };

  return (
    <Themer>
      <C.Container>
        <p>Passo 4/4 📃</p>
        <h1>Cadastro efetuado com sucesso!!</h1>
        <p>Parabéns 🥳.</p>

        <hr />
        <p>Informações do Cadastro:</p>
        
        <C.Row>
          
          <C.Col>
            <table>
              <tr>
                <td>Name:</td>
                <td>{state.name}</td>
              </tr>
              <tr>
                <td>Level:</td>
                {/* <td>{state.level === 0 ? "Iniciante" : "Programador" }</td> (condição para retorno de valor)*/}
                {state.level === 0 && (<td> Iniciante</td>)}
                {state.level === 1 && (<td> Programador</td>)} 
              </tr>
              <tr>
                <td>Email:</td>
                <td>{state.email}</td>
              </tr>
              <tr>
                <td>Github:</td>
                <td>{state.github}</td>
              </tr>
            </table>
          </C.Col>
          <C.Col>
            <C.Img src={imgagemEscolhida1} />
          </C.Col>
        </C.Row>
      </C.Container>
    </Themer>
  );
};
