import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { CarroVin } from '../utils/carroVinInterface';
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
  buscarVin(codigoVin: string): Observable<CarroVin>{
    const reqVin = this.http.post<CarroVin>(`${this.baseUrl}/vehicleData`, {vin: codigoVin})
    return reqVin
  }
}
