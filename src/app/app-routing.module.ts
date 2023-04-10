import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./components/users/list/list.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {ProfileComponent} from "./components/users/profile/profile.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/users'},
  {
    path: 'users', children: [
      {path: '', component: ListComponent},
      {path: ':login', component: ProfileComponent},
    ]
  },
  {path: '**', component: NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
