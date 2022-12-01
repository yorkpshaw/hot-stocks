## 11/30/2022

Today, I worked on:

* Developing Search component
* Incorporating reducer endpoints in SimpleCard
* Developing SimpleCard
* Developing PortfolioDialog
* Troubleshooting Portfolio, Saved with team

I completed development of search mechanism for news items (will likely base it off of title).

I incorporated useMutations on button clicks for SimpleCard to permit full integration of front-end and back-end.

I made SimpleCard responsive to the type of data received (i.e. news item, stock).

I began developing PortfolioDialog, which will allow users to add or update stocks in portfolio.

I worked with Ben and York to help troubleshoot issues with Portfolio and Saved components.


## 11/29/2022

Today, I worked on:

* Developing get_all_stocks endpoint
* Setting up bare bones files for tests
* Developing Search component

I developed get_all_stocks ACL and router to obtain all stock symbols and names from Alphavantage.

I set up the test files with outline structure for applicable tests.

I continued development of the front-end Search component. This included revisiting news_items and stocks ACL, router, and rtk code; making the SimpleCard dynamic to be able to handle both news items and stocks; and enabling the search mechanism for stocks. Still have to implement search mechanism for news items (will likely base it off of title).


## 11/28/2022

Today, I worked on:

* Debugging front-end auth

I am adjusting front-end auth code to improve UX (e.g. no flashing after clicking logout, enable clicking between log in and sign up, etc.). I also removed /login and /signup routes to prevent someone from logging in or signing up if they're already logged in.



## 11/23/2022

Today, I worked on:

* Developing Search component
* Implementing front-end auth

I completed developing the design the Search component, abstracting away all potentially reusable portions of code into their own components.

I completed implementing login/logout/signup front-end functionality (using hooks). Woot woot!

I partially re-implemented login/logout/signup front-end functionality with Redux. Need to continue troubleshooting responsiveness, navigation.


## 11/22/2022

Today, I worked on:

* Fixing sidebar nav
* Developing Redux reducer endpoints
* Implementing front-end authentication
* Developing Search component


I fixed the sidebar nav, ensuring it won't overlay our components, by following these Material UI tutorials: https://www.youtube.com/watch?v=Ix1LZGBSp-E, https://www.youtube.com/watch?v=DSuJLPRsdZQ&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=12. I also linked each element of the sidebar nav to its corresponding url and cleaned up the map code within the sidebar (that which displays each page name).

I developed the companiesApi and stocksApi reducer endpoints given a stock symbol. With the team, we developed the newsItemsApi and savedItemsApi reducer endpoints.

I began implentation of front-end authentication per Learn.

I began developing the front-end portion of the Search component.


## 11/21/2022

Today, I worked on:

* Developing create or update logic for portfolio stocks
* Developing nav with team
* Implementing beginnings of React Redux


I adjusted the router and query for create_portfolio_stock to be create_or_update_portfolio stock, and I adjusted the code, accordingly.

I worked on developing our sidebar nav using Material UI with team.

I followed the exploration to begin implementation of React Redux.


## 11/20/2022

Today, I worked on:

* Implementing authentication requirements at endpoints
* Fixing all routers and queries
* Developing companies ACL and router
* Starting front-end work


I ensured authentication is required at each endpoint, and I troubleshooted only displaying items based on logged-in user.

I fixed all routers and queries to correctly show the information being requested.

I developed the ACL to obtain company information from Alphavantage, as well as the api/companies/{symbol} router.

I started working on the front-end; I added MainPage, Nav, AccountForm, and PortfolioStocks components, and I looked into Material UI framework.


## 11/18/2022

Today, I worked on:

* Practicing implementing authentication on my own per Learn
* Moving all classes with BaseModel parent class to queries


I followed along with Curtis' (instructor) instructional video to implement authentication using Galvanize's FastAPI-JWT library.

I moved all classes with BaseModel parent class to queries per Curtis' instructional videos.


## 11/17/2022

Today, I worked on:

* Changing database setup to reflect Learn examples
* Improving db schema with team and Riley
* Reviewing team's routes and queries
* Group coding updates to team's routes and queries

I adjusted our docker-compose file to not run create-multiple-databases. Rather, each service will reference its own database, if necessary. This will allow us to more easily populate dbs with tables.

The team thought through how to improve our db schema and adjusted the code, accordingly.

We all went through routes and queries we worked on the past few days and updated in accordance with updated db schema.


## 11/16/2022

Today, I worked on:

* Updating API endpoints with team
* Updating db schema with team
* Getting project set up per Learn
* Explore items, explore news items, and explore stocks queries and routers

I updated API endpoints with the team to help minimize confusion and to align with RESTful API routes.

I updated the db schema to reflect optimized datatype selections and the information our wireframe suggests we'll need.

I followed the project setup on Learn to continue fleshing out our project. Struggled a bit with create-multiple-databases and populating one of those databases with data per our schema. Alex and Shelen (SEIRs) came to help, though were unable to resolve issue. On hold with Alex.

I developed query and router code for explore_items, explore_news_items, and explore_stocks.


## 11/15/2022

Today, I worked on:

* Incorporating structure of FastAPI project
* Including code-along users routers and queries code
* Improving API endpoints with team and Candice
* Developing db schema with team

I filled out our project structure following the exploration and lecture pertaining to FastAPI.

I coded along with Dalonte and Candice (instructors) during lecture to have the beginnings of users functionality.

Igneous worked on the schema for hot-stocks-data as a team. We received great input from Candice on our API endpoints to help guide our tables.
