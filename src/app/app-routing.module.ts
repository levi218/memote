import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesfeedComponent } from './notesfeed/notesfeed.component'
const routes: Routes = [
{
	path: '',
	component: NotesfeedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
