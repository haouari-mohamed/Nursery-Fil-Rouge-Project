import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  adminName: string = 'Admin'; // Replace with actual admin name
  dailyNotices: any[] = [
    { title: 'Exam schedule', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Parent-Teacher Meeting', description: 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' },
    { title: 'Holiday Notice', description: 'Class ut facilisis in lectus proin egestas volutpat metus.' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}