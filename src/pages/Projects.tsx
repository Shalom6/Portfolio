import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Google Forms to Excel',
      description: 'A Python based tool that transforms Google Form responses into a clean, well-formatted Excel report. Features include user authentication.',
      image: '/images/updatedexcel.png',
      technologies: ['Python', 'Google API', 'OpenPyXl'],
      github: 'https://github.com/Shalom6/Google-Forms-to-Excel-Cleaner',
      //live: 'https://example.com',
      featured: true
    },
    /*{
      title: 'Web-based Task Tracker',
      description: 'A full-stack web application built with React and Node.js for tracking academic assignments and deadlines. Includes Google OAuth integration and real-time notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'TypeScript', 'Google APIs', 'MongoDB'],
      github: 'https://github.com',
      //live: 'https://example.com',
      featured: false
    },*/
    {
      title: '2D Treasure Hunt Game',
      description: '2D Treasure Hunt Game made with Java for user enjoyment.',
      image: '/api/placeholder/600/400',
      technologies: ['Java'],
      github: 'https://github.com',
      //live: 'https://example.com',
      featured: false
    },
    {
      title: 'Java Simple Calculator',
      description: 'A command-line calculator application written in C with support for basic arithmetic operations, scientific functions, and expression parsing.',
      image: '/images/calcproject.png',
      technologies: ['Java', 'JavaSwing', 'JavaAwt'],
      github: 'https://github.com/Shalom6/Calculator-App',
      //live: 'https://example.com',
      featured: false
    },
    /*{
      title: 'Python Data Analysis Tool',
      description: 'A Python application for analyzing academic performance data using pandas, matplotlib, and numpy. Generates visualizations and statistical reports.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Jupyter'],
      github: 'https://github.com',
      //live: 'https://example.com',
      featured: false
    },*/
    {
      title: 'React Portfolio Website',
      description: 'A responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and mobile-first design.',
      image: '/images/reactwebsite.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Shalom6/Portfolio',
      //live: 'https://example.com',
      featured: true
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-dark-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              A collection of academic and personal projects that demonstrate my programming skills and passion for software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-dark-900 dark:text-white mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                  <a
                    //href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
                  >
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-dark-900 dark:text-white mb-12 text-center"
          >
            All Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    //href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
                  >
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
