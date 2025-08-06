import { useState } from 'react'
import articlesData from '../data/articles.json'
import ArticleCard from '../components/ArticleCard'

/**
 * Articles page.
 *
 * Displays a list of article links pulled from a JSON file.  Users can filter
 * the list by topic using the buttons at the top.  Selecting a tag will show
 * only those articles containing that tag; selecting "All" resets the filter.
 */
function Articles() {
  // Determine the unique list of tags from the articles data
  const allTags = Array.from(
    new Set(articlesData.flatMap((article) => article.tags)),
  )

  const [selectedTag, setSelectedTag] = useState('All')

  // Helper to compute the style classes for a tag button
  const tagClasses = (tag) =>
    selectedTag === tag
      ? 'bg-[#64ffda] text-[#0a192f] border-[#64ffda]'
      : 'border-gray-500 text-gray-300 hover:bg-[#112240]'

  // Compute filtered articles based on the selected tag
  const filteredArticles =
    selectedTag === 'All'
      ? articlesData
      : articlesData.filter((article) => article.tags.includes(selectedTag))

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#64ffda]">Articles</h2>

      {/* Tag filter buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => setSelectedTag('All')}
          className={`px-3 py-1 rounded-full text-sm border transition-colors duration-150 ${tagClasses('All')}`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm border transition-colors duration-150 ${tagClasses(tag)}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.url} article={article} />
          ))}
        </div>
      ) : (
        <p>No articles found for {selectedTag}.</p>
      )}
    </div>
  )
}

export default Articles