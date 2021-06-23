// What is an event in javascript?

// something you can click on
// something that happens on your application
// user input
// status change on given document, when dom content is loaded!

// Events are user interactions with the webpage.
// { title: "Title 1", content: "Content 1", author: "Author1" },
// { title: "Title 2", content: "Content 2", author: "Author2" },
// { title: "Title 3", content: "Content 3", author: "Author1" }

const attachSubmitFormEvent = event => {
  form().addEventListener('submit', Blog.submitForm);
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  Api.fetchBlogs();
})