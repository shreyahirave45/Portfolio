import shreyaPhoto from './assets/shreya.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SH
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-purple-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-purple-600 font-semibold mb-2">UI/UX Designer</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Shreya Hirave
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Final-year B.Tech student who designs for clarity and builds with Python and SQL.
                I turn complex data into outputs people can read at a glance.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-300 transition-all">
                  Get in Touch
                </a>
                <a href="#projects" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all">
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
                  <img
                    src={shreyaPhoto}
                    alt="Shreya Hirave"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-xl shadow-lg p-3">
                  <p className="text-xs text-gray-500">Graduating</p>
                  <p className="text-lg font-bold text-purple-600">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              I create visual content in Canva and want to design usable, accessible products as a UI/UX designer.
              My unique blend of technical skills in Python, SQL, and deep learning combined with design thinking
              allows me to bridge the gap between complex systems and user-friendly interfaces. I specialize in
              turning raw data into intuitive visualizations that anyone can understand at a glance.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Design Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Canva (visual content, layouts, presentations)</li>
                <li>• Basic visual design</li>
                <li>• Data visualization (risk maps)</li>
              </ul>
            </div>

            {/* Design Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Figma</li>
                <li>• Microsoft PowerPoint</li>
                <li>• Microsoft Word</li>
              </ul>
            </div>

            {/* UX Practice */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UX Practice</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Problem solving</li>
                <li>• Structured thinking</li>
                <li>• Documentation</li>
                <li>• Presenting ideas</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Python</li>
                <li>• SQL & MySQL</li>
                <li>• Deep Learning (U-Net, CNN)</li>
                <li>• Google Colab, Jupyter Notebook</li>
                <li>• VS Code</li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ChatGPT</li>
                <li>• Gemini</li>
                <li>• Copilot</li>
                <li>• Content ideation</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Team collaboration</li>
                <li>• Leadership</li>
                <li>• Event coordination</li>
                <li>• Competitive programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">U-Net</span>
                <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landslide Detection System</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-semibold text-purple-600">Problem</p>
                  <p className="text-gray-600">Small-scale landslides are hard to spot early; planners need a quick way to see where risk is highest.</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">Solution</p>
                  <p className="text-gray-600">Built an AI system that compares multi-temporal satellite images with a U-Net model and outputs a Low/Medium/High risk map.</p>
                </div>
                <div>
                  <p className="font-semibold text-purple-600">Design Focus</p>
                  <p className="text-gray-600">Turned raw model output into a simple, color-coded map that non-technical users can read quickly.</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">CNN</span>
                <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">Deep Learning</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plant Disease Detection</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-semibold text-pink-600">Problem</p>
                  <p className="text-gray-600">Farmers need early, accurate diagnosis of crop disease from a leaf photo.</p>
                </div>
                <div>
                  <p className="font-semibold text-pink-600">Solution</p>
                  <p className="text-gray-600">Trained a CNN that learns edges and color patterns from leaf images to classify diseases for earlier treatment and better crop management.</p>
                </div>
                <div>
                  <p className="font-semibold text-pink-600">Design Focus</p>
                  <p className="text-gray-600">Framed around the end user, a farmer who needs a clear, fast result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience & Education</h2>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-600 mb-6">Work Experience</h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-bold text-gray-900">DBMS-SQL Intern</h4>
              <p className="text-purple-600 font-semibold mb-2">Techspeak, Sangli</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Learned relational database design, data modeling, normalization and query optimization through guided, hands-on exercises.</li>
                <li>• Built a base in structuring data, which supports designing clear information flows for products.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Education</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-pink-600">
                <h4 className="text-xl font-bold text-gray-900">B.Tech</h4>
                <p className="text-pink-600 font-semibold">Annasaheb Dange College of Engineering & Technology, Ashta</p>
                <p className="text-gray-600">CGPA 7.92 | 2022–2026</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-600">
                <h4 className="text-xl font-bold text-gray-900">HSC</h4>
                <p className="text-purple-600 font-semibold">Jath High School and Junior College of Arts and Science, Jath</p>
                <p className="text-gray-600">73.50% | 2021–2022</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-pink-600">
                <h4 className="text-xl font-bold text-gray-900">SSC</h4>
                <p className="text-pink-600 font-semibold">Jath High School and Junior College of Arts and Science, Jath</p>
                <p className="text-gray-600">76.20% | 2019–2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Achievements & Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-4 block">🏆</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Hackathon Coordinator</h4>
              <p className="text-gray-600">Helped run a university-level hackathon and received a certificate (2024)</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-4 block">🏏</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Zonal Cricket Tournament</h4>
              <p className="text-gray-600">3rd place representing Shivaji University (2024)</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-4 block">⭐</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">HackerRank</h4>
              <p className="text-gray-600">3-star in problem solving</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 text-center">
              <span className="text-4xl mb-4 block">👥</span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">GDGC Member</h4>
              <p className="text-gray-600">Google Developer Group on Campus - Data Structures & Algorithms and Competitive Programming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
            <p className="text-xl mb-8 opacity-90">I'm always open to discussing new opportunities and collaborations.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <a href="mailto:shreyahirave98@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="text-2xl">📧</span>
                <span>shreyahirave98@gmail.com</span>
              </a>
              <a href="tel:+919370050158" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="text-2xl">📱</span>
                <span>+91-9370050158</span>
              </a>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-xl">🔗</span>
              </a>
            </div>
            <p className="mt-8 opacity-75">Maharashtra, India</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="opacity-75">© 2024 Shreya Hirave. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
