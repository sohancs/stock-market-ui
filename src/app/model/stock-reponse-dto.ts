export interface StockResponseDTO {
    companyCode : string;
	stockPrices : StockDTO[];
	stockAnalysis : StockAnalysis;
}

export interface StockDTO {
	stockPrice : number;
	createdTimestamp : string;
}

export interface StockAnalysis {
	minPrice : number;
	maxPrice : number;
	averagePrice : number;
}