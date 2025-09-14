import { motion } from 'framer-motion'
import { Code2, Users, Zap, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Zap, label: 'Years Experience', value: '3+' },
    { icon: Heart, label: 'Coffee Cups', value: '1000+' },
  ]

  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-dark-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating digital experiences 
              that make a difference. With expertise in modern web technologies, I bring ideas 
              to life through clean, efficient, and scalable code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-600 dark:text-dark-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-dark-600 dark:text-dark-300">
                <p>
                  My journey into web development started with curiosity about how websites work. 
                  What began as simple HTML pages has evolved into a passion for building complex, 
                  user-focused applications.
                </p>
                <p>
                  I specialize in React, TypeScript, and Node.js, but I'm always eager to learn 
                  new technologies. I believe in writing clean, maintainable code and creating 
                  experiences that users love.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">S</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  Shalom
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
