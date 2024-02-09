import { Component } from '@angular/core';
import { UcfirstPipe } from '../../pipes/ucfirst.pipe';
import { HeaderComponent } from '../../components/header/header.component';
import { FranceMapComponent } from '../../components/france-map/france-map.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { DeptModelService } from '../../dept-model.service';
import { DatalistComponent } from '../../datalist/datalist.component';


type RegionData = {
  code: string,
  name: string,
}

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [
    UcfirstPipe,
    HeaderComponent,
    FranceMapComponent,
    CommonModule,
    DatalistComponent,
  ],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss'
})
export class RegionsComponent {
  public activePage!: string

  constructor(private toastr: ToastrService, private deptModelService: DeptModelService) {
    this.activePage = 'regions'
  }

  getClickedRegionCode(code: any, dataa: any){
    fetch("https://geo.api.gouv.fr/departements?codeRegion=" + code['code'])
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.toastr.success('Data fetched successfully for ' + code['name'], 'Data Fetched!');
      this.deptModelService.setData(dataa);
    });
  }
}
