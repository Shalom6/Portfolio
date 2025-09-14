import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Shalom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 text-lg px-8 py-3"
              >
                <span>View My Work</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2 text-lg px-8 py-3"
              >
                <span>Get In Touch</span>
                <Mail className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:your-email@example.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              Modern tools and frameworks for building exceptional web experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
              'Next.js', 'Express', 'Docker', 'AWS', 'Git', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
