import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Egenskaper för att hålla en bildväg.
  image1: string = "assets/images/education.jpg";
  image2: string = "assets/images/students.jpg";
  image3: string = "assets/images/webdesign.jpg";
  image4: string = "assets/images/hassleholm.jpg";
  image5: string = "assets/images/oak.png";
}
