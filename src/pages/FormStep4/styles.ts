import styled from "styled-components";

export const Container = styled.div`
width: 100%;
p{
    font-size: 16px;
    color: #B8B8D4;
    }
h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
}

hr{
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
}


button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }



`;
export const Row = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

export const Col = styled.div`
width: 50%;
flex: 1;

p{
    font-size: 16px;
    margin-bottom: 10px;} 

table{
th, td {
  border: 1px solid;
  font-size: 20px;
  background-color: #010332;
  color: #B8B8D4;
  border: 0px transparent;
} 
  } `;


export const Img = styled.img`
display: flex;
margin-top: 0%;
vertical-align: top;
`
