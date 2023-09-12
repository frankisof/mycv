import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(private headerService: HeaderService ){

}

nombre: string = "fake";
  email:string="fake";
  cel:string="fake";
  titulo:any = [];
  misionVida: string = "fake";
  ciudad:string="fake";
  pais:string="fake";
  redSocial:string="fake";
  foto: string = "fake";


  ngOnInit(): void {
    this.headerService.getHeader()
    .subscribe((data:any)=>{
      alert(data)
      this.nombre=data.name;
      this.email=data.email;
      this.cel=data.cel;
      this.titulo=data.gradosTitulos;
      this.misionVida=data.misionVida;
      this.ciudad=data.ciudad;
      this.pais=data.pais;
      this.redSocial=data.redSocial;
      this.foto=data.foto;
    })
  }

}
