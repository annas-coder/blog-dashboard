# Blog Dashboard

A simple Blog Dashboard application built with Nextjs and Material UI. This app allows users to view, create, and view details of blogs. It utilizes virtual scrolling for efficient performance, a toaster notification for user interaction, and RTK Query for managing HTTP services.

### Live Demo

You can view the live demo of the app here: [Live Blog Dashboard](https://blog-dashboard-hebe.vercel.app/)

## Features

- **Blog Listing**: A list of blogs displayed with virtual scrolling to reduce page load time.
- **Blog Detail Page**: A page that shows the details of a specific blog when clicked.
- **Create New Blog**: A button to create a new blog with fields for title, author, and body. After submission, the user is redirected back to the dashboard with a toaster notification.
- **Form Validation**: Form validation is implemented using Formik, ensuring that the fields for title, author, and body are correctly filled out before submission.
- **Toaster Notification**: on Form Submission: Once the form is successfully submitted, a toaster notification confirms the blog creation and informs the user that the form has been successfully submitted.
- **Automatic Data Fetching**: The app automatically refetches data every 30 seconds to ensure up-to-date blog posts.

## Installation

### Clone the Repository

```bash
git clone https://github.com/annas-coder/blog-dashboard
```
### Change Directory
```bash
cd blog-dashboard
```
### Install Required Packages
```bash
npm install
```
### Run the Development Server
```bash
npm run dev
```
