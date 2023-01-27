import styled from "styled-components";

export const ProductsArea = styled.div`
  margin-top: 10px;
  width: 70%;
  background-color: #fff;
  padding: 25px;
  background-color: #eee;

  @media (max-width: 1075px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    padding: 20px;
    width: 90%;
    margin-top: 80px;
  }
`;

export const Title = styled.h3`
  color: #222;
`;

export const ProductArea = styled.div``;

export const Product = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #bbb;
  padding-bottom: 20px;

  @media (max-width: 1050px) {
    margin-top: 10px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 1050px) {
    width: 50px;
  }
`;

export const ProductName = styled.p`
  font-weight: bold;
  font-size: 19px;

  @media (max-width: 1050px) {
    font-size: 15px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  background-color: #aaa;
  padding: 5px;
  border-radius: 7px;
  gap: 10px;
`;

export const Decrement = styled.div`
  cursor: pointer;
`;

export const Qt = styled.div``;

export const Increment = styled.div`
  cursor: pointer;
`;

export const ProductPrice = styled.div`
  font-weight: bolder;

  @media (max-width: 1050px) {
    font-size: 13px;
  }
`;

export const Details = styled.div`
  margin-top: 20px;

  @media (max-width: 1050px) {
    margin-top: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TotalItems = styled.div``;

export const Delivery = styled.div``;

export const Value = styled.div``;

export const TotalPrice = styled.div`
  font-weight: bold;
`;

export const TotalValue = styled.div`
  font-weight: bold;
`;
