### React Developer Interview Assignment (E-commerce Listing Page)

### Objective:
You are tasked with building the UI for an E-commerce Listing Page based
on the provided Figma design. The page should display a list of products, and
each product should have an option to either view the product or add it to the
cart. There will be no dedicated product page, so when a user clicks "View
Product," they should be redirected to a custom Thank You page.
Additionally, when users click "Add to Cart," a modal should open, as per ui
design.

### Figma Link =>
https://www.figma.com/design/AvK9THieFnvEKfIIupCr2p/Untitled?
node-id=1-2014&t=gT1SiG9uEORZICLj-1
Assignment Requirements:
Design Guidelines:
You are required to convert the provided Figma design into a functional
React-based UI that adheres to the following structure and features:
1. Header Section:
a. A search bar for searching products.
b. Icons for profile and cart.
2. Product List Section:
a. Display a grid/list of products based on the Figma design.
b. Each product card should include:
i. Product Image
ii. Product Name
iii. Price
iv. "View Product" and "Add to Cart" buttons.
c. Clicking "View Product" should redirect the user to a custom
"Thank You" page. There will be no product details page, so you
are required to design a Thank You page from scratch.

3. Add to Cart Modal:
a. Clicking “Add to Cart” on any product should open a modal that
displays the product’s details and an option to confirm adding the
product to the cart.
b. The modal design is included in the Figma file and should be
closely followed.

4. Pagination:
a. Implement pagination to navigate through multiple product
listings (functional but mock data is acceptable).

5. Thank You Page:
a. Create a simple "Thank You" page to which users are redirected
after clicking "View Product". This page should acknowledge their
action with a simple message (e.g., "Thank you for your interest in
[Product Name]!").
Technical Requirements:
1. ReactJS:


a. Use React for building the application with a component-based
architecture.
b. Structure the code with a focus on clean architecture and
componentization.
2. Componentization:
a. Break down the app into reusable components such as
ProductCard, Header, Pagination, and AddToCartModal.
b. Make sure each component handles a specific functionality.
3. Routing:
a. Use React Router to manage navigation between the product
listing page and the Thank You page.

4. State Management:
a. Utilize React hooks or context API for managing state,
particularly for pagination, modals, and product actions.

5. Mock Data:
a. Use static or mock data for products (you don't need to
implement a backend or API).

6. Modal Implementation:
a. The "Add to Cart" button should trigger a modal displaying the
product’s details and a confirmation button to add the product to
the cart.
### Deliverables:
1. Source Code:
a. Submit your project via a GitHub repository, with instructions on
how to run the project in the README file.

2. ReadMe:
a. Include a README that explains the approach you took, any
challenges faced, and how to run the project.

3. Deployment (Optional):


a. Share the live link of the deployed project (optional but
recommended).

### Evaluation Criteria:
1. UI/UX Implementation:
a. How closely does the final design align with the provided Figma
file?
2. Code Quality:
a. Are the components modular, cleanly structured, and reusable?
3. Functionality:
a. Does the "View Product" button properly redirect to the "Thank
You" page?
b. Does the "Add to Cart" modal function correctly and display as
expected?
4. Attention to Detail:
a. Overall polish, including hover states, modals, and the user
experience.