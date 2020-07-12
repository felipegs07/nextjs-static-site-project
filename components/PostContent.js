
const Post = (props) => {
  return (
    <article className="container">
      <section>
        <h2 className="big-margin-top">{ props.title }</h2>
      </section>
      <section>
        <h5>{ props.date }</h5>
      </section>
      <section dangerouslySetInnerHTML={{ __html: props.content }}></section>
    </article>
  )
}

export default Post;