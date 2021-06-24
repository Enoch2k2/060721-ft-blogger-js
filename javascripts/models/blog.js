class Blog {
  static all = [];

  constructor(id, title, author, content) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    Blog.all.push(this)
  }

  deleteBlog = () => {
    fetch('http://localhost:3000/blogs/' + this.id, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      Blog.all = Blog.all.filter(blog => blog.id !== this.id);
      Blog.displayAll();
    })
  }

  display = () => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const pAuthor = document.createElement('p');
    const pContent = document.createElement('p');
    const hr = document.createElement('hr');
    const deleteButton = document.createElement('button');
  
    deleteButton.innerText = 'Delete';
    h4.innerText = this.title;
    pAuthor.innerText = `By: ${ this.author }`;
    pContent.innerText = this.content;

    deleteButton.addEventListener('click', this.deleteBlog);
  
    div.appendChild(h4);
    div.appendChild(pAuthor);
    div.appendChild(pContent);
    div.appendChild(deleteButton);
  
    blogsDiv().appendChild(div);
    blogsDiv().appendChild(hr);
  }

  static submitForm = event => {
    event.preventDefault();
    
    let blog = {
      title: titleInput().value,
      author: authorInput().value,
      content: contentInput().value
    }
  
    Api.postBlog(blog)
  
  }

  static displayAll = () => {
    blogsDiv().innerHTML = '';
    Blog.all.forEach(blog => blog.display());
  }
}