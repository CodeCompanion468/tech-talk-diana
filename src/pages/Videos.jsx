import { useState } from 'react'
import videosData from '../data/videos.json'
import VideoCard from '../components/VideoCard'

/**
 * Videos page.
 *
 * Displays a list of embedded videos pulled from a JSON file.  Users can filter
 * the list by topic using buttons.  Selecting a tag will show only those
 * videos containing that tag; selecting "All" resets the filter.
 */
function Videos() {
  // Determine unique tags
  const allTags = Array.from(
    new Set(videosData.flatMap((video) => video.tags)),
  )
  const [selectedTag, setSelectedTag] = useState('All')

  // Helper for tag button classes
  const tagClasses = (tag) =>
    selectedTag === tag
      ? 'bg-[#64ffda] text-[#0a192f] border-[#64ffda]'
      : 'border-gray-500 text-gray-300 hover:bg-[#112240]'

  // Filter videos based on selected tag
  const filteredVideos =
    selectedTag === 'All'
      ? videosData
      : videosData.filter((video) => video.tags.includes(selectedTag))

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-[#64ffda]">Videos</h2>
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
      {/* Videos grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.url} video={video} />
          ))}
        </div>
      ) : (
        <p>No videos found for {selectedTag}.</p>
      )}
    </div>
  )
}

export default Videos