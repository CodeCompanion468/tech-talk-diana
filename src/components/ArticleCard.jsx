function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg bg-[#112240] p-4 shadow hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-xl font-semibold text-[#64ffda] mb-1">
        {article.title}
      </h3>
      <p className="text-sm text-gray-300 mb-2">{article.description}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-[#0a192f] text-xs text-gray-300 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default ArticleCard
