import { Routes, RouterModule, ActivatedRoute} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PublicationComponent } from './pages/publication/publication.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';


export const routes: Routes = [
    {path:'',redirectTo: '/home', pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'publication',component:PublicationComponent},
    {path:'workshop',component:WorkshopComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}