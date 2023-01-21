import { useState } from "react";
import * as C from "./style";

const DeliveryArea = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [number, setNumber] = useState("");
  const [bairro, setBairro] = useState("");

  return (
    <C.DeliveryArea>
      <C.Title>Endereço de Entrega</C.Title>
      <C.Description>
        Informe o endereço onde deseja receber seu pedido
      </C.Description>
      <C.Form>
        <C.Input
          type="text"
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <C.Input
          type="text"
          placeholder="Rua"
          onChange={(e) => setRua(e.target.value)}
        />
        <C.Input
          type="text"
          placeholder="Número"
          onChange={(e) => setNumber(e.target.value)}
        />
        <C.Input
          type="text"
          placeholder="Bairro"
          onChange={(e) => setBairro(e.target.value)}
        />
      </C.Form>
    </C.DeliveryArea>
  );
};

export default DeliveryArea;
