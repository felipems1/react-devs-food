import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
