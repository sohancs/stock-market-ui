import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDetailsDTO } from './model/company-details-dto'
import { StockResponseDTO } from './model/stock-reponse-dto';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient : HttpClient) { }
  companybaseUrl : string = "http://localhost:7000/manage-company-service/api/v1.0/market/company";
  stockbaseUrl : string = "http://localhost:7000/stock-service/api/v1.0/market/stock";

  getAllCompaniesDetails() {
    return this.httpClient.get<CompanyDetailsDTO>(this.companybaseUrl + "/getAll");
  }

  fetchStockDetails(companyCode : string, startDate : string, endDate : string) {
    return this.httpClient.get<StockResponseDTO>(this.stockbaseUrl + `/get/${companyCode}/${startDate}/${endDate}`);
  }
}
