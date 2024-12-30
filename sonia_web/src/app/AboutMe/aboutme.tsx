
"use client";
import React from "react";
import { FileDown, ExternalLink } from 'lucide-react';
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-[#1a202c] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <Image
                  src="/images/sony.png"
                  alt="Venesa Sonia"
                  width={256}
                  height={300}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-blue-600/20 rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Dedicated virtual assistant with a knack for research and healthcare.
                With a background in nursing education, I am skilled in collecting and
                analyzing data, from numbers to stories, to help improve health
                outcomes. I have got experience in talking to people, understanding their
                experiences, and using that knowledge to inform research. I am great at
                using digital tools to stay organized and efficient. Plus, I have helped
                write and secure funding for important research projects. I am
                passionate about making a difference in healthcare and excited to bring
                my skills to a new role.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a  href="/images/Sonia_CV.pdf"
                download >
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors">
                  <FileDown className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
                </a>
  
                <a href="https://www.linkedin.com/in/laura-nyaaga-434b8b307"
                  target="_blank"
                  rel="noopener noreferrer">
                <button className="flex items-center space-x-2 border border-blue-600 hover:bg-blue-600/20 px-6 py-3 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>View LinkedIn</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;