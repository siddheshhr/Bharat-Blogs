import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard"; 
import { motion } from "framer-motion";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <motion.div 
        className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome To Bharat's Blog
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm dark:text-white py-1">
          Welcome to India’s Official Blog! <br /> <br /> Here, you’ll find the
          latest stories, product updates, company news, and more. Whether
          you’re interested in technology, culture, or innovation, we’ve got you
          covered.🚀
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </motion.div>

      <motion.div 
        className="p-3 bg-amber-100 dark:bg-slate-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <CallToAction />
      </motion.div>

      <div className="max-w-6xl p-3 mx-auto flex flex-auto flex-col items-center justify-center">
        {posts && posts.length > 0 && (
          <motion.div 
            className="flex flex-col gap-6 justify-evenly "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.slice(0, 2).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to={"/search"}
          className="text-lg text-teal-500 hover:underline text-center mx-auto flex justify-center"
        >
          View all posts
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
