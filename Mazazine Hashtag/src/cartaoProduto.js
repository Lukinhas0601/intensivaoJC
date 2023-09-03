import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo(){

    for (const produtoCatalago of catalogo){
        const cartaoProduto =  `<div class= "border-solid shadow-xl shadow-slate-400 w-48 m-2 flex flex-col p-2 justify-between rounded-lg group  ${produtoCatalago.feminino ? "feminino": "masculino"}" id="card-produto-${produtoCatalago.id}">
    <img class="group-hover:scale-110 duration-300 my-3 rounded-lg " src="./assets/img/${produtoCatalago.imagem}" alt="Produto 1" />
    <p class='text-sm'>${produtoCatalago.marca}</p>
    <p class="text-sm">${produtoCatalago.nome}</p>
    <p class="text-sm">$${produtoCatalago.preco}</p>
    <button id='adicionar-${produtoCatalago.id}'class="bg-slate-950 text-slate-200 hover:bg-slate-700 "><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;
    };
    
    for (const produtoCatalago of catalogo){

        document
        .getElementById(`adicionar-${produtoCatalago.id}`)
        .addEventListener('click',() => adicionarAoCarrinho(produtoCatalago.id));
    }
}