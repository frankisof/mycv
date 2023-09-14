import { Component , OnInit} from '@angular/core';
import { InterestsService } from '../services/interests.service';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
constructor(private interests : InterestsService){}
Interests : any = [];
habiliad  : string = "fake";
habilidad1: string = "fake";
interes_nesesarias: any = [];

ngOnInit(): void {

  this.interests.getHeader()
  .subscribe( (data: any) => {
    this.Interests = data
    console.log(data)
})

}







}