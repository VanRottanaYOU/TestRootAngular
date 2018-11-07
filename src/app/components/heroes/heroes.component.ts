import { Component, OnInit } from '@angular/core';
import { Hero, name } from 'src/app/models/heroes';
import { Observable } from 'rxjs';
import { ActivatedRoute,Route} from '@angular/router';
import { ServiceGenService } from 'src/app/services/service-gen.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  listeHeroes : Observable<Hero[]>;
  currentPage : number;
  HeroesParPage = 5;

  constructor(
    private service:ServiceGenService<Hero>,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param: {page:string}) => {
      this.currentPage = +param.page || 0;
      const skip = this.currentPage * this.HeroesParPage;
      this.load(skip);
    })
  }

  load(skip) {
    this.listeHeroes = this.service.getListT(name);
  }

}
