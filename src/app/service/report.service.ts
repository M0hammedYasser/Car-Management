import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Report} from "../model/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Report[]>(`${environment.url}/report`);
  }

  findTodayReports(){
    return this.http.get<Report[]>(`${environment.url}/report/today`);
  }

  insert(report: Report) {
    return this.http.post<Report>(`${environment.url}/report`, report);
  }
}
