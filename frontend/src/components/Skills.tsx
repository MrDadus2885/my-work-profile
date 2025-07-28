import React from 'react';
import { Skills as SkillsType } from '../types/ProfileData';

interface SkillsProps {
  skills: SkillsType;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const skillCategories = [
    { title: 'Programming Languages', skills: skills.programming, color: 'bg-blue-100 text-blue-800' },
    { title: 'Frameworks & Libraries', skills: skills.frameworks, color: 'bg-green-100 text-green-800' },
    { title: 'Databases', skills: skills.databases, color: 'bg-purple-100 text-purple-800' },
    { title: 'Tools & Technologies', skills: skills.tools, color: 'bg-orange-100 text-orange-800' },
    { title: 'Soft Skills', skills: skills.softSkills, color: 'bg-pink-100 text-pink-800' }
  ];

  // Helper to render stars (supports half stars)
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Full star
        stars.push(
          <svg key={i} className="inline w-5 h-5 fill-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
          </svg>
        );
      } else if (rating >= i - 0.5) {
        // Half star
        stars.push(
          <svg key={i} className="inline w-5 h-5" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-star-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="50%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" fill={`url(#half-star-${i})`} />
          </svg>
        );
      } else {
        // Empty star
        stars.push(
          <svg key={i} className="inline w-5 h-5 fill-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
          </svg>
        );
      }
    }
    return <span className="ml-2 align-middle">{stars}</span>;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl shadow-lg border border-gray-200 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Skills</h2>
      </div>
      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 pl-2 border-primary-400">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`flex items-center px-4 py-2 rounded-full text-base font-medium shadow-sm ${category.color} hover:scale-105 transition-transform duration-200`}
                >
                  <span className="text-gray-900 mr-2">{skill.name}</span>
                  {renderStars(skill.rating)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 