import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">About Bharat's Blog</h1>
      
      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to Bharat's Blog, your ultimate destination for insightful articles, the latest updates on technology, culture, innovation, and more.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <motion.div 
          className="lg:w-1/2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://th.bing.com/th/id/OIG1.38DQBLfZochZk_.m7EXw?w=1024&h=1024&rs=1&pid=ImgDetMain"
            alt="Bharat's Blog"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="lg:w-1/2 flex flex-col justify-center ">
          <h2 className="text-2xl font-semibold mb-4 dark:white">Our Mission</h2>
          <p className="text-gray-600 mb-4 dark:white">
            Bharat's Blog aims to inspire and inform readers with carefully curated content. We strive to deliver high-quality articles that cover a broad spectrum of topics, from cutting-edge technology to the rich culture and heritage of India.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <p className="text-gray-600 mb-6 dark:white">
            Hi, I’m Bharat, the creator of Bharat's Blog. With a passion for technology, innovation, and storytelling, I created this platform to share knowledge and insights with the world. I hope my articles inspire, educate, and provoke thought among readers.
          </p>
          
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-500 text-2xl hover:text-blue-700 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 text-2xl hover:text-gray-900 transition" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
