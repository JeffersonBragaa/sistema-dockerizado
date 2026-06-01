import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private api = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: any) {
    let url = this.api + 'cadastrar-produto';
    return this.http.post(url, produto);
  }

  getProdutos(){
    let url = this.api + 'produtosAll';
    return this.http.get(url);
  }
  deletarProduto(id: number) {
    let url = this.api + `remover-produto/${id}`;
    return this.http.delete(url);
  }

  getProdutoById(id: number) {
    let url = this.api + `produto/${id}`;
    return this.http.get(url);
  }

  venderProduto(id: number, quantidadeVendida: number) {
    let url = this.api + `produtos/${id}/vender`;
    return this.http.post(url, { quantidade: quantidadeVendida });
  }
}
