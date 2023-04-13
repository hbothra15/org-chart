# ORG-Chart

This application will display an Org chart by pulling data from the server

  

## Tech Stack

- Vue JS 3
- axios
- Express.js
- Node
  
## Run locally

To install root folder

```
npm install
npm run install-all-deps
```

To Spin up both the applications i.e. Server and client
```
npm run dev
```
To Spin up individual applications
```
npm run start:server
npm run start:client
```

Exposed endpoints
```
GET localhost:3000/ - This will show all employee details
GET localhost:3000/tree - This will Show all employee in tree format
GET localhost:3000/:userName - This will show employee matching with the given user name
```

Note
---
Changes made in employee.json and add one root Employee as Mickey Mouse
