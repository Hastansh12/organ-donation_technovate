function BlogPost({ title, author, date, content, tags }) {
  return (
    <div className="mb-4 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        By {author} on {date}
      </p>
      <p className="mt-4">{content}</p>
      <div className="mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogPost;
