import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vender-produto',
  imports: [
    CommonModule
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
  private proutosService: ProdutoService,
  private router: Router, 
  private route: ActivatedRoute
  
) { }

ngOnInit() {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  this.proutosService.getProdutoById(this.id).subscribe({
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

}