import { Component, OnInit } from '@angular/core';
import { CompanyDetailsDTO, CompanyResponseDTO } from '../model/company-details-dto';
import { StockDTO, StockAnalysis } from '../model/stock-reponse-dto';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companiesDetails: CompanyResponseDTO[] = [];
  stockPrices: StockDTO[] = [];
  stockAnalysis: StockAnalysis = { minPrice: 0.0, maxPrice: 0.0, averagePrice: 0.0 };
  companyCode: string = "";
  startDate: string = "";
  endDate: string = "";
  selectedCompanyCode : string = "";
  companyName : string = "";
  flag : boolean = false;

  constructor(private service: StockService) { }

  ngOnInit(): void {
    this.service.getAllCompaniesDetails().subscribe((data: CompanyDetailsDTO) => {
      console.log("getAllCompaniesDetails reponse data : " + JSON.stringify(data));
      this.companiesDetails = data.companiesDetails;
    });
  }

  fetchStockDetails() {
    console.log("inside fetchStockDetails with selectedCompanyCode : " + this.selectedCompanyCode +
      ",  startDate : " + this.startDate + ", endDate : " + this.endDate);

    this.service.fetchStockDetails(this.selectedCompanyCode, this.startDate, this.endDate).subscribe((data: any) => {
      console.log("fetchStockDetails reponse data : " + JSON.stringify(data));
      if(data && data.stockPrice) {
        this.stockPrices = data.stockPrice;
        this.stockAnalysis = data.stockAnalysis;
        this.flag = false;
      } else {
        this.flag = true;
      }
    });
  }

  codeChanged(companyCode : any) {
    console.log("company code has been changes "+companyCode);
    this.selectedCompanyCode = companyCode;

    this.companiesDetails.forEach(item => {
      if(this.selectedCompanyCode === item.companyCode) {
        this.companyCode = item.companyCode;
        this.companyName = item.companyName;
      }
    })
  }

}
