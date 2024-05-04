import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
// Save as app/posts/page.jsx and copy layout.jsx from /about

async function getPostsData(limit, page = 1) {
    const res = await fetch('https://jsonplaceholder.typicode.com/' + 'posts?_limit=' + limit+'&_page='+page);
    if (!res.ok) { // Recommendation: handle errors
// This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts")
    }
    return res.json()
    }

    export default function Posts() {
        const [posts, setPosts] = useState([]);
    
        useEffect(() => {
            async function fetchPosts() {
                try {
                    const postsData = await getPostsData(5); // default limit is 5
                    setPosts(postsData);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchPosts();
        }, []);


return (
    <div className="Posts">
        <h1>Posts</h1>
  {posts.map(post => (

    <PostCard

      key={[post.id]}

      title={post.title}

      subtitle={post.summary}

      onButtonClick={() => onPostClick([post.id]('http://post.id', "‌"))}

    />

  ))}
    </div>
)
}
