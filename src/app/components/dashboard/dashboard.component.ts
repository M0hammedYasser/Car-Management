import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ReportService} from "../../service/report.service";
import {Report} from "../../model/report";
import {ReportComponent} from "../report/report.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    ReportComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  reports : Report[] = [];

  constructor(private reportService : ReportService) {
  }

  ngOnInit() {
    this.reportService.findLastFourReport().subscribe(res => this.reports = res);
  }

}
