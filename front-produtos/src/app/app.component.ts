import { Component, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListarProdutosComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-produtos';
}
