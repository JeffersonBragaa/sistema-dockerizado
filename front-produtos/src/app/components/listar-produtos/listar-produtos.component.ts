import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  imports: [CommonModule],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent {
  constructor(
    private proutosService: ProdutoService,
    private router: Router

  ) { }

  produtos: any[] = [];

  ngOnInit() {
    console.log('Inciou corretamente')
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.proutosService.getProdutos().subscribe((dados: any) => {
      console.log('dados:', dados);
      this.produtos = dados.produtos;
    })
  }

  cadastrarProduto() {
    this.router.navigate(['/produto/novo']);
    console.log('Navegando para a página de cadastro de produto');
  }

  deletarProduto(id: number) {
    console.log('Deletar produto com ID:', id);
    this.proutosService.deletarProduto(id).subscribe(() => {
      console.log('Produto deletado com sucesso');
      this.carregarProdutos();
    });

  }

  venderProduto(id: number) {
    this.router.navigate(['produto/vender', id]);
  }
}
