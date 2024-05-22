import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursedataService } from '../services/coursedata.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  
  // Egenskaper.
  courseList: Course[] = [];
  filteredCourseList: Course[] = [];
  filterValue: string = "";
  ascending: boolean = true;
  subjects: string[] = []; // Array to hold unique subjects

  // Konstruktor.
  constructor(private coursedataService: CoursedataService) { }

  // Initialisering.
  ngOnInit() {
    this.coursedataService.getCourses().subscribe(data => {
      this.courseList = data;
      this.filteredCourseList = data;
      this.extractSubjects(data);
    })
  }

  // Filtrering av kursnamn och/eller kurskod.
  applyFilter(): void {
    this.filteredCourseList = this.courseList.filter((course) =>
      course.courseName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  // Sortering av kurskod i växlande fallande/stigande ordning.
  sortByCode(): void {
    if (this.ascending) {
      this.filteredCourseList.sort((a, b) => a.courseCode.localeCompare(b.courseCode));
    } else {
      this.filteredCourseList.sort((a, b) => b.courseCode.localeCompare(a.courseCode));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av kursnamn i växlande fallande/stigande ordning.
  sortByName(): void {
    if(this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.courseName.localeCompare(b.courseName)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.courseName.localeCompare(a.courseName)));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av poäng i växlande fallande/stigande ordning.
  sortByPoints(): void {
    if(this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.points - b.points));
    } else {
      this.filteredCourseList.sort((a, b) => (b.points - a.points));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av ämne i växlande fallande/stigande ordning.
  sortBySubject(): void {
    if(this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.subject.localeCompare(b.subject)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.subject.localeCompare(a.subject)));
    }
    this.ascending = !this.ascending;
  }

  // Extrahera unika ämnen från json-filen.
  extractSubjects(courses: any[]): void {
    this.subjects = [...new Set(courses.map(course => course.subject))];
  }
}