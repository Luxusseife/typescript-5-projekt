import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursedataService } from '../services/coursedata.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // Egenskaper för listor, filter, paginering och kursräknare.
  courseList: Course[] = [];
  filteredCourseList: Course[] = [];
  filterValue: string = "";
  ascending: boolean = true;
  subjects: string[] = [];
  courses: Course[] = [];
  totalCourses: number = 0;
  subjectFilter: string = "";
  p: number = 1;
  itemsPerPage: number = 10;

  // Egenskap för att hålla en bildväg.
  image: string = "assets/images/oak.png";

  // Konstruktor som injicerar nödvändiga tjänster.
  constructor(private coursedataService: CoursedataService, private scheduleService: ScheduleService) { }

  // Initialisering av komponenten.
  ngOnInit() {
    // Hämtar kurser från CoursedataService.
    this.coursedataService.getCourses().subscribe(data => {

      // Hämtar lokalt sparade kurser från ScheduleService.
      const savedCourses = this.scheduleService.getCourses();

      // Mappar kursdata och markerar kurser som redan är sparade.
      this.courseList = data.map(course => ({
        ...course,
        isStarred: !!savedCourses.find(savedCourse => savedCourse.courseCode === course.courseCode)
      }));

      // Kopierar den kompletta kurslistan till den filtrerade listan.
      this.filteredCourseList = [...this.courseList];

      // Extraherar unika ämnen från kursdatan.
      this.extractSubjects(data);

      // Färdigstället den kompletta kurslistan och räknar totalt antal kurser.
      this.courses = data;
      this.totalCourses = this.courses.length;
    });
  }

  // Filtrering av kursnamn och/eller kurskod.
  applyFilter(): void {
    this.filteredCourseList = this.courseList.filter((course) =>
      course.courseName.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  // Extrahera unika ämnen från json-filen.
  extractSubjects(courses: Course[]): void {
    this.subjects = [...new Set(courses.map(course => course.subject))];
  }

  // Filtrering av kurser efter valt ämne.
  filterCoursesBySubject(subject: string = ''): void {
    this.filteredCourseList = subject
      ? this.courseList.filter(course => course.subject === subject)
      : this.courseList;
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
    if (this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.courseName.localeCompare(b.courseName)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.courseName.localeCompare(a.courseName)));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av poäng i växlande fallande/stigande ordning.
  sortByPoints(): void {
    if (this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.points - b.points));
    } else {
      this.filteredCourseList.sort((a, b) => (b.points - a.points));
    }
    this.ascending = !this.ascending;
  }

  // Sortering av ämne i växlande fallande/stigande ordning.
  sortBySubject(): void {
    if (this.ascending) {
      this.filteredCourseList.sort((a, b) => (a.subject.localeCompare(b.subject)));
    } else {
      this.filteredCourseList.sort((a, b) => (b.subject.localeCompare(a.subject)));
    }
    this.ascending = !this.ascending;
  }

  // Växlar status (sparad favorit) för en kurs.
  toggleStar(course: Course): void {
    if (!course.isStarred) {
      course.isStarred = true;

      // Sparar kursen till localStorage.
      this.scheduleService.addCourse(course);
    }
  }
}