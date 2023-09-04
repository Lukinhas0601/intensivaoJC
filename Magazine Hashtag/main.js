import { renderizarCatalogo } from "./src/cartaoProduto";
import { inializarFiltros } from "./src/filtrosCatalagos";
import {
  atualizarPrecoCarrinho,
  inicializarCarrinho,
  renderizarProdutosCarrinho,
} from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inializarFiltros();