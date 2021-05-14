import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WallComponent } from './wall/wall.component';
import { PostCreateComponent} from './post-create/post-create.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UsersComponent} from './users/users.component';

const routes: Routes = [
  
    {path:'', component:WallComponent},
    {path:'create', component:PostCreateComponent},
    {path:'detail', component:PostDetailComponent},
    {path:'users', component:UsersComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }