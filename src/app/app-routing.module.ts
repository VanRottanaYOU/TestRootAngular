import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { DetailsheroesComponent } from 'src/app/components/detailsheroes/detailsheroes.component';
import { CrudheroComponent } from 'src/app/components/crudhero/crudhero.component'

export const ROUTES : Routes = [
  { path :'', redirectTo: 'heroes',pathMatch:'full'},
  { path :'heroes', component : HeroesComponent},
  { path :'heroes/:page', component : HeroesComponent},
  { path :'hero/:id', component : DetailsheroesComponent},
  { path :'hero/:ajout', component : DetailsheroesComponent},
  { path :'hero/:id/:modif', component : DetailsheroesComponent},
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  declarations: []
})
export class AppRoutingModule { }
