import styled from "styled-components";

export const Container = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: ${(props) => (props.active ? "#0b4d0b" : "transparent")};
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: auto;
`;
