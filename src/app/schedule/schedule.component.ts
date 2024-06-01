import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  // Egenskaper för kurslista samt kurs- och poängräknare.
  savedCourses: Course[] = [];
  totalPoints: number = 0;

  // Egenskap för att hålla en bildväg.
  image: string = "assets/images/oak.png";

  // Konstruktor som injicerar nödvändiga tjänster.
  constructor(private scheduleService: ScheduleService) {}

  // Initialisering av komponenten.
  ngOnInit(): void {
    this.savedCourses = this.scheduleService.getCourses();
    // Beräknar totalpoängen för kurserna.
    this.calculateTotalPoints(); 
  }

  // Raderar kurs.
  removeCourse(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
    // Hämtar sparade kurser.
    this.savedCourses = this.scheduleService.getCourses();
    // Beräknar totalpoängen för kurserna efter radering.
    this.calculateTotalPoints();
  }

  // Beräknar totala poängen på kurser i ramschemat.
  calculateTotalPoints(): void {
    this.totalPoints = this.savedCourses.reduce((sum, course) => sum + course.points, 0);
  }
}
