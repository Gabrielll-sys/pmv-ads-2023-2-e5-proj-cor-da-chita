import React, { useState } from "react";
import IconMinusSquare from "@/assets/icons/IconMinusSquare";
import IconPlusSquare from "@/assets/icons/IconPlusSquare";
import ButtonOnlyIcon from "./ui/ButtonOnlyIcon";

export default function QuantityManagerCart({ props }: any) {
  const [quantidade, setQuantidade] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    //Depois definir regra para colocar definir um valor máximo por pedido,ou não deixar escoolher mais que a quantidade disponível
    setQuantidade(quantidade + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantidade == 1) {
      setQuantidade(1);
    } else {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="w-full ml-2">
      <ButtonOnlyIcon
        className="h-6 mt-2 ml-1"
        isIconOnly
        color="primary"
        variant="ghost"
        size="sm"
        onClick={() => handleDecreaseQuantity()}
      >
        <IconMinusSquare />
      </ButtonOnlyIcon>
      <span className="m-2">{quantidade}</span>

      <ButtonOnlyIcon
        className="h-6 mt-2"
        isIconOnly
        color="primary"
        size="sm"
        variant="ghost"
        onClick={() => handleIncreaseQuantity()}
      >
        <IconPlusSquare />
      </ButtonOnlyIcon>
    </div>
  );
}
