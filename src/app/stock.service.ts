import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyDetailsDTO } from './model/company-details-dto'
import { StockResponseDTO } from './model/stock-reponse-dto';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient : HttpClient) { }
  contextPath: string = environment.contextPath;
  companybaseUrl : string = this.contextPath + environment.companyUrl;
  stockbaseUrl : string = this.contextPath + environment.stockUrl;

  getAllCompaniesDetails() {
    return this.httpClient.get<CompanyDetailsDTO>(this.companybaseUrl + "/getAll");
  }

  fetchStockDetails(companyCode : string, startDate : string, endDate : string) {
    return this.httpClient.get<StockResponseDTO>(this.stockbaseUrl + `/get/${companyCode}/${startDate}/${endDate}`);
  }
}
