import { useState } from "react"

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Blog1", body: "asdfjkl;", author: 'auth1', id: 1},
        {title: "Blog12", body: "asdfjkl;", author: 'auth12', id: 2},
        {title: "Blog13", body: "asdfjkl;", author: 'auth13', id: 3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;