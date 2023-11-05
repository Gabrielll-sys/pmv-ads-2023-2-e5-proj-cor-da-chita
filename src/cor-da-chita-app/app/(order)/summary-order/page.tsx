// EM TESTES
// Dados do pedido na finalização da compra
"use client";
import React, { use, useContext, useEffect, useState } from "react";

import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { AddressContext } from "@/contexts/AddressContext/AddressContext";
import { UserContext } from "@/contexts/UserContext/UserContext";
import postOrder from "@/database/order/postOrder";
import { CartItemsContext } from "@/contexts/CartContext/CartItemsContext";
import { Produto } from "@/lib/interface";

export default function SummaryOrder() {
  const route = useRouter();

  const user = useContext(UserContext);
  const address = useContext(AddressContext);
  const { cartItems } = useContext(CartItemsContext);

  const total = 0;

  function handleOrder() {
    const order = {
      items: [
        {
          productId: "6542a425fd304a865bb986f0",
          productName: "TESTE 1",
          productPrice: 29,
        },
      ],
      userName: user.name,
      userEmail: user.email,
      street: address.street,
      neighborhood: address.neighborhood,
      num: address.num,
      city: address.city,
      uf: address.uf,
      cep: address.cep,
      complement: address.complement,
      freight: {
        totalWithFreight: 10,
        freightValue: 10,
      },
      orderPixId: 5555513245,
      orderDate: "2023-11-04T14:13:00.684Z",
      phoneNumber: user.phone,
    };

    const fetchData = async () => {
      const data = await postOrder(order);
      console.log(data);

      return data;
    };
    fetchData();
  }

  return (
    <section className="flex flex-col">
      <h2 className="place-self-center">
        <strong>Resumo do Pedido</strong>
      </h2>

      <div className="my-5">
        {cartItems?.map((item, index) => (
          <div key={index} className="flex justify-between">
            <p>{item.nome}</p>
            <p>
              <strong>R$</strong> {item.preco.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <div className="flex justify-between ">
          <p>
            <strong>Frete</strong>
          </p>
          <p>
            <strong>R$</strong> 0,00
          </p>
        </div>

        <div className="flex justify-between">
          <p>
            <strong>Total com Frete</strong>
          </p>
          <p>
            <strong>R$</strong> 0,00
          </p>
        </div>

        <div className="mt-2">
          {/* Revisar Fluxo aqui */}
          <Button
            color="success"
            variant="ghost"
            onPress={() => route.push("/shop-cart")}
          >
            Editar Carrinho
          </Button>
        </div>
      </div>

      <Divider />

      <div className="my-5">
        <h2 className="mb-2">
          <strong>Dados de Envio</strong>
        </h2>
        <p>
          {address.street}, {address.num}
        </p>
        <p>{address.neighborhood}</p>
        <p>{address.complement ? address.complement : ""}</p>
        <p>{address.cep}</p>
        <p>
          {address.city} - {address.uf}
        </p>

        <div className="mt-2">
          <Button
            color="success"
            variant="ghost"
            onClick={() => route.push("/shipping-data")}
          >
            Editar Endereço
          </Button>
        </div>
      </div>

      <Divider />

      <div className="my-5">
        <h2 className="mb-2">
          <strong>Seus Dados</strong>
        </h2>

        <div>
          <p>{user.name}</p>

          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>

        <div className="mt-2">
          <Button color="success" variant="ghost" onClick={() => route.back()}>
            Editar Dados
          </Button>
        </div>
      </div>

      <Divider />

      <div className="flex flex-col gap-3 my-5">
      <h2 className="mb-2">
          <strong>Modo de Pagamento</strong>
        </h2>

        <Button
          className="mx-20"
          color="success"
          variant="solid"
          onClick={() => alert("Programar PIX")}
        >
          Pagar com <strong>PIX</strong>
        </Button>

        <Button
          className="mx-20"
          color="success"
          variant="solid"
          onClick={() => alert("Programar Cartão")}
        >
          Pagar com <strong>Cartão de Crédito</strong>
        </Button>

        <Button color="primary" onClick={handleOrder}>
          Botao para Teste API
        </Button>
      </div>
    </section>
  );
}
