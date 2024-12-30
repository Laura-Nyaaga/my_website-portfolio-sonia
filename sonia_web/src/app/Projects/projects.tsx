

"use client";
import React from 'react';
import { FileText, FileSpreadsheet,LucidePresentation, } from 'lucide-react';
const FilePreview = ({ type, title }) => {
  // Placeholder styling based on file type
  const getPreviewStyle = () => {
    switch (type) {
      case 'form':
        return 'bg-purple-100';
      case 'spreadsheet':
        return 'bg-green-100';
      case 'document':
        return 'bg-blue-100';
      case 'presentation':
        return 'bg-orange-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className={`rounded-lg p-4 ${getPreviewStyle()} flex items-center justify-center h-32 mb-2`}>
      <img src="/images/sony.png" alt={`Preview for ${title}`} className="max-h-full object-contain" />
    </div>
  );
};

const AttachmentCard = ({ title, type, icon: Icon }) => (
  <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
    <FilePreview type={type} title={title} />
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4 text-gray-500" />
      <span className="text-sm text-gray-700 truncate">{title}</span>
    </div>
  </div>
);

const ProjectCard = ({ title, description, date, attachments }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
    </div>
    
    {attachments && attachments.length > 0 && (
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Related Files</h4>
        <div className="grid grid-cols-2 gap-3">
          {attachments.map((attachment, index) => (
            <AttachmentCard key={index} {...attachment} />
          ))}
        </div>
      </div>
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Sexual Harassment Survey Research",
      description: "Leading a comprehensive research study to establish sexual harassment behavior patterns in workplace environments. The project involves designing surveys, collecting data, and analyzing responses to develop preventive measures.",
      date: "2024",
      attachments: [
        {
          title: "Workplace Survey Form",
          type: "form",
          icon: LucidePresentation,
        }
      ]
    },
    {
      title: "ICU Nurses Knowledge Assessment",
      description: "Conducting research on ICU nurses' knowledge, attitude, and practice in utilizing mechanical ventilators in Nakuru County. This study aims to improve critical care delivery and patient outcomes.",
      date: "2023-Present",
      attachments: [
        {
          title: "ICU Assessment Document",
          type: "document",
          icon: FileText,
        },
        {
          title: "Research Collaboration",
          type: "document",
          icon: FileText,
        }
      ]
    },
    {
      title: "Healthcare Expense Management",
      description: "Developed and implemented a comprehensive expense tracking system for medical office operations, managing budgets of up to $1,000 monthly with detailed categorization.",
      date: "2022-2023",
      attachments: [
        {
          title: "Expense Tracker",
          type: "spreadsheet",
          icon: FileSpreadsheet,
        }
      ]
    },
    {
      title: "Social Media Marketing Analytics",
      description: "Managed health and wellness influencer marketing campaigns, tracking engagement rates and analyzing audience demographics for targeted content delivery.",
      date: "2022",
      attachments: [
        {
          title: "Marketing Analytics",
          type: "spreadsheet",
          icon: FileSpreadsheet,
        }
      ]
    },
    {
      title: "AWS Conference Travel Pack",
      description: "Comprehensive travel documentation and scheduling for the AWS Reinvent Conference, including detailed itineraries, transit information, and entry requirements.",
      date: "2023",
      attachments: [
        {
          title: "Travel Documentation",
          type: "presentation",
          icon: FilePresentation,
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Projects & Documentation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive collection of research initiatives, professional projects, and associated documentation showcasing healthcare improvement, data analysis, and clinical research work.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;











// const Projects = () => {
//     const projects = [
//             {
//               title: 'BREATHE Trial Research',
//               description: 'Led research study comparing efficacy of HFO vs SFO in reducing mortality and hospital stay. Conducted key informant interviews and analyzed complex datasets.',
//                role: 'Research Assistant',
//                duration: '2022 - Present'
//              },
//             {
//               title: 'Health & Wellness Clinic Management',
//               description: 'Managed virtual healthcare operations including patient scheduling, telehealth support, and EHR system administration.',
//               role: 'Virtual Assistant',
//                duration: '2021 - 2022'
//              }
//            ];
//     return(
//         <section className="bg-[#1a202c] px-4 sm:px-6 lg:px-8 text-white">
//                 <div className="max-w-7xl mx-auto">
//                   <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {projects.map((project) => (
//                       <div key={project.title} className="bg-navy-800 p-6 rounded-lg hover:bg-navy-700 transition-colors">
//                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                          <p className="text-gray-400 mb-4">{project.role} | {project.duration}</p>
//                         <p className="text-gray-300">{project.description}</p>
//                        </div>
//                     ))}
//                   </div>
//                  </div>
//         </section>
//     );
// };

// export default Projects;