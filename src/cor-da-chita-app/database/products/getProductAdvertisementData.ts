// Query para exibir dados na tela de anúncio do produto (advertisement)
import { client } from "../../lib/sanity";

export default async function getProductAdvertisementData(id: string) {
  try {
    const query = `* [_type == "produto" && _id == id]{
        _id,
        nome,
        categoria,
        descricao,
        preco,
        peso,
        comprimento,
        largura,
        altura,        
        'imagem':imagem.asset->url,        
      }`;

    const data = await client.fetch(query);

    return data;
  } catch (e) {
    console.log(e);
  }
}
