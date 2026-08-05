# Mina Space — Product Listing & Details App

A responsive e-commerce front-end built as a technical assessment. It includes authentication, protected product routes, paginated product listing, and product details fetched from DummyJSON.

## Tech stack

- React + Vite
- Material UI (MUI)
- Redux Toolkit with `createAsyncThunk`
- React Router
- React Hook Form
- Axios

## Features

- Dummy login form with validation for email and password.
- Authentication state and token persisted in `localStorage`.
- Protected `/products` and `/products/:id` routes.
- Redirect to the login page for unauthenticated visitors, then return to the originally requested page after login.
- Redirect authenticated visitors from `/login` to `/products`.
- Logout action that clears Redux state and `localStorage`.
- Paginated product list from DummyJSON using `limit=10` and `skip`.
- Responsive product cards with product image, title, price, and a details link.
- Product details page with image gallery, category, description, price, rating, brand, stock status, loading, error handling, and Redux caching.
- Responsive landing-page sections styled to match the provided Mina Space design.

## Run locally

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repository-url>
cd small-ecommerce-app
npm install
npm run dev
```

Open the local address shown by Vite, usually `http://localhost:5173`.

## Demo credentials

Use the following credentials to access the protected product pages:

| Field | Value |
| --- | --- |
| Email | `sanaa@gmail.com` |
| Password | `123456` |

## Available scripts

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run preview # Preview the production build
npm run lint    # Run ESLint
```

## Routes

| Route | Description |
| --- | --- |
| `/login` | Login page |
| `/products` | Protected, paginated product listing |
| `/products/:id` | Protected product details page |
| `*` | Not found page |

## API

- Product list: `https://dummyjson.com/products?limit=10&skip=<offset>`
- Product details: `https://dummyjson.com/products/:id`

