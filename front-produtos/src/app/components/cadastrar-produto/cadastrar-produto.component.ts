import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css'
})
export class CadastrarProdutoComponent {

  nome: string = '';
  preco: string = '';
  quantidade: string = '';

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  cadastrar() {
    const produto = {
      nome: this.nome,
      preco: Number(this.preco),
      quantidade: Number(this.quantidade)
    };

    this.produtoService.cadastrarProduto(produto).subscribe(() => {
      console.log('Produto cadastrado!');
      this.router.navigate(['/']);
    });
  }

  voltarLista() {
    this.router.navigate(['/']);
  }
}