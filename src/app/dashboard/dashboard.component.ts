import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Veiculo } from '../models/veiculo.model';
import { VehicleData } from '../models/vehicleData.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarroVin } from '../utils/carroVinInterface';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {

  vehicles: Veiculo[] = [];
  selectedVehicle!: Veiculo;
  vehicleData!: VehicleData;

  carroVin!: CarroVin;
  reqVin!: Subscription;

  selectCarForms = new FormGroup({
    carId: new FormControl('')
  })
  vinForm = new FormGroup({
    vin : new FormControl('')
  })
  
  onChanges(){
    this.vinForm.controls.vin.valueChanges.subscribe((valor)=>{
      this.reqVin = this.dashboardservice.buscarVin(valor as string).subscribe((res) => {
        this.carroVin = res
      })
    })
  }

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.getVehicles().subscribe((res) => {
      console.log(res.vehicles)
      this.vehicles = res.vehicles
    });

    this.selectCarForms.controls.carId.valueChanges.subscribe((id) => {
      this.selectedVehicle = this.vehicles[Number(id) - 1]
      console.log(this.selectedVehicle)
    })
    this.onChanges( )
    
  }
  ngOnDestroy(): void {
    this.reqVin.unsubscribe()
  }
}

