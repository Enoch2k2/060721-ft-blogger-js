class Api {
  static baseUrl = 'http://localhost:3000';

  static fetchBlogs = () => {
    fetch(Api.baseUrl + '/blogs')
    .then(resp => resp.json())
    .then(data => {
      data.forEach(blogData => {
        let blog = new Blog(blogData.id, blogData.title, blogData.author, blogData.content)
        blog.display()
      })
    })
  }

  static postBlog = blog => {
    fetch(Api.baseUrl + '/blogs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( blog )
    })
    .then(resp => resp.json())
    .then(blogData => {
      let blog = new Blog(blogData.id, blogData.title, blogData.author, blogData.content)
      blog.display()
    })
  }
}