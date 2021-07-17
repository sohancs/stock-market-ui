export interface CompanyDetailsDTO {
	companiesDetails: CompanyResponseDTO[];
}

export interface CompanyResponseDTO {
	companyCode: string;
	companyName: string;
	companyCeo: string;
	turnOver: number;
	stockExchange: string;
	companyWebsite: string;
	latestStockPrice: number;
}