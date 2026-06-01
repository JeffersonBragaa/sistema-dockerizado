import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vender-produto',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './vender-produto.component.html',
  styleUrl: './vender-produto.component.css'
})


export class VenderProdutoComponent {
  id!: number;
  produto: any; 

  nomeProduto: string = '';
  quantidadeProduto: string = '';
  precoProduto: string = '';
  quantidadeVendida: number = 0;
constructor(
  private produtoService: ProdutoService,
  private router: Router, 
  private route: ActivatedRoute
  
) { }

ngOnInit() {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.produtoService.getProdutoById(this.id).subscribe({
    next: (produto: any) => {
      this.produto = produto
      alert(`Produto carregado: ${this.produto.produtos.nome}`);
      this.nomeProduto = this.produto.produtos.nome;
      this.quantidadeProduto = this.produto.produtos.quantidade;
      this.precoProduto = this.produto.produtos.preco;
    },
    error: (error) => { 
      console.error('Erro ao carregar produto:', error);
      alert('Erro ao carregar produto. Por favor, tente novamente.');
      this.router.navigate(['/']);
    }
  })
  }

  vender() {
    if (this.quantidadeVendida > 0) {
      alert(`Função de vender em desenvolvimento. Vendendo ${this.quantidadeVendida} unidades de ${this.nomeProduto}`);
      let id = this.id;
      let quantidadeVendida = this.quantidadeVendida;
      console.log('ID do produto a ser vendido:', id);
      console.log('Quantidade a ser vendida:', quantidadeVendida);
      this.produtoService.venderProduto(id, quantidadeVendida).subscribe({
        next: (response) => {
          alert('Produto vendido com sucesso!');
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Erro ao vender produto:', error);
          alert('Erro ao vender produto. Por favor, tente novamente.');
        }
      });
    } else {
      alert('Por favor, informe uma quantidade válida para venda.');
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }

}