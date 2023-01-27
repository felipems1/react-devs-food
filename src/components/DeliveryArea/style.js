import styled from "styled-components";

export const DeliveryArea = styled.div`
  margin-top: 10px;
  width: 20%;
  height: 420px;
  background-color: #eee;
  padding: 25px;

  @media (max-width: 1075px) {
    width: 30%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const Title = styled.h3`
  color: #222;
`;

export const Description = styled.h4`
  color: #444;
  font-size: 14px;
  margin-top: 7px;
`;

export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 13px;
  outline: none;
  border: none;
  border-radius: 5px;
`;
