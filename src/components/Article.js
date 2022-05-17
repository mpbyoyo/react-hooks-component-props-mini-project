import React from "react";

function Article({post: {title, date="January 1, 1970", preview, minutes}}) {
  return (
    <article>
      <h3><a href={`/${(title.toLowerCase()).replaceAll(' ', '-')}/`}>{title}</a></h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article