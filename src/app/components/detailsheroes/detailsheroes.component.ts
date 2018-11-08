import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Hero, name, Address } from 'src/app/models/heroes';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/services/service-gen.service';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-detailsheroes',
  templateUrl: './detailsheroes.component.html',
  styleUrls: ['./detailsheroes.component.css']
})
export class DetailsheroesComponent implements OnInit {

  Heroes: Observable<Hero[]>;

  id: number;
  modif: string;
  modifboolean : boolean;

  private nom :string;
  private name :string;
  private adresse : Address[]=[];
  private street = '';
  private city   = '';
  private state  = '';
  private zip    = '';

  constructor(
    private service: ServiceGenService<Hero>, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("this.route.params : " + this.route.params)
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.modif = params['modif'];

      this.route.params.subscribe((param: { id: number }) => {
        this.Heroes = this.service.getListT(name).pipe<Hero[]>
          (
          map(
            (data) => {
              console.log(data)
              return data.filter(
                (Hero) => {
                  if (Hero.id == param.id) {
                    return true;
                  }
                }
              );
            }
          )
          )
      });

      if (this.modif == undefined) {
          this.modifboolean=true
      }else{
        this.modifboolean=false
      }

    });

  }

  modifier(hero : Hero) {
    console.log(hero)
    this.id =hero.id;
    hero.name=this.name;
    let adresse = new Address(this.street, this.city, this.state,this.zip)
    this.adresse[this.adresse.length]=adresse
    hero.addresses=this.adresse;
   
    this.service.putT(hero,name,this.id); 
  }

}
