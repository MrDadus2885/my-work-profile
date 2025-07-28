import React, { useState, useEffect } from 'react';
import { ProfileData } from '../types/ProfileData';

interface EditModalProps {
  section: string;
  data: ProfileData;
  onSave: (updatedData: Partial<ProfileData>) => void;
  onCancel: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ section, data, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (section === 'personalInfo') {
      setFormData(data.personalInfo);
    } else if (section === 'experience') {
      setFormData({ experience: data.experience });
    } else if (section === 'education') {
      setFormData({ education: data.education });
    } else if (section === 'skills') {
      setFormData(data.skills);
    } else if (section === 'projects') {
      setFormData({ projects: data.projects });
    }
  }, [section, data]);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      [field]: Array.isArray(prev[field]) 
        ? prev[field].map((item: any, i: number) => i === index ? value : item)
        : []
    }));
  };

  const handleAddArrayItem = (field: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      [field]: Array.isArray(prev[field]) ? [...prev[field], ''] : ['']
    }));
  };

  const handleRemoveArrayItem = (field: string, index: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      [field]: Array.isArray(prev[field]) 
        ? prev[field].filter((_: any, i: number) => i !== index)
        : []
    }));
  };

  const handleEducationChange = (index: number, field: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? prev.education.map((item: any, i: number) => 
            i === index ? { ...item, [field]: value } : item
          )
        : []
    }));
  };

  const handleAddEducation = () => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? [...prev.education, {
            id: Date.now(),
            institution: '',
            degree: '',
            startDate: '',
            endDate: '',
            gpa: '',
            relevantCourses: []
          }]
        : [{
            id: Date.now(),
            institution: '',
            degree: '',
            startDate: '',
            endDate: '',
            gpa: '',
            relevantCourses: []
          }]
    }));
  };

  const handleRemoveEducation = (index: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? prev.education.filter((_: any, i: number) => i !== index)
        : []
    }));
  };

  const handleCourseChange = (educationIndex: number, courseIndex: number, value: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? prev.education.map((education: any, i: number) => 
            i === educationIndex 
              ? {
                  ...education,
                  relevantCourses: Array.isArray(education.relevantCourses)
                    ? education.relevantCourses.map((course: string, j: number) => 
                        j === courseIndex ? value : course
                      )
                    : []
                }
              : education
          )
        : []
    }));
  };

  const handleAddCourse = (educationIndex: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? prev.education.map((education: any, i: number) => 
            i === educationIndex 
              ? {
                  ...education,
                  relevantCourses: Array.isArray(education.relevantCourses)
                    ? [...education.relevantCourses, '']
                    : ['']
                }
              : education
          )
        : []
    }));
  };

  const handleRemoveCourse = (educationIndex: number, courseIndex: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      education: Array.isArray(prev.education) 
        ? prev.education.map((education: any, i: number) => 
            i === educationIndex 
              ? {
                  ...education,
                  relevantCourses: Array.isArray(education.relevantCourses)
                    ? education.relevantCourses.filter((_: string, j: number) => j !== courseIndex)
                    : []
                }
              : education
          )
        : []
    }));
  };

  // Experience handling functions
  const handleExperienceChange = (index: number, field: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? prev.experience.map((item: any, i: number) => 
            i === index ? { ...item, [field]: value } : item
          )
        : []
    }));
  };

  const handleAddExperience = () => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? [...prev.experience, {
            id: Date.now(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: '',
            achievements: []
          }]
        : [{
            id: Date.now(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: '',
            achievements: []
          }]
    }));
  };

  const handleRemoveExperience = (index: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? prev.experience.filter((_: any, i: number) => i !== index)
        : []
    }));
  };

  const handleAchievementChange = (experienceIndex: number, achievementIndex: number, value: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? prev.experience.map((experience: any, i: number) => 
            i === experienceIndex 
              ? {
                  ...experience,
                  achievements: Array.isArray(experience.achievements)
                    ? experience.achievements.map((achievement: string, j: number) => 
                        j === achievementIndex ? value : achievement
                      )
                    : []
                }
              : experience
          )
        : []
    }));
  };

  const handleAddAchievement = (experienceIndex: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? prev.experience.map((experience: any, i: number) => 
            i === experienceIndex 
              ? {
                  ...experience,
                  achievements: Array.isArray(experience.achievements)
                    ? [...experience.achievements, '']
                    : ['']
                }
              : experience
          )
        : []
    }));
  };

  const handleRemoveAchievement = (experienceIndex: number, achievementIndex: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      experience: Array.isArray(prev.experience) 
        ? prev.experience.map((experience: any, i: number) => 
            i === experienceIndex 
              ? {
                  ...experience,
                  achievements: Array.isArray(experience.achievements)
                    ? experience.achievements.filter((_: string, j: number) => j !== achievementIndex)
                    : []
                }
              : experience
          )
        : []
    }));
  };

  // Projects handling functions
  const handleProjectChange = (index: number, field: string, value: any) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? prev.projects.map((item: any, i: number) => 
            i === index ? { ...item, [field]: value } : item
          )
        : []
    }));
  };

  const handleAddProject = () => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? [...prev.projects, {
            id: Date.now(),
            name: '',
            description: '',
            technologies: [],
            githubUrl: '',
            liveUrl: '',
            highlights: []
          }]
        : [{
            id: Date.now(),
            name: '',
            description: '',
            technologies: [],
            githubUrl: '',
            liveUrl: '',
            highlights: []
          }]
    }));
  };

  const handleRemoveProject = (index: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? prev.projects.filter((_: any, i: number) => i !== index)
        : []
    }));
  };

  const handleProjectArrayChange = (projectIndex: number, field: string, itemIndex: number, value: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? prev.projects.map((project: any, i: number) => 
            i === projectIndex 
              ? {
                  ...project,
                  [field]: Array.isArray(project[field])
                    ? project[field].map((item: string, j: number) => 
                        j === itemIndex ? value : item
                      )
                    : []
                }
              : project
          )
        : []
    }));
  };

  const handleAddProjectArrayItem = (projectIndex: number, field: string) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? prev.projects.map((project: any, i: number) => 
            i === projectIndex 
              ? {
                  ...project,
                  [field]: Array.isArray(project[field]) ? [...project[field], ''] : ['']
                }
              : project
          )
        : []
    }));
  };

  const handleRemoveProjectArrayItem = (projectIndex: number, field: string, itemIndex: number) => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      projects: Array.isArray(prev.projects) 
        ? prev.projects.map((project: any, i: number) => 
            i === projectIndex 
              ? {
                  ...project,
                  [field]: Array.isArray(project[field])
                    ? project[field].filter((_: string, j: number) => j !== itemIndex)
                    : []
                }
              : project
          )
        : []
    }));
  };

  const handleFileUpload = (file: File | undefined) => {
    if (!file) return;
    
    // For static, just use a local preview or assign a static filename
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev: Record<string, any>) => ({
        ...prev,
        profilePicture: e.target?.result || ''
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Structure the data properly based on the section
    let structuredData: Partial<ProfileData>;
    
    if (section === 'personalInfo') {
      structuredData = { personalInfo: formData as any };
    } else if (section === 'experience') {
      structuredData = { experience: formData.experience };
    } else if (section === 'education') {
      structuredData = { education: formData.education };
    } else if (section === 'skills') {
      structuredData = { skills: formData as any };
    } else if (section === 'projects') {
      structuredData = { projects: formData.projects };
    } else {
      structuredData = formData as Partial<ProfileData>;
    }
    
    onSave(structuredData);
  };

  const renderPersonalInfoForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          value={formData.phone || ''}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={formData.location || ''}
          onChange={(e) => handleInputChange('location', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
        <input
          type="url"
          value={formData.linkedin || ''}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">GitHub</label>
        <input
          type="url"
          value={formData.github || ''}
          onChange={(e) => handleInputChange('github', e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Summary</label>
        <textarea
          value={formData.summary || ''}
          onChange={(e) => handleInputChange('summary', e.target.value)}
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
        <div className="mt-1 flex items-center space-x-4">
          {formData.profilePicture && (
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={formData.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e.target.files?.[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
            <p className="mt-1 text-sm text-gray-500">
              Upload a profile picture (JPG, PNG, GIF up to 5MB). For best results, use a square image.
            </p>
          </div>
        </div>
      </div>
    </form>
  );

  const renderSkillsForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.entries(formData).map(([category, skills]) => {
        // Ensure skills is an array
        const skillsArray = Array.isArray(skills) ? skills : [];
        
        return (
          <div key={category}>
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <div className="space-y-2">
              {skillsArray.map((skill: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleArrayChange(category, index, e.target.value)}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveArrayItem(category, index)}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddArrayItem(category)}
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                + Add {category.slice(0, -1)}
              </button>
            </div>
          </div>
        );
      })}
    </form>
  );

  const renderEducationForm = () => {
    const educationArray = Array.isArray(formData.education) ? formData.education : [];
    
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {educationArray.map((education: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-900">Education #{index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveEducation(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Institution</label>
                <input
                  type="text"
                  value={education.institution || ''}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  type="text"
                  value={education.degree || ''}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="month"
                  value={education.startDate || ''}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="month"
                  value={education.endDate || ''}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">GPA</label>
                <input
                  type="text"
                  value={education.gpa || ''}
                  onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                  placeholder="e.g., 3.8/4.0"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Courses</label>
              <div className="space-y-2">
                {Array.isArray(education.relevantCourses) && education.relevantCourses.map((course: string, courseIndex: number) => (
                  <div key={courseIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => handleCourseChange(index, courseIndex, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveCourse(index, courseIndex)}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddCourse(index)}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  + Add Course
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button
          type="button"
          onClick={handleAddEducation}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600"
        >
          + Add Education
        </button>
      </form>
    );
  };

  const renderExperienceForm = () => {
    const experienceArray = Array.isArray(formData.experience) ? formData.experience : [];
    
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {experienceArray.map((experience: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-900">Experience #{index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveExperience(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  value={experience.company || ''}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  value={experience.position || ''}
                  onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="month"
                  value={experience.startDate || ''}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="month"
                  value={experience.endDate || ''}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  placeholder="Leave empty if current"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={experience.description || ''}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Achievements</label>
              <div className="space-y-2">
                {Array.isArray(experience.achievements) && experience.achievements.map((achievement: string, achievementIndex: number) => (
                  <div key={achievementIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={achievement}
                      onChange={(e) => handleAchievementChange(index, achievementIndex, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveAchievement(index, achievementIndex)}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddAchievement(index)}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  + Add Achievement
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button
          type="button"
          onClick={handleAddExperience}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600"
        >
          + Add Experience
        </button>
      </form>
    );
  };

  const renderProjectsForm = () => {
    const projectsArray = Array.isArray(formData.projects) ? formData.projects : [];
    
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {projectsArray.map((project: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-900">Project #{index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Name</label>
                <input
                  type="text"
                  value={project.name || ''}
                  onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
                <input
                  type="url"
                  value={project.githubUrl || ''}
                  onChange={(e) => handleProjectChange(index, 'githubUrl', e.target.value)}
                  placeholder="https://github.com/username/project"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Live URL</label>
                <input
                  type="url"
                  value={project.liveUrl || ''}
                  onChange={(e) => handleProjectChange(index, 'liveUrl', e.target.value)}
                  placeholder="https://project-demo.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={project.description || ''}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technologies</label>
              <div className="space-y-2">
                {Array.isArray(project.technologies) && project.technologies.map((tech: string, techIndex: number) => (
                  <div key={techIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => handleProjectArrayChange(index, 'technologies', techIndex, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveProjectArrayItem(index, 'technologies', techIndex)}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddProjectArrayItem(index, 'technologies')}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  + Add Technology
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Highlights</label>
              <div className="space-y-2">
                {Array.isArray(project.highlights) && project.highlights.map((highlight: string, highlightIndex: number) => (
                  <div key={highlightIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => handleProjectArrayChange(index, 'highlights', highlightIndex, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveProjectArrayItem(index, 'highlights', highlightIndex)}
                      className="px-3 py-2 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddProjectArrayItem(index, 'highlights')}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  + Add Highlight
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button
          type="button"
          onClick={handleAddProject}
          className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-500 hover:text-primary-600"
        >
          + Add Project
        </button>
      </form>
    );
  };

  const renderForm = () => {
    switch (section) {
      case 'personalInfo':
        return renderPersonalInfoForm();
      case 'skills':
        return renderSkillsForm();
      case 'education':
        return renderEducationForm();
      case 'experience':
        return renderExperienceForm();
      case 'projects':
        return renderProjectsForm();
      default:
        return <div>Edit form for {section} coming soon...</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Edit {section.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {renderForm()}
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal; 