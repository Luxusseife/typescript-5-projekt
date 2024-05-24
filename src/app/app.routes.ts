import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "info", component: InfoComponent },
    { path: "courses", component: CoursesComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, 
    { path: "404", component: NotFoundComponent },
    
    // Wild Card; fångar upp alla odefinierade routes.
    { path: "**", component: NotFoundComponent }
];
