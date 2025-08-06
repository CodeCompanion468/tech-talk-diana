import banner from '../assets/banner.png'
import profile from '../assets/profile.png'
import socialLinks from '../data/socialLinks.json'

function Home() {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img
          src={banner}
          alt="Tech Talk banner"
          className="w-full h-64 object-cover md:h-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#64ffda] text-center">
            Tech Talk with Diana
          </h1>
          <p className="mt-2 text-base md:text-xl font-medium text-gray-200 text-center px-4">
            Modern Cloud · Operational Excellence / Automation · AI Strategy
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
        <img
          src={profile}
          alt="Diana portrait"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-4"
          style={{ boxShadow: '0 0 0 4px #64ffda' }}
        />
        <div className="flex-1">
          <p className="text-lg leading-relaxed mb-4">
            Hello! I’m Diana, a cloud strategist and DevOps advocate. On Tech Talk,
            I share insights on building modern cloud architectures, achieving
            operational excellence through automation, and crafting responsible AI
            strategies. Whether you’re a developer, architect or technology
            leader, you’ll find actionable guidance to help you navigate the
            evolving tech landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#64ffda] hover:text-[#64ffda]/80"
              >
                LinkedIn
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#64ffda] hover:text-[#64ffda]/80"
              >
                GitHub
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#64ffda] hover:text-[#64ffda]/80"
              >
                Twitter
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#64ffda] hover:text-[#64ffda]/80"
              >
                YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
