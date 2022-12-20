# Hot Stocks

- Micheline Doughlin
- Ben Sjostrom
- York Shaw
- Karis Courey

Hot Stocks - revolutionizing stocks to make them, like, totally cool.

Modern, social-media-app-inspired stock portfolio solution designed for evaluating live stock and related news data, managing a portfolio, and saving data of interest. Features FastAPI, React Redux, PostgreSQL, and data interactions with RESTful APIs.

[Front-end](https://igneous-rocks.gitlab.io/hot-stocks/) deployed via GitLab pages. <br/>
[Back-end](https://hot-stocks.onrender.com/docs) deployed via Render.

## Design

- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)
- [Integrations](docs/integrations.md)

## Intended market

We are targeting people that are in the age range of 18 - 42. Our target audience are those that are interested in investing in stocks and growing their portfolio.


## Functionality

- When users access the app they will have the option to sign up for an account if they do not have one.
- Users will have the ability to cycle through stocks and finance new articles on the explore page.  From this page users can:
  - Save news items and stocks to their saved folder
  - Add or update stock to portfolio
  - View more info about news items and stocks
  - Be prompted to share news items and stocks on social media
- The Search page allows for users to search and stocks and news articles will show that contain the searched word
- The Saved page is where users can access the stocks and news articles that they saved
- Portfolio displays the stocks that user has added to their Portfolio, as well as the current and basis values of their Portfolio
- About Page has logo and information about the hot stocks app

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume hot-stocks`
4. Run `docker compose build`
5. Run `docker compose up`
6. Enjoy Hot Stocks to its fullest!


## Testing

To verify this application is working on your local machine, please make sure to follow these steps after following those under Project Initialization:

1. Open hot-stocks-api container
2. Run `python -m pytest`
