import React from 'react';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
          Want to explore more!
        </h2>
        <p className='text-gray-500 my-2'>
          Check out these resources with more interesting facts.
        </p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none mr-3'>
          <a href="https://www.s.com" target='_blank' rel='noopener noreferrer'>
            Learn More
          </a>
        </Button>
      </div>
      <motion.div 
        className="flex-1 mr-auto"
        initial={{ scale: 0.9, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover={{ scale: 0.9, rotate: 0.1 }}
      >
        <motion.img 
          src='https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt='Explore'
          style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
          whileHover={{ scale: 1.05, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)' }}
        />
      </motion.div>
    </div>
  );
}

export default CallToAction;
