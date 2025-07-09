import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculosAPI} from '../models/veiculo.model'


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<VeiculosAPI>{
    return this.http.get<VeiculosAPI> (`${this.baseUrl}/vehicles`)
  }
}
