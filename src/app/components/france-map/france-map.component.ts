import { Component, EventEmitter, Output } from '@angular/core';
import { DeptModelService } from '../../dept-model.service';
import { DatalistComponent } from '../../datalist/datalist.component';

type RegionData = {
  code: string,
  name: string,
}

@Component({
  selector: 'app-france-map',
  standalone: true,
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss'],
  imports: [DatalistComponent],
})

export class FranceMapComponent {
  @Output() sendRegionCode: EventEmitter<object> = new EventEmitter<object>()
  sharedData: any;

  constructor(private deptModelService: DeptModelService) {
    this.sharedData = this.deptModelService.getData();
    console.log(this.sharedData);
  }

  onClickRegion(code: string, name: string): void
  {
    console.log(code)
    console.log(name)

    const data: RegionData = {
      code: code,
      name: name
    }

    this.sendRegionCode.emit(data)

  }
}
