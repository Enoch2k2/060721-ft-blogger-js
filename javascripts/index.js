// What is an event in javascript?

// something you can click on
// something that happens on your application
// user input
// status change on given document, when dom content is loaded!

// Events are user interactions with the webpage.
// { title: "Title 1", content: "Content 1", author: "Author1" },
// { title: "Title 2", content: "Content 2", author: "Author2" },
// { title: "Title 3", content: "Content 3", author: "Author1" }
const blogs = [];

const blogsDiv = () => document.getElementById('blogs');
const form = () => document.getElementById('form');
const titleInput = () => document.getElementById('title');
const authorInput = () => document.getElementById('author');
const contentInput = () => document.getElementById('content');

const attachSubmitFormEvent = event => {
  form().addEventListener('submit', submitForm);
}

const submitForm = event => {
  event.preventDefault();
  
  let blog = {
    title: titleInput().value,
    author: authorInput().value,
    content: contentInput().value
  }

  blogs.push(blog);
  displayBlog(blog);
}

const loadBlogs = () => {
  // what do we want to do?
  
  // We want to iterate on our array of blogs
  // iterate blogs, 

  blogs.forEach(blog => displayBlog(blog)) //do something?
}

const displayBlog = blog => {
  // blog: { title: "Title 1", content: "Content 1", author: "Author1" }


  // for every blog
  // <div>
  //   <h4>Title</h4>
  //   <p>By: Author</p>
  //   <p>Content</p>
  // </div>
  // <hr>

  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const pAuthor = document.createElement('p');
  const pContent = document.createElement('p');
  const hr = document.createElement('hr');

  h4.innerText = blog.title;
  pAuthor.innerText = `By: ${ blog.author }`;
  pContent.innerText = blog.content;

  div.appendChild(h4);
  div.appendChild(pAuthor);
  div.appendChild(pContent);

  blogsDiv().appendChild(div);
  blogsDiv().appendChild(hr);
}

document.addEventListener('DOMContentLoaded', event => {
  attachSubmitFormEvent();
  loadBlogs();
})