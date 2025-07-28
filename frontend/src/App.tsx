import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ProfileData } from './types/ProfileData';

interface AuthState {
  token: string;
  username: string;
  fullName: string;
}

// Move getDefaultProfileData above App
const getDefaultProfileData = (): ProfileData => ({
  personalInfo: {
    id: 1,
    name: 'Shubham M Chavan',
    title: 'Software Developer',
    email: 'shubham.chavan@example.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra, India',
    linkedin: 'https://linkedin.com/in/shubham-chavan',
    github: 'https://github.com/shubham-chavan',
    summary: 'Passionate software developer with expertise in modern web technologies and a strong foundation in computer science principles.',
  },
  experience: [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Improved application performance by 40% through optimization',
        'Mentored 5 junior developers',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      company: 'Digital Innovations Ltd.',
      position: 'Software Developer',
      startDate: '2020-06',
      endDate: '2021-12',
      description: 'Developed and maintained web applications using modern JavaScript frameworks.',
      achievements: [
        'Built 3 client-facing applications',
        'Reduced bug reports by 30%',
        'Collaborated with cross-functional teams'
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: 'University of Technology',
      degree: 'Bachelor of Technology in Computer Science',
      startDate: '2016-08',
      endDate: '2020-05',
      gpa: '3.8/4.0',
      relevantCourses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development']
    }
  ],
  skills: {
    id: 1,
    programming: [
      { name: 'JavaScript', rating: 5 },
      { name: 'TypeScript', rating: 4 },
      { name: 'Python', rating: 4.5 },
      { name: 'Java', rating: 5 },
      { name: 'C++', rating: 3 }
    ],
    frameworks: [
      { name: 'React', rating: 5 },
      { name: 'Node.js', rating: 4 },
      { name: 'Express', rating: 4 },
      { name: 'Spring Boot', rating: 3 },
      { name: 'Django', rating: 3 }
    ],
    databases: [
      { name: 'MySQL', rating: 4 },
      { name: 'PostgreSQL', rating: 4 },
      { name: 'MongoDB', rating: 5 },
      { name: 'Redis', rating: 3 }
    ],
    tools: [
      { name: 'Git', rating: 5 },
      { name: 'Docker', rating: 4 },
      { name: 'AWS', rating: 3 },
      { name: 'Jenkins', rating: 3 },
      { name: 'Jira', rating: 4 }
    ],
    softSkills: [
      { name: 'Leadership', rating: 5 },
      { name: 'Problem Solving', rating: 5 },
      { name: 'Team Collaboration', rating: 4 },
      { name: 'Communication', rating: 5 }
    ]
  },
  projects: [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/shubham-chavan/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      highlights: [
        'Real-time inventory management',
        'Secure payment processing',
        'Admin dashboard with analytics'
      ]
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/shubham-chavan/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      highlights: [
        'Real-time collaboration',
        'File sharing capabilities',
        'Progress tracking and reporting'
      ]
    }
  ]
});

