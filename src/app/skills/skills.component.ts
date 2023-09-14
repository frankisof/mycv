import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
constructor(private skill : SkillsService){}
Habilidad : any = [];
habiliad  : string = "fake";
habilidad1: string = "fake";
habilidades_nesesarias: any = [];

ngOnInit(): void {
  this.skill.getHeader()
  .subscribe( (data: any) => {
    this.Habilidad = data
    console.log(data)
})

}
}







