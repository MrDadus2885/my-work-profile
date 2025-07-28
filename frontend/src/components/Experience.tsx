import React from 'react';
import { Experience as ExperienceType } from '../types/ProfileData';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="border-l-4 border-primary-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-primary-600 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </span>
            </div>
            
            <p className="text-gray-700 mb-3">{exp.description}</p>
            
            {exp.achievements.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 