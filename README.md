# Hot Stocks

- Micheline Doughlin
- Ben Sjostrom
- York Shaw
- Karis Courey

Hot Stocks - revolutionizing stocks to make them, like, totally cool.


## Design

- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)
- [Integrations](docs/integrations.md)

## Intended market

Our key demographic are men and women that are in the age range of 18 - 42. Our target audience are those that are interested in investing in stocks and growing their portfolio.  Hot Stocks interface is designed  to have the feel of a social media app to give users a sense of familiarity and make it less intimindating.


## Functionality

- When users access the app they will have the option to sign up for an account if they do not have one.
- Users will have the ability to cycle through stocks and finance new articles on the explore page.  From this page users can:
  - Save news items and stocks to their saved folder
  - Add stock to portfolio
- The search page allows for users to search and stocks and news articles will show that contain the searched word
- The saved page is where users can access the stocks and news articles that they saved
- Portfolio will have the stocks that user has ___
- About Page has logo and information about the hot stocks app

- Visitors to the site can take a home or body scent profile quiz that will filter Smelli Belli’s products to match their tastes:
  - A home quiz to find them a home product that matches their scent profile
  - A body quiz to find them a body product that matches their scent profile
- Users can click on suggested products to go to product detail page to either wish list or add to cart
- Products page for a plain list view of all products
- Accounts
- Employees can add new products, view/search inventory, and update inventory stock
- Wish list for registered accounts so users can build a list of products based on their preferences/quiz results and save those grouped products for later
- About Page with company info, ingredient sourcing info, and FAQ
- Social Media Links/Contact at the footer
- Contact => Email or Help Chat via Facebook Messenger for questions/suggestions
- Main Page features popular products and quizzes
- The cart features products that was added from the product page
  - update quantity with an increment and decrement counter
  - can checkout and will populate the order end point

## Project Initialization

To fully enjoy this application on your local machine, please make sure to follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run `docker volume hot-stocks`
4. Run `docker compose build`
5. Run `docker compose up`
6. Run `docker exec -it smelli-belli-inventory-api-1 bash`
7. Run `python manage.py loaddata products.json`
8. Exit the container's CLI, and enjoy Smelli Belli to its fullest!
