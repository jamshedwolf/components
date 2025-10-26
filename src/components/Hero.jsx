import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-16 min-h-screen ">
      {/* Left Side - Text Content */}
<div className="max-w-xl">
    <h1 className="text-6xl mb-4 text-black font-bold">BUILD YOUR NEXT BIG IDEA</h1>

    <p className="text-lg text-gray-600 leading-relaxed">Empower your business with modern design and powerful digital tools.
          Let’s create something amazing together.</p>

    <button className=" mt-3 hover:bg-blue-800 text-lg font-bold p-3 rounded-lg text-white bg-blue-600">GET STARTED</button>
</div>

      
      {/* Right Side - Image */}
      <div className="mt-10 ml-10 ">
        <img className="rounded-lg"  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80" alt="" />
      </div>
     
    </section>
  );
};

export default Hero;
