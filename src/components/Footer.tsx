import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">CS Student</span>
            </div>
            <p className="text-dark-300 mb-4">
              Computer Science Student at the University of Saskatchewan passionate about 
              software development, problem-solving, and creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Shalom6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-dark-800 rounded-full text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shalom-oyewusi-428a3234a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-dark-800 rounded-full text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:damolaso@hotmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-dark-800 rounded-full text-dark-300 hover:text-primary-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-dark-300">
              <p>damolaso@hotmail.com</p>
              <p>(639) 317-7529</p>
              <p>Saskatoon, SK, Canada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center text-dark-400">
          <p>&copy; 2025 Shalom Oyewusi. Built with React & TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
