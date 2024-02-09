import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptModelService {
  private sharedData: any;

  constructor() { }

  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }
}