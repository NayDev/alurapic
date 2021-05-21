import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    photos = [
      {
        url:'https://static.mundodasmensagens.com/upload/textos/a/-/a-vida-e-feita-de-escolhas-e-a-minha-escolha-e-ser-feliz-38WMj-cxl.jpg',
        description: 'VIDA'
      },
      {
        url:'https://www.stoodi.com.br/wp-content/uploads/2020/09/fases-da-lua-2.png',
        description: 'LUA'
      }
    ]
}
