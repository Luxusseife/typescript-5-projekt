import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  // Deklarerar privat nyckel för lagring.
  private storageKey = "mySchedule";

  constructor() {}

  // Hämtar ramschema-lagrade kurser från localStorage. 
  getCourses(): Course[] {
    let courses = localStorage.getItem(this.storageKey);
    return courses ? JSON.parse(courses) : []; 
  }

  // Lägger till kurs i ramschemat och sparar till localStorage.
  addCourse(course: Course): void {
    const courses = this.getCourses(); 
    courses.push(course); 
    localStorage.setItem(this.storageKey, JSON.stringify(courses));
  }
}