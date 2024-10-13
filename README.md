### The Finshark API provides a user account feature that allows users to create and manage a personalized stock portfolio. Users can add stocks to their portfolios and attach comments to specific stocks for tracking and analysis.
## This README is still a work in progress.
Endpoints

# List of stocks
GET /api/stock?PageNumber=1&PageSize=2

Return a list of stocks 
Optional query parameters:
Symbol
CompanyName
SortBy
Pagination: Page number, page size

Example: 
```
[
  {
    "id": 1,
    "symbol": "TSLa",
    "companyName": "Tesla",
    "purchase": 1.44,
    "lastDiv": 3232,
    "industry": "Cars",
    "marketCap": 10000,
    "comments": []
  },
  {
    "id": 2,
    "symbol": "string",
    "companyName": "string",
    "purchase": 1000000000,
    "lastDiv": 100,
    "industry": "string",
    "marketCap": 5000000000,
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
  }
]
```

# Get a single stock 
 GET /api/stock/{id}
Retrieve detailed information about a book

# Create a new stock 
POST /api/stock
The request body needs to be in JSON format and include the following properties:
* Symbol
* Company Name
* Purchase
* LastDiv
* Industry
* MarketCap

# Update a stock 
PUT /api/stock{id}
Updating existing stock

# Delete a stock 
Delete /api/stock{id}
Deleting existing stock

# List of comments