function App() {
  const [profileData] = React.useState<ProfileData>(getDefaultProfileData());
  // Remove isEditMode, editingSection, handleEdit, handleSave, handleCancel
  const [loading] = React.useState(false);
  // Remove axios and backend API logic
  // useEffect(() => {
  //   // Check for stored authentication token
  //   const storedToken = localStorage.getItem('authToken');
  //   const storedUsername = localStorage.getItem('username');
  //   const storedFullName = localStorage.getItem('fullName');
    
  //   if (storedToken && storedUsername && storedFullName) {
  //     setAuth({
  //       token: storedToken,
  //       username: storedUsername,
  //       fullName: storedFullName
  //     });
  //     // Set up axios default headers
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
  //   }
    
  //   setLoading(false);
  // }, []);

  // Remove all useEffect and API logic, use static data only
  // useEffect(() => {
  //   if (auth) {
  //     fetchProfileData();
  //   }
  // }, [auth]);

  // const fetchProfileData = async () => {
  //   if (!auth) return;
    
  //   try {
  //     const response = await axios.get('/api/profile');
  //     setProfileData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching profile data:', error);
  //     // If unauthorized, clear auth and show login
  //     if (axios.isAxiosError(error) && error.response?.status === 401) {
  //       handleLogout();
  //     } else {
  //       // Set default data if API is not available
  //       setProfileData(getDefaultProfileData());
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Remove all backend API calls in handleSave, just update local state
  // const handleLogin = (token: string, username: string, fullName: string) => {
  //   const authState = { token, username, fullName };
  //   setAuth(authState);
    
  //   // Store in localStorage
  //   localStorage.setItem('authToken', token);
  //   localStorage.setItem('username', username);
  //   localStorage.setItem('fullName', fullName);
    
  //   // Set up axios default headers
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // };

  // const handleRegister = (token: string, username: string, fullName: string) => {
  //   handleLogin(token, username, fullName);
  // };

  // const handleLogout = () => {
  //   setAuth(null);
  //   setProfileData(null);
    
  //   // Clear localStorage
  //   localStorage.removeItem('authToken');
  //   localStorage.removeItem('username');
  //   localStorage.removeItem('fullName');
    
  //   // Clear axios headers
  //   delete axios.defaults.headers.common['Authorization'];
  // };

  // Remove all backend API calls in MyProfile
  // const handleEdit = (section: string) => {
  //   setEditingSection(section);
  //   setIsEditMode(true);
  // };

  // const handleSave = async (updatedData: Partial<ProfileData>) => {
  //   try {
  //     // Route to the correct endpoint based on the section being edited
  //     if (editingSection === 'personalInfo' && updatedData.personalInfo) {
  //       // For personal info, we need to get the ID first
  //       const currentPersonalInfo = profileData?.personalInfo;
  //       if (currentPersonalInfo?.id) {
  //         // await axios.put(`/api/profile/personal-info/${currentPersonalInfo.id}`, updatedData.personalInfo); // Removed backend call
  //         setProfileData(prev => ({ ...prev!, personalInfo: { ...prev!.personalInfo, ...updatedData.personalInfo } })); // Update local state
  //       } else {
  //         // If no ID exists, create new
  //         // await axios.post('/api/profile/personal-info', updatedData.personalInfo); // Removed backend call
  //         setProfileData(prev => ({ ...prev!, personalInfo: { ...prev!.personalInfo, ...updatedData.personalInfo } })); // Update local state
  //       }
  //     } else if (editingSection === 'experience' && updatedData.experience) {
  //       // For experience, we need to handle each item individually
  //       for (const exp of updatedData.experience) {
  //         if (exp.id) {
  //           // await axios.put(`/api/profile/experience/${exp.id}`, exp); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, experience: prev!.experience.map(e => e.id === exp.id ? exp : e) })); // Update local state
  //         } else {
  //           // await axios.post('/api/profile/experience', exp); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, experience: [...prev!.experience, exp] })); // Update local state
  //         }
  //       }
  //     } else if (editingSection === 'education' && updatedData.education) {
  //       // For education, we need to handle each item individually
  //       for (const edu of updatedData.education) {
  //         if (edu.id) {
  //           // await axios.put(`/api/profile/education/${edu.id}`, edu); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, education: prev!.education.map(e => e.id === edu.id ? edu : e) })); // Update local state
  //         } else {
  //           // await axios.post('/api/profile/education', edu); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, education: [...prev!.education, edu] })); // Update local state
  //         }
  //       }
  //     } else if (editingSection === 'skills' && updatedData.skills) {
  //       // For skills, we need to get the ID first
  //       const currentSkills = profileData?.skills;
  //       if (currentSkills?.id) {
  //         // await axios.put(`/api/profile/skills/${currentSkills.id}`, updatedData.skills); // Removed backend call
  //         setProfileData(prev => ({ ...prev!, skills: { ...prev!.skills, ...updatedData.skills } })); // Update local state
  //       } else {
  //         // await axios.post('/api/profile/skills', updatedData.skills); // Removed backend call
  //         setProfileData(prev => ({ ...prev!, skills: { ...prev!.skills, ...updatedData.skills } })); // Update local state
  //       }
  //     } else if (editingSection === 'projects' && updatedData.projects) {
  //       // For projects, we need to handle each item individually
  //       for (const project of updatedData.projects) {
  //         if (project.id) {
  //           // await axios.put(`/api/profile/projects/${project.id}`, project); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, projects: prev!.projects.map(p => p.id === project.id ? project : p) })); // Update local state
  //         } else {
  //           // await axios.post('/api/profile/projects', project); // Removed backend call
  //           setProfileData(prev => ({ ...prev!, projects: [...prev!.projects, project] })); // Update local state
  //         }
  //       }
  //     }
      
  //     // Refresh the data from the server
  //     // await fetchProfileData(); // Removed backend call
  //     setIsEditMode(false);
  //     setEditingSection('');
  //   } catch (error) {
  //     console.error('Error updating profile:', error);
  //     // For demo purposes, update locally
  //     setProfileData(prev => ({ ...prev!, ...updatedData }));
  //     setIsEditMode(false);
  //     setEditingSection('');
  //   }
  // };

  // const handleCancel = () => {
  //   setIsEditMode(false);
  //   setEditingSection('');
  // };

  // Show loading screen
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // My Profile Component (for authenticated users)
  const MyProfile = () => {
    // Remove authentication check
    // if (!auth) {
    //   return <Navigate to="/login" replace />;
    // }

    if (!profileData) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Profile</h2>
            <p className="text-gray-600">Unable to load profile data. Please try again later.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header onEdit={() => {}} onLogout={() => {}} username={profileData.personalInfo.name} />
        
        <main>
          <Hero personalInfo={profileData.personalInfo} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                <About 
                  personalInfo={profileData.personalInfo} 
                  onEdit={() => {}}
                />
                <Experience 
                  experience={profileData.experience} 
                />
                <Projects 
                  projects={profileData.projects} 
                />
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                <Skills 
                  skills={profileData.skills} 
                />
                <Education 
                  education={profileData.education} 
                />
                <Contact 
                  personalInfo={profileData.personalInfo} 
                />
              </div>
            </div>
          </div>
        </main>

        {/* Remove EditModal usage */}
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        {/* Authentication routes */}
        {/* Protected routes */}
        <Route path="/my-profile" element={<MyProfile />} />
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/my-profile" replace />} />
      </Routes>
    </Router>
  );
}

export default App; 