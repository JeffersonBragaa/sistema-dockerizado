import { Routes } from '@angular/router';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { VenderProdutoComponent } from './components/vender-produto/vender-produto.component';

export const routes: Routes = [
    {path: '', component: ListarProdutosComponent},
    {path: 'produto/novo', component: CadastrarProdutoComponent},
    {path: 'produto/vender/:id', component: VenderProdutoComponent}
];
