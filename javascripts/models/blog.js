class Blog {
  static all = [];

  constructor(id, title, author, content) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    Blog.all.push(this)
  }

  display = () => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const pAuthor = document.createElement('p');
    const pContent = document.createElement('p');
    const hr = document.createElement('hr');
  
    h4.innerText = this.title;
    pAuthor.innerText = `By: ${ this.author }`;
    pContent.innerText = this.content;
  
    div.appendChild(h4);
    div.appendChild(pAuthor);
    div.appendChild(pContent);
  
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
}