import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent, title: "Hässle Högskola | Startsida" },
    { path: "courses", component: CoursesComponent, title: "Hässle Högskola | Kurser" },
    { path: "schedule", component: ScheduleComponent, title: "Hässle Högskola | Ramschema" },
    { path: "", redirectTo: "/home", pathMatch: "full" }, 
    { path: "404", component: NotFoundComponent, title: "Hässle Högskola | 404" },
    
    // Wild Card; fångar upp alla odefinierade routes.
    { path: "**", component: NotFoundComponent }
];
