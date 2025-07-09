import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Veiculo } from '../models/veiculo.model';
import { VehicleData } from '../models/vehicleData.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData!: VehicleData;

  selectCarForms = new FormGroup({
    carId: new FormControl('')
  })

  constructor(private dashboardservice:DashboardService){}
  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res)=>{
      console.log(res.vehicles)
      this.vehicles = res.vehicles
    });

    this.selectCarForms.controls.carId.valueChanges.subscribe((id)=>{
      this.selectedVehicle = this.vehicles[Number(id) - 1]
      console.log(this.selectedVehicle)
    })
    }


}
