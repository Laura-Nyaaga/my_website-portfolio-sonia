
"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Microscope, Laptop, Users } from 'lucide-react';

const Skills = () => {
  // State to track expanded skills
  const [expandedSkills, setExpandedSkills] = useState({});

  const skillsData = {
    Research: {
      icon: <Microscope size={24} />,
      items: {
        'Data Collection': 'Expert in undertaking research including identifying excellent data collection techniques using research methodologies and internet sources.',
        'Qualitative Analysis': 'Proficient in collecting and analyzing qualitative data to evaluate research efficacy and draw meaningful conclusions.',
        'Quantitative Analysis': 'Skilled in analyzing complex datasets, performing data verification, cleanup, and ensuring accuracy of gathered data.'
      }
    },
    Technical: {
      icon: <Laptop size={24} />,
      items: {
        'Electronic Health Systems': 'Strong understanding of electronic health record systems with quick adaptation to new systems and platforms.',
        'Data Analysis': 'Efficient in analyzing data, performing verification, cleanup, and ensuring accuracy across all collected information.',
        'Project Management': 'Strong organizational skills with proven track record of meeting project milestones through effective planning and resource management.'
      }
    },
    'Soft Skills': {
      icon: <Users size={24} />,
      items: {
        'Communication': 'Excellent verbal and written communication abilities, with talent for building rapport with research participants.',
        'Team Coordination': 'Proven experience in leading teams to prepare grant applications and secure funding for research initiatives.',
        'Stakeholder Management': 'Effective in engaging with various stakeholders to ensure smooth operations and project success.'
      }
    }
  };

  const toggleSkill = (category, skill) => {
    setExpandedSkills(prev => ({
      ...prev,
      [`${category}-${skill}`]: !prev[`${category}-${skill}`]
    }));
  };

  return (
    <section className="min-h-screen bg-[#1a202c] text-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, { icon, items }]) => (
            <div 
              key={category}
              className="bg-[#1a202c] text-white border- bg-gray-600 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6 cursor-pointer">
                <div className="text-blue-400">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>

              <div className="space-y-4">
                {Object.entries(items).map(([skill, description]) => (
                  <div key={skill} className="space-y-2">
                    <div
                      className="flex items-center space-x-2 cursor-pointer hover:text-blue-400 transition-colors"
                      onClick={() => toggleSkill(category, skill)}
                    >
                      {expandedSkills[`${category}-${skill}`] ? (
                        <ChevronDown className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-lg">{skill}</span>
                    </div>

                    {expandedSkills[`${category}-${skill}`] && (
                      <div className="ml-7 p-4 bg-[#d1d7cb] text-black rounded-md shadow-md transition-all duration-300">
                        <p className="text-base">{description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;