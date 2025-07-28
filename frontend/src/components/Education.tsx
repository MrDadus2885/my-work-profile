import React from 'react';
import { Education as EducationType } from '../types/ProfileData';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="border-l-4 border-green-500 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-green-600 font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm text-gray-500">
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </span>
            </div>
            
            <p className="text-gray-700 mb-3">GPA: {edu.gpa}</p>
            
            {edu.relevantCourses.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Relevant Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 