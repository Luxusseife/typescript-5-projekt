import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursedataService {

  // Privat egenskap.
  file: string = "assets/miun_courses.json";

  // Konstruktor.
  constructor(private http: HttpClient) { }

  // Funktion som hämtar en lista av kurser och returnerar en Observable.
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.file);
  }
}
