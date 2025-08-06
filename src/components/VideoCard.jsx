/**
 * Card component to render a video entry.
 *
 * Props:
 * - video: An object with title, url, description and tags properties.
 */
function VideoCard({ video }) {
  return (
    <div className="rounded-lg bg-[#112240] p-4 shadow hover:shadow-lg transition-shadow duration-200">
      {/* Video embed: fixed height to maintain aspect ratio without requiring extra plugins */}
      <iframe
        src={video.url}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-52 md:h-60 rounded mb-2"
      />
      <h3 className="text-lg font-semibold text-[#64ffda] mb-1">{video.title}</h3>
      <p className="text-sm text-gray-300 mb-2">{video.description}</p>
      <div className="flex flex-wrap gap-2">
        {video.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-[#0a192f] text-xs text-gray-300 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default VideoCard