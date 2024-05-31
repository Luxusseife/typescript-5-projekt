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
  savedCourses: Course[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.savedCourses = this.scheduleService.getCourses();
  }
}
