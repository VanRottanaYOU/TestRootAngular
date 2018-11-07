import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route} from '@angular/router';
import { Hero, name } from 'src/app/models/heroes';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/services/service-gen.service';

@Component({
  selector: 'app-crudhero',
  templateUrl: './crudhero.component.html',
  styleUrls: ['./crudhero.component.css']
})
export class CrudheroComponent implements OnInit {

  Hero : Observable<Hero>;

  constructor(
    private service:ServiceGenService<Hero>,private route:ActivatedRoute)
     {  }

  ngOnInit() {
  }
}
