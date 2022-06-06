function About() {
  return (
    <main className="border-2 border-red-500 h-screen mx-6 md:mx-12 p-8">
      <h1 className="border-2 border-yellow-500 font-extralight text-lg md:text-2xl text-white text-center tracking-wider">
          Hello there! 
      </h1>
      <h2 className="border-2 border-blue-500 my-4 font-light tracking-wide text-center text-white">
        Welcome to my project!
      </h2>
      <p className="border-2 border-blue-900 text-white">
        This web application is built with the following stack:
      </p>
      <ul>
        <li>React - Front end JavaScript Library used for modularity and scalability</li>
        <li>Vite - web app bundler</li>
        <li>TailwindCSS - low-level highly customizable css framework</li>
        <li>Axios - front-end library for making REST calls easy</li>
        <li>Spotify Web Api JS - serverless wrapper for handling spotify requests</li>
      </ul>
    </main>
  )
}

export default About;