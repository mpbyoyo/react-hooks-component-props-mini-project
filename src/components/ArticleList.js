import React from "react";
import Article from "./Article";

function ArticleList({data: {posts}}) {

  const renderPosts = posts.map((post) => {
    return <Article key={post.id} post={post}/>
  })

  return (
    <main id="article-list">
      {renderPosts}
    </main>
  )
}

export default ArticleList