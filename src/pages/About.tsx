import { motion } from 'framer-motion'
import { Code2, Users, Zap, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '4+' },
    { icon: Users, label: 'Programming Languages', value: '7' },
    { icon: Zap, label: 'Years Coding', value: '2+' },
    { icon: Heart, label: 'Git Commits', value: '100+' },
  ]
  const programmingLanguages = [
    { name: 'Java', proficiency: '90%' },
    { name: 'JavaScript', proficiency: '75%' },
    { name: 'CSS', proficiency: '80%' },
    {name: 'HTML', proficiency: '80%'},
    { name: 'Python', proficiency: '70%' },
    { name: 'TypeScript', proficiency: '65%' },
    { name: 'C', proficiency: '60%'},
  ]
  const frameworksAndLibraries = [
    { name: 'React', proficiency: '80%' },
    { name: 'Node.js', proficiency: '50%' },
    { name: 'Tailwind CSS', proficiency: '50%' },
    { name: 'Python Libraries', proficiency: '55%' },
    { name: 'Google APIs', proficiency: '65%' },
  ]
  const developmentTools = [
    { name: 'Git', proficiency: '100%' },
    { name: 'Google Authentication', proficiency: '90%' },
    { name: 'Google APIs', proficiency: '90%' },
    { name: 'VS Code', proficiency: '80%' },
    { name: 'Terminal', proficiency: '85%' },
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
              I'm a Computer Science student at the University of Saskatchewan with a passion for 
              software development and problem-solving. I enjoy working with various programming 
              languages and frameworks to create innovative solutions and learn new technologies.
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
                  My journey in Computer Science began with curiosity about how software works. 
                  Starting with basic programming concepts, I've developed a strong foundation in 
                  multiple programming languages including Java, JavaScript, C, and Python.
                </p>
                <p>
                  As a student at the University of Saskatchewan, I've gained experience with 
                  modern web technologies like React, Node.js, and TypeScript, while also 
                  working with Google APIs and authentication systems. I'm passionate about 
                  learning new technologies and applying them to solve real-world problems.
                </p>
                <p>
                  When I'm not studying or coding, you'll find me exploring new programming 
                  concepts, working on personal projects, or contributing to open source 
                  initiatives. I believe in continuous learning and staying up-to-date with 
                  the latest developments in technology.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">S</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                  Shalom Oyewusi
                </h3>
                <p className="text-dark-600 dark:text-dark-300">
                  Computer Science Student
                </p>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  University of Saskatchewan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-300">
              Programming languages, frameworks, and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Programming Languages
              </h3>
              {/*Sliders for programming languages*/}
              <div className="space-y-3">
                {programmingLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-dark-600 dark:text-dark-300">{lang.name}</span>
                    <div className="w-24 bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: lang.proficiency }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Frameworks & Libraries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Frameworks & Libraries
              </h3>
              {/*Sliders for frameworks and libraries*/}
              <div className="space-y-3">
                {frameworksAndLibraries.map((framework) => (
                  <div key={framework.name} className="flex items-center justify-between">
                    <span className="text-dark-600 dark:text-dark-300">{framework.name}</span>
                    <div className="w-24 bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: framework.proficiency }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Development Tools
              </h3>
              {/*Sliders for dev tools*/}
              <div className="space-y-3">
                {developmentTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between">
                    <span className="text-dark-600 dark:text-dark-300">{tool.name}</span>
                    <div className="w-24 bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: tool.proficiency }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
