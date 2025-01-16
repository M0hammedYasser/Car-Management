import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {RouterLink} from "@angular/router";
import {Report} from "../../model/report";
import {ReportService} from "../../service/report.service";
import {NgForOf, NgIf} from "@angular/common";
import {SearchPipe} from "../../pipes/search.pipe";
import {SearchComponent} from "../search/search.component";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    SearchPipe,
    SearchComponent,
    NgIf
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {


  reports: Report[] = [];
  searchText: string = ''
  num = 0;

  constructor(private service: ReportService) {
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue
  }

  ngOnInit() {
    this.findTodayReports();
  }

  findAll() {
    this.service.findAll().subscribe(res => this.reports = res);
    this.num = 0;
  }

  findTodayReports() {
    this.service.findTodayReports().subscribe(res => this.reports = res);
    this.num = 1;
  }

  change() {
    if (this.num == 0)
      this.findTodayReports();
    else if (this.num == 1)
      this.findAll();
  }
}
