import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Routes, RouterModule} from "@angular/router";
import {CakeService} from "./services/cake.service";
import {CakeComponent} from "./components/cake.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    CakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CakeService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
