## Introduction
The Finshark API provides a robust user account feature that empowers users to create and manage personalized stock portfolios. Users can effortlessly add stocks to their portfolios and attach insightful comments to specific stocks, facilitating tracking and analysis.
### This README is still a work in progress.
Endpoints

### Stock Management
GET /api/stocks: Retrieves a list of stocks.

Optional query parameters:
symbol: Filters by stock symbol.
companyName: Filters by company name.
sortBy: Sorts the results by a specified field (e.g., symbol, companyName, purchase).
pageNumber: Specifies the page number for pagination.
pageSize: Sets the number of items per page.

Response Format
The API returns JSON responses for all endpoints. The structure of the responses is as follows:
```
[
  {
    "id": 1,
    "symbol": "TSLA",
    "companyName": "Tesla",
    // ... other stock properties
    "comments": [
      {
        "id": 1,
        "title": "string",
        "content": "string",
        "createdOn": "2024-10-14T00:05:42.9794495",
        "stockId": 2,
        "createdBy": "Vedad"
      }
    ]
  },
  // ... other stocks
]
```

GET /api/stocks/{id}: Retrieves detailed information about a specific stock.

POST /api/stocks: Creates a new stock.
Request body:
* symbol: The stock symbol.
* companyName: The company name.
* purchase: The purchase price.
* lastDiv: The last dividend.
* industry: The industry.
* marketCap: The market capitalization.

PUT /api/stocks/{id}: Updates an existing stock.

DELETE /api/stocks/{id}: Deletes an existing stock.

### List of comments

