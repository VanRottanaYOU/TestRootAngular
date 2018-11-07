import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { DetailsheroesComponent } from 'src/app/components/detailsheroes/detailsheroes.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceGenService } from './services/service-gen.service';
import { CrudheroComponent } from './components/crudhero/crudhero.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetailsheroesComponent,
    CrudheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
        FormsModule
  ],
  providers: [ServiceGenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
