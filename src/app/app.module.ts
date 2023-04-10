import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {ListComponent} from './components/users/list/list.component';
import {usersReducer} from "./ngrx/users/users.reducer";
import {UsersEffects} from "./ngrx/users/users.effects";
import {HomeComponent} from "./components/home/home.component";
import {RouterOutlet} from "@angular/router";
import {NotfoundComponent} from './components/notfound/notfound.component';
import {ProfileComponent} from './components/users/profile/profile.component';
import {FollowersComponent} from './components/users/profile/followers/followers.component';
import {ReposComponent} from './components/users/profile/repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    NotfoundComponent,
    ProfileComponent,
    FollowersComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({usersState: usersReducer}),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument(),
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
