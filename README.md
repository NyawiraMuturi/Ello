<h1 align="center" style="display: block; font-size: 2.5em; font-weight: bold; margin-block-start: 1em; margin-block-end: 1em;">
<a name="logo" href="[https://github.com/NyawiraMuturi/Ello.git)"><img align="center" src="frontend/public/ello.svg" alt="Ello Books by Dame-Techie" style="width:50%;height:50%"/></a>
<br /><br /><strong>Ello Books by Dame-Techie</strong>
</h1>

## Prerequisite[![](/public/pin.png)](#overview)

- Install the Backend (you local server)
cd backend/
npm i 
npm start

- Run Frontend
cd frontend
npm i
npm run dev.

All set, feel free to search, add, or remove books from the reading list. 

## Overview[![](/public/pin.png)](#overview)

The task was create a teacher facing-UI book assignment view. The main requirements were:

- Create a search bar that allows users to search for books by title.
- Have a list of search results that displays the book title, author, and a button to add the book to the students reading list.
- A reading list that displays all the books that the teacher has added.
- A button to remove a book from the reading list.

---

## Table of contents[![](/public/pin.svg)](#table-of-contents)

- [Approach](#approach)
- [Additional Features](#additional-features)
- [Dependencies](#dependencies)
- [Performance Optimization](#performance-optimization)
- [Testing](#testing)
- [Available Routes](#available-routes)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

---

## Approach[![](/public/pin.svg)](#approach)

1. **Project Setup**: I initialized a React project using Vite and set up prettier and ESLint for better developer experience writing clean and maintainable code.
2. **System Design**: I used SOLID design principles for seperation of concerns. HOC and other files have a single responsibility.
2. **Data Fetching**: I used Apollo client graphql to fetch data, focusing on error handling and asynchronous programming best practices.
3. **User Interface**: I used Material UI to Design and build clean and intuitive user interfaces fully responsive across all pages.
4. **State Management**: Implemented state management using either local component state (useState), or useContext for global state management.
5. **Routing**: Routing was done using React Router V6.23.0. This was a breeze.
6. **TypeScript**: Leveraged TypeScript to add type safety and enhance code readability and maintainability across the entire app. Didn't @ts-ignore anywhere as well. What would we do without types??

<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

## Additional Features[![](/public/pin.svg)](#additional-features)

As per the project instructions, there was room to go above the expected outcome. For this project, I wanted to have a ready to deploy product that I believe I would enjoy if I was a teacher. In addition to the core requirements, I implemented the following features:

- Reading Level section for that opens books for the specific reading level. When there are students, I believe they will be assigned books based on their reading level
- Filtering and sorting products from FakeStore API.
- Specific product page.
- Signin feature.
- Assign all books feature.

<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

## Dependencies[![](/public/pin.svg)](#dependencies)

I have been very mindful of the dependencies I used in the project. I only used what I thought was necessary. Here is the non-exhaustive list of the dependencies I included for your quick glance.

- React 18
- Apollo Client + graphql - For API calls
- MUI - CSS library
- Vite as prefered Bundler


<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

## Performance Optimization[![](/public/pin.svg)](#performance-optimization)

I implemented several performance optimizations in the application to improve speed and efficiency, including:

1. **Lazy Loading**: Deferring the loading of non-essential resources until they are needed. This reduced initial page load times and improved the overall responsiveness of the application.
2. **Caching**: For better user experience, all session data is cached using local storage.
3. **Code Splitting**: Leveraged code splitting techniques and SOLID principles to split the application into smaller, more manageable chunks. Resulting in faster load times and better resource utilization.
4. **Data Structures**: I finally got to use a hashmap. Yaaayyy!!! My search function uses 0(1) time complexity which significantly improves resource utilization. 

<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

## Testing[![](/public/pin.svg)](#testing)

I am a firm believer of writing tests to ensure the quality and reliability of applications. However, for this task, since it was not directly stipulated in the project instructions, I decided to implement the following:

1. **e2e testing with cypress**: I wrote one test suite for the main (/) page.

<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

## Available routes[![](public/pin.svg)](#available-routes)

Here are the routes you can access in the Ello Books Frontend application:

1. **Home**: The landing page of the application, displaying all available books, happy Ello, and a search bar. This page is soooo cuuutteee. I absolutely fell in love with the colors at Ello.

   - Route: /
   - Description: Displays all book, plus by their reading levels.

2. **Reading list**: Like a checkout for books.

   - Route: /reading-list
   - Description: Displays all books the teacher decides to assign young readers.


<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---


---

## Conclusion[![](/public/pin.svg)](#screenshots)

I hope you have as much fun reviewing this submission as I did working on it. I absolutely loved working with the theme. Those colors are popping!!!. 

I really appreciate the chance to demonstrate my abilities and look forward to the feedback from the Ello team.

If you have any questions or feedback regarding my submission, please feel free to reach out via the provided contact information.

<div align="right">[ <a href="#table-of-contents">↑ Back to top ↑</a> ]</div>

---

<!-- markdownlint-enable -->
