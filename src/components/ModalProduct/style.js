import styled from "styled-components";

export const Container = styled.div`
  width: 650px;
  max-width: 90vw;
  padding: 20px;

  @media (max-width: 675px) {
    width: 400px;
  }
`;

export const ProductArea = styled.div`
  display: flex;

  @media (max-width: 675px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProductPhoto = styled.img`
  width: 310px;
  border-radius: 10px;
  margin: auto;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  @media (max-width: 675px) {
    margin-bottom: 20px;
  }
`;

export const ProductDetails = styled.div`
  @media (max-width: 675px) {
    margin-bottom: 10px;
  }
`;

export const ProductQuantityArea = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 675px) {
    justify-content: space-around;
  }
`;

export const ProductButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 675px) {
    justify-content: center;
  }
`;

export const ProductName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const ProductIngredients = styled.div`
  font-size: 14px;
`;

export const ProductButton = styled.button`
  border: 0;
  background-color: #073c07;
  box-shadow: 4px 5px 0px #999;
  color: #fff;
  font-size: ${(props) => (props.small ? "13px" : "18px")};
  padding: ${(props) => (props.small ? "5px 10px" : "8px 16px")};
  font-weight: bold;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  background-color: #073c07;
  border-radius: 5px;
  padding: 5px 0;
`;

export const ProductQtImage = styled.img`
  width: 24px;
  height: auto;
  margin: 0 10px;
  cursor: pointer;
`;

export const ProductQtText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
