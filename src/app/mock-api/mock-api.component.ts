import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-api',
  templateUrl: './mock-api.component.html',
  styleUrls: ['./mock-api.component.scss'],
})
export class MockApiComponent implements OnInit {
  length = 0;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getAllData().subscribe((data) => {
      this.length = data.length;
    });
  }
}
