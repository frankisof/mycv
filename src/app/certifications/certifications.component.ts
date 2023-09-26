import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../services/certifications.service';
@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit{
constructor(private certifications : CertificationsService){}
Certifications : any = [];
habiliad  : string = "fake";
habilidad1: string = "fake";
habilidades_nesesarias: any = [];

ngOnInit(): void {
  this.certifications.getHeader()
  .subscribe( (data: any) => {
    this.Certifications = data
    console.log(data)
})

}
}




