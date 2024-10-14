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
The API returns JSON responses for all endpoints. 
The structure of the responses is as follows:
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

GET /api/comment: Retrieves a list of stocks.

Response Format
The API returns JSON responses for all endpoints. 
The structure of the responses is as follows:

```
[
  {
    "id": 1,
    "title": "string",
    "content": "string",
    "createdOn": "2024-10-14T00:05:42.9794495",
    "stockId": 2,
    "createdBy": "Vedad"
  },
  {
    "id": 2,
    "title": "stringtest",
    "content": "stringtest",
    "createdOn": "2024-10-14T12:21:30.038969",
    "stockId": 2,
    "createdBy": "Vedad"
  }
]
```
GET /api/comment/{id}: Retrieves detailed information about a specific comment.

PUT /api/comment/{id}: Updates an existing commnt.

DELETE /api/comment/{id}: Deletes an existing comment.

**Requires authentication:** Yes

**Request Headers:**
* Authorization: Bearer <token>

**Response:**
* 200 OK: Comment updated successfully
* 401 Unauthorized: User is not authenticated


### User registration

GET /api/register: Register a new user.
Request body:
* username: User name.
* email: User email.
* password: User password.

The structure of the responses is as follows:

```
{
  "userName": "user",
  "email": "user@outlook.com",
  "token": "token..."
}
```

GET /api/login: 
Request body: User login.
* username: User name.
* password: User password.

The structure of the responses is as follows:

```
{
  "userName": "user",
  "email": "user@outlook.com",
  "token": "token..."
}
```

### Portfolio

GET /api/portfolio : Retrieve user portfolio

PUT /api/portfolio/{id}: Updates an existing portfolio.

DELETE /api/portfolio/{id}: Deletes an existing portfolio.

**Requires authentication:** Yes

**Request Headers:**
* Authorization: Bearer <token>

**Response:**
* 200 OK: Comment updated successfully
* 401 Unauthorized: User is not authenticated

The structure of the responses is as follows:

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
    "comments": [],
    "portfolios": []
  }
]
```
  



