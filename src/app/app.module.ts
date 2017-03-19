import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AngularFireModule} from "angularfire2";
import {Routes, RouterModule} from "@angular/router";
import {CakeService} from "./services/cake.service";
import {CakeComponent} from "./components/cake/details/cake.component";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {MhCardComponent} from "./directives/mh-card/mhcard.directive";
import {CreateCakeComponent} from "./components/cake/create/createcake.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'}
];
export const firebaseConfig = {
  apiKey: "AIzaSyAkwmZU3OIqwk35ojuxtDCKWf99CgZtkSM",
  authDomain: "nextcake-88525.firebaseapp.com",
  databaseURL: "https://nextcake-88525.firebaseio.com",
  storageBucket: "nextcake-88525.appspot.com",
  messagingSenderId: "671267282959"
};

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    CreateCakeComponent,
    MhCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    Ng2Bs3ModalModule,
    NgbModule.forRoot()
  ],
  providers: [CakeService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
