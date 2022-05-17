import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import Aside from "./Aside"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header data={blogData} />
      <Aside data={blogData}/>
      <ArticleList data={blogData}/>
      
    </div>
  );
}

export default App;
