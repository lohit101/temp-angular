import { Component } from '@angular/core';
import { DeptModelService } from '../dept-model.service';
import { ToastrService } from 'ngx-toastr';

type MuncipalitiesData = {
  code: string,
  name: string,
  codeDept: string,
  codeRegion: string,
  population: number,
}

@Component({
  selector: 'app-datalist',
  standalone: true,
  imports: [],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.scss'
})
export class DatalistComponent {
  // sharedData: any;

  // constructor(private deptModelService: DeptModelService) {
  //   this.sharedData = this.deptModelService.getData();
  //   console.log(this.sharedData);
  // }

  public activePage!: string

  constructor(private toastr: ToastrService, private deptModelService: DeptModelService) {
    this.activePage = 'regions'
  }

  getClickedRegionCode(code: any, dataa: any){
    fetch("https://geo.api.gouv.fr/communes?codeDepartement=" + code['code'])
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.toastr.success('Data fetched successfully for ' + code['name'], 'Data Fetched!');
      this.deptModelService.setData(dataa);
    });
  }

}
