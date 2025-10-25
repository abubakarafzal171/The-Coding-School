import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 mt-20 h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        About The Coding School
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-semibold text-black mb-3">
        Learn, Practice & Build Real Skills
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mb-6 leading-relaxed">
        The Coding School is an educational platform dedicated to helping learners 
        master web development from scratch. Our mission is to make coding simple, 
        structured, and fun. <br />
        <br />
        Whether you're a beginner learning HTML, CSS, and JavaScript or an advanced learner 
        working on React projects — we guide you step by step with explanations, examples, 
        and real-world practice.
      </p>

      {/* Call-to-action Button */}
      <Link
        to="/html"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Start Learning HTML
      </Link>
    </div>
  )
}

export default About
