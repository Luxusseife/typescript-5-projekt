import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  // Nyckel som används för att lagra och hämta kurser från localStorage.
  private storageKey = "mySchedule";

  constructor() {}

  // Hämtar kurser från localStorage. Om inga kurser finns returneras en tom array.
  getCourses(): Course[] {
    let courses = localStorage.getItem(this.storageKey); 
    // Parsar JSON-strängen eller returnerar en tom array.
    return courses ? JSON.parse(courses) : []; 
  }

  // Lägger till en ny kurs i localStorage.
  addCourse(course: Course): void {
    const courses = this.getCourses();
    courses.push(course);

    // Sparar den uppdaterade listan i localStorage.
    localStorage.setItem(this.storageKey, JSON.stringify(courses)); 
  }

  // Tar bort en kurs från localStorage baserat på kurskoden.
  removeCourse(courseCode: string): void {
    let courses = this.getCourses();

    // Filtrerar bort kursen med den specificerade kurskoden.
    courses = courses.filter((c) => c.courseCode !== courseCode); 
    
    // Sparar den uppdaterade listan i localStorage.
    localStorage.setItem(this.storageKey, JSON.stringify(courses)); 
  }
}
