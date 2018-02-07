#!/bin/bash

# GET 
echo
echo
echo "GET"
curl "http://localhost:3000/accounts"

# POST
echo
echo
echo "POST"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "1000", "name": "savings"}' "http://localhost:3000/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "1000", "name": "savings"}' "http://localhost:3000/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "2000", "name": "test2"}' "http://localhost:3000/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "3000", "name": "test3"}' "http://localhost:3000/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "4000", "name": "test4"}' "http://localhost:3000/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "4000", "name": "test4"}' "http://localhost:3000/accounts"

# GET
echo
echo
echo "GET"
curl "http://localhost:3000/accounts"

# PUT
echo
echo
echo "\nPUT"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "1500"}' "http://localhost:3000/accounts/5a7aca25874b83d6506a8be0"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "2500"}' "http://localhost:3000/accounts/5a7aca25874b83d6506a8be1"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "3500"}' "http://localhost:3000/accounts/5a7aca25874b83d6506a8be2"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "4500"}' "http://localhost:3000/accounts/5a7aca25874b83d6506a8be3"

# GET
echo
echo
echo "GET"
curl "http://localhost:3000/accounts"

# PUT: update non-exising account
echo
echo
echo "PUT"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "1500"}' "http://localhost:3000/accounts/5a7aca25874b8336536a8be0"

# DELETE
echo
echo
echo "DELETE"
curl -X DELETE "http://localhost:3000/accounts/5a7aca25874b83d6506a8be3"

# GET
echo
echo
echo "GET"
curl "http://localhost:3000/accounts"

echo
echo

