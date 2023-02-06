import styled from "styled-components";

export const ProductsArea = styled.div`
  margin-top: 10px;
  height: max-content;
  padding: 25px;
  width: 90%;
  background-color: #eee;
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

  @media (max-width: 1024px) {
    margin-top: 15px;
    gap: 10px;
    padding-bottom: 10px;
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
`;

export const ProductName = styled.p`
  font-weight: bold;
  font-size: 19px;

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const Details = styled.div`
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 425px) {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 0;
  border-radius: 5px;
  background-color: #0f0;
  color: #000;
`;
