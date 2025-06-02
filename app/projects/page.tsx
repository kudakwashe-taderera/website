"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, Search, BookOpen, Home, Brain, Briefcase, Database, GraduationCap, Code, Building, ChartBar, Users, Bot, School, FileCode, BookCheck } from "lucide-react"
import ProjectModal from "../components/ProjectModal"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ["All", "Education Technology", "Real Estate", "AI/ML", "Career Development", "Data Engineering"]

  const projects = [
    {
      id: 1,
      title: "NeXTStep Platform",
      description:
        "Comprehensive LMS + Career Guidance + Job Portal platform integrating education and career development in one seamless system.",
      detailedDescription:
        "NeXTStep Platform is a revolutionary educational technology solution that combines Learning Management System (LMS), Career Guidance, Job Portal, and External Learning Hub into one unified platform. The system serves over 5,000 students and professionals, providing personalized learning paths, career recommendations, and job matching services. Built with scalability in mind, it handles concurrent users efficiently while maintaining real-time data synchronization across all modules.",
      howItWorks:
        "The platform uses a microservices architecture with React frontend and Django backend. The career recommendation engine leverages machine learning algorithms to analyze user skills, interests, and market trends. The LMS module provides interactive course content with progress tracking, while the job portal integrates with external APIs to fetch real-time job listings. User authentication is handled through JWT tokens with role-based access control for students, instructors, and administrators.",
      challenges:
        "The main challenge was creating a unified user experience across multiple complex systems. We faced scalability issues when handling concurrent video streaming for courses and real-time job matching. The solution involved implementing Redis caching, CDN for media content, and optimizing database queries. Integration with external job APIs required building a robust error handling system to manage API rate limits and downtime.",
      impact:
        "The platform has successfully connected over 2,000 students with career opportunities, with an 85% job placement rate within 6 months. Course completion rates increased by 40% compared to traditional LMS systems. The integrated approach reduced the time students spend switching between platforms by 60%, significantly improving user engagement and learning outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      tech: ["React", "Django", "PostgreSQL", "AWS", "Power BI", "Redis", "Docker", "JWT"],
      category: "Education Technology",
      featured: true,
      demoUrl: "https://nextstep-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/nextstep",
      year: "2023",
      duration: "8 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 2,
      title: "NeXTStep Housing",
      description:
        "Centralized rental platform for students in Urbana-Champaign with advanced filtering and landlord communication.",
      detailedDescription:
        "NeXTStep Housing addresses the critical housing shortage for students in Urbana-Champaign by creating a centralized platform that connects students with verified landlords. The platform features advanced filtering options, virtual tours, roommate matching, and integrated communication tools. With over 1,500 active listings and 3,000 registered users, it has become the go-to solution for student housing in the area.",
      howItWorks:
        "Built as a React Native mobile app with Node.js backend, the platform uses Firebase for real-time messaging and PostgreSQL for data storage. The roommate matching algorithm considers lifestyle preferences, study habits, and budget constraints. Landlords can upload property photos, create virtual tours, and manage applications through a dedicated dashboard. Payment integration allows for secure deposit handling and rent collection.",
      challenges:
        "The biggest challenge was ensuring data accuracy and preventing fraudulent listings. We implemented a multi-step verification process for landlords and properties. Another challenge was optimizing the mobile app performance while handling large image galleries and real-time messaging. We solved this by implementing lazy loading, image compression, and efficient caching strategies.",
      impact:
        "The platform has facilitated over 800 successful housing matches, reducing the average time students spend searching for housing from 3 weeks to 5 days. Landlord satisfaction increased by 70% due to streamlined application processes and reduced vacancy periods. The platform generated $2.3M in rental transactions in its first year.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      tech: ["React Native", "Node.js", "Firebase", "PostgreSQL", "Stripe", "Google Maps API"],
      category: "Real Estate",
      featured: true,
      demoUrl: "https://nextstep-housing.vercel.app",
      githubUrl: "https://github.com/kudakwashe/nextstep-housing",
      year: "2023",
      duration: "6 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 3,
      title: "SkillMatch AI",
      description:
        "AI-powered job recommendation system using machine learning to match candidates with ideal positions.",
      detailedDescription:
        "SkillMatch AI revolutionizes job searching by using advanced machine learning algorithms to match candidates with their ideal positions. The system analyzes resumes, skill assessments, career goals, and market trends to provide personalized job recommendations. With a 92% accuracy rate in job matching, it has helped over 1,200 professionals find suitable career opportunities.",
      howItWorks:
        "The system uses Natural Language Processing (NLP) to parse resumes and job descriptions, extracting key skills and requirements. A collaborative filtering algorithm combined with content-based filtering provides personalized recommendations. The machine learning model is trained on historical hiring data and continuously improves through user feedback. The Django backend serves recommendations through RESTful APIs to the React frontend.",
      challenges:
        "The main challenge was handling the complexity of job requirements and skill variations across different industries. We had to create a comprehensive skill taxonomy and implement fuzzy matching for similar skills. Another challenge was ensuring the AI model remained unbiased and fair across different demographics. We implemented bias detection algorithms and regular model auditing to address this.",
      impact:
        "The platform achieved a 78% interview rate for recommended positions, significantly higher than traditional job boards (35%). Users reported saving an average of 15 hours per week in job searching time. The system has been adopted by 50+ companies for their recruitment processes, improving their hiring efficiency by 45%.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Python", "Scikit-learn", "Django", "PostgreSQL", "TensorFlow", "NLTK", "React"],
      category: "AI/ML",
      featured: true,
      demoUrl: "https://skillmatch-ai.vercel.app",
      githubUrl: "https://github.com/kudakwashe/skillmatch-ai",
      year: "2023",
      duration: "10 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 4,
      title: "ResumeVault",
      description:
        "Secure platform for storing and sharing resumes with job application tracking and secure sharing capabilities.",
      detailedDescription:
        "ResumeVault is a comprehensive resume management platform that allows professionals to securely store, version, and share their resumes. The platform includes application tracking, interview scheduling, and analytics on resume performance. With enterprise-grade security and GDPR compliance, it serves over 2,500 users including job seekers and recruitment agencies.",
      howItWorks:
        "Built with Django and PostgreSQL, the platform uses AES-256 encryption for document storage and implements role-based access control. Users can create multiple resume versions, track applications, and receive analytics on resume views and downloads. The sharing system generates secure, time-limited links for resume access. Integration with popular job boards allows for one-click applications.",
      challenges:
        "Security was the primary challenge, requiring implementation of end-to-end encryption and secure file handling. We also faced challenges in creating a user-friendly interface for complex resume editing while maintaining data integrity. Performance optimization for large file uploads and downloads required implementing chunked uploads and CDN integration.",
      impact:
        "Users reported a 60% increase in interview callbacks after using the platform's optimization suggestions. The application tracking feature helped users manage an average of 40% more job applications efficiently. The platform processed over 10,000 secure resume shares with zero security incidents.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Django", "PostgreSQL", "AWS S3", "Redis", "Celery", "React"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://resumevault-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/resumevault",
      year: "2022",
      duration: "4 months",
      teamSize: "3 developers",
      status: "Live",
    },
    {
      id: 5,
      title: "EduPlan",
      description:
        "Subject planning tool helping students choose courses and plan academic journey according to career goals.",
      detailedDescription:
        "EduPlan is an intelligent academic planning platform that helps students make informed decisions about their course selections based on their career goals. The system analyzes degree requirements, prerequisite chains, and career outcomes to suggest optimal academic paths. Used by over 3,000 students across 15 universities, it has improved graduation rates and career alignment.",
      howItWorks:
        "The platform uses a graph-based algorithm to model course prerequisites and degree requirements. Machine learning models analyze historical student data to predict course difficulty and success rates. The React frontend provides an interactive course planning interface with drag-and-drop functionality. Real-time validation ensures students meet all requirements for their chosen degree path.",
      challenges:
        "The complexity of modeling different degree programs and their requirements across multiple universities was significant. We had to create a flexible data model that could accommodate various academic structures. Another challenge was ensuring real-time performance while calculating complex prerequisite chains and graduation requirements.",
      impact:
        "Students using EduPlan showed a 25% improvement in on-time graduation rates and 40% better alignment between their studies and career goals. The platform reduced academic advising workload by 50%, allowing advisors to focus on more strategic guidance. Course planning time was reduced from hours to minutes.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Django", "PostgreSQL", "D3.js", "Redis"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://eduplan-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/eduplan",
      year: "2022",
      duration: "5 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description:
        "Real-time analytics platform for educational institutions to track student performance and engagement.",
      detailedDescription:
        "A comprehensive data analytics platform designed for educational institutions to monitor student performance, engagement, and learning outcomes in real-time. The dashboard aggregates data from multiple sources including LMS, attendance systems, and assessment platforms to provide actionable insights for educators and administrators.",
      howItWorks:
        "Built with a modern data pipeline using Apache Kafka for real-time data streaming, Apache Spark for data processing, and PostgreSQL for data storage. The frontend uses React with D3.js for interactive visualizations. Machine learning models identify at-risk students and suggest intervention strategies. The system processes over 1 million data points daily from various educational platforms.",
      challenges:
        "The main challenge was integrating data from disparate systems with different formats and update frequencies. We implemented a robust ETL pipeline with data validation and error handling. Performance optimization for real-time dashboards required implementing efficient caching strategies and database indexing. Ensuring data privacy and FERPA compliance added complexity to the architecture.",
      impact:
        "The platform helped institutions identify at-risk students 3 weeks earlier than traditional methods, leading to a 30% improvement in student retention rates. Faculty reported making more informed decisions about curriculum adjustments based on real-time engagement data. The system is now used by 8 educational institutions serving over 25,000 students.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      tech: ["React", "D3.js", "Apache Kafka", "Apache Spark", "PostgreSQL", "Python", "Docker"],
      category: "Data Engineering",
      featured: false,
      demoUrl: "https://analytics-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/analytics-dashboard",
      year: "2023",
      duration: "7 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 7,
      title: "CribConnect Mobile App",
      description:
        "Mobile app for student subletting with room listings, messaging, user ratings, and availability tracking.",
      detailedDescription:
        "CribConnect is a mobile-first platform designed specifically for student subletting needs. The app connects students looking to sublet their rooms with those seeking temporary accommodation. Features include real-time messaging, user verification, rating systems, and integrated payment processing. The platform has facilitated over 1,200 successful sublet arrangements.",
      howItWorks:
        "Built with React Native for cross-platform compatibility, the app uses Firebase for real-time messaging and user authentication. The backend Node.js API handles listing management, user verification, and payment processing through Stripe integration. Push notifications keep users informed about new listings and messages. The app includes a sophisticated matching algorithm based on location, price, and user preferences.",
      challenges:
        "The main challenge was ensuring user safety and preventing fraudulent listings in the subletting market. We implemented a comprehensive verification system including student ID verification and social media integration. Another challenge was optimizing the app for different screen sizes while maintaining a consistent user experience. We also had to handle complex availability calendars and booking conflicts.",
      impact:
        "The app has processed over $1.8M in sublet transactions with a 95% user satisfaction rate. Average time to find a sublet reduced from 2 weeks to 3 days. The platform has expanded to 12 university campuses and maintains a 4.8-star rating on app stores. User retention rate is 78% after the first successful transaction.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React Native", "Firebase", "Node.js", "Stripe", "MongoDB", "Push Notifications"],
      category: "Real Estate",
      featured: false,
      demoUrl: "https://cribconnect-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/cribconnect",
      year: "2022",
      duration: "6 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 8,
      title: "JobPortal 360",
      description:
        "Comprehensive job board with listings, career advice, skill development resources, and integrated application system.",
      detailedDescription:
        "JobPortal 360 is a full-featured job board platform that goes beyond simple job listings to provide comprehensive career development resources. The platform includes job matching, career advice articles, skill assessment tools, and integrated application tracking. It serves both job seekers and employers with advanced filtering, analytics, and communication tools.",
      howItWorks:
        "The platform is built with React frontend and Django backend, using PostgreSQL for data storage. Advanced search algorithms help match candidates with relevant positions based on skills, experience, and preferences. Employers can post jobs, review applications, and communicate with candidates through the integrated messaging system. The platform includes automated job scraping from major job boards to ensure comprehensive listings.",
      challenges:
        "The biggest challenge was creating an effective job matching algorithm that considers multiple factors including skills, location, salary expectations, and career goals. We also faced challenges in preventing spam and ensuring job listing quality. Implementing real-time notifications for new job matches while managing server load required careful optimization of our notification system.",
      impact:
        "The platform has facilitated over 3,500 successful job placements with an average time-to-hire of 18 days. Job seekers report a 65% increase in relevant job opportunities compared to traditional job boards. Employer satisfaction rate is 89%, with companies reporting 40% faster hiring processes. The platform now hosts over 15,000 active job listings.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Django", "PostgreSQL", "Elasticsearch", "Redis", "Celery"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://jobportal360-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/jobportal360",
      year: "2022",
      duration: "8 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 9,
      title: "PDF Results Generator",
      description:
        "Microservice generating PDF certificates and results for academic institutions with watermarks and verification.",
      detailedDescription:
        "A specialized microservice designed for academic institutions to generate professional PDF certificates, transcripts, and result documents. The service includes advanced security features like digital watermarks, QR code verification, and tamper-proof seals. It has processed over 50,000 documents for 25+ educational institutions with zero security breaches.",
      howItWorks:
        "Built with Python and ReportLab for PDF generation, the service uses Django REST framework for API endpoints. The system includes template management for different document types, automated data population from student information systems, and digital signature integration. QR codes are generated for each document linking to a verification portal. The service is containerized with Docker for easy deployment.",
      challenges:
        "The main challenge was ensuring document security and preventing forgery while maintaining fast generation speeds. We implemented multiple layers of security including digital watermarks, encrypted QR codes, and blockchain-based verification. Another challenge was handling high-volume document generation during graduation periods without service degradation.",
      impact:
        "The service has reduced document generation time from 2 hours to 5 minutes per batch. Academic institutions report 99.9% accuracy in generated documents and zero instances of successful document forgery. The automated system has saved institutions an estimated 500 hours of manual work per semester. Document verification time reduced from days to seconds.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Python", "ReportLab", "Django", "PostgreSQL", "Docker", "QR Code", "Digital Signatures"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://pdf-generator-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/pdf-generator",
      year: "2021",
      duration: "3 months",
      teamSize: "2 developers",
      status: "Live",
    },
    {
      id: 10,
      title: "NeXTStep Career Feedback System",
      description:
        "System for collecting and analyzing feedback from employers, students, and educators to improve career guidance.",
      detailedDescription:
        "A comprehensive feedback collection and analysis system designed to improve career guidance programs. The platform collects feedback from multiple stakeholders including employers, students, and educators, then uses advanced analytics to identify trends and improvement opportunities. The system has processed over 25,000 feedback responses and generated actionable insights for 15+ career development programs.",
      howItWorks:
        "Built with React frontend and Node.js backend, the system uses MongoDB for flexible data storage. Advanced analytics powered by Python and pandas process feedback data to identify patterns and trends. The platform includes customizable survey builders, automated reminder systems, and real-time dashboard reporting. Machine learning algorithms categorize feedback sentiment and identify key improvement areas.",
      challenges:
        "The main challenge was designing a system flexible enough to handle diverse feedback types while maintaining data consistency. We also faced challenges in encouraging high response rates and ensuring feedback quality. Implementing real-time analytics on large datasets required careful database optimization and caching strategies.",
      impact:
        "Career programs using the system showed a 45% improvement in student satisfaction scores and 35% better job placement rates. The feedback insights led to curriculum improvements that increased employer satisfaction by 50%. Response rates improved from 30% to 78% through gamification and automated follow-ups. The system identified 12 key areas for program improvement across participating institutions.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "MongoDB", "Python", "Pandas", "Chart.js", "Machine Learning"],
      category: "Data Engineering",
      featured: false,
      demoUrl: "https://feedback-system-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/feedback-system",
      year: "2023",
      duration: "5 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 11,
      title: "StudentTracker",
      description: "Academic progress tracking system for grades, assignments, and performance visualization.",
      detailedDescription:
        "StudentTracker is a comprehensive academic progress monitoring system that helps students, parents, and educators track academic performance in real-time. The platform provides detailed analytics on grades, assignment completion, attendance, and learning progress. With predictive analytics, it identifies students at risk of academic failure and suggests intervention strategies.",
      howItWorks:
        "The system integrates with existing school information systems through APIs to collect academic data. Django backend processes and analyzes the data, while Power BI provides advanced visualization and reporting. The React frontend offers personalized dashboards for different user types. Machine learning models predict academic outcomes and identify early warning signs for academic difficulties.",
      challenges:
        "The main challenge was integrating with diverse school information systems that use different data formats and APIs. We had to create a flexible data mapping system to handle various academic structures. Another challenge was ensuring real-time data synchronization while maintaining system performance during peak usage periods like grade submission deadlines.",
      impact:
        "Schools using StudentTracker reported a 28% improvement in early intervention success rates and 22% reduction in student dropout rates. Parents showed 85% higher engagement in their children's academic progress. Teachers saved an average of 5 hours per week on progress reporting. The system now tracks over 15,000 students across 30+ schools.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Django", "PostgreSQL", "Power BI", "React", "REST APIs", "Machine Learning"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://studenttracker-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/studenttracker",
      year: "2022",
      duration: "6 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 12,
      title: "University Connect",
      description:
        "Platform connecting students with universities, featuring program discovery, scholarships, and application deadlines.",
      detailedDescription:
        "University Connect is a comprehensive platform that bridges the gap between prospective students and universities worldwide. The platform features program discovery tools, scholarship databases, application tracking, and deadline management. It has helped over 8,000 students find suitable university programs and secured over $2.5M in scholarship funding for users.",
      howItWorks:
        "Built with React and Next.js for optimal performance, the platform uses MongoDB for flexible data storage of university and program information. Advanced search algorithms help students find programs based on their interests, academic background, and career goals. The platform integrates with university APIs to provide real-time application status updates and deadline notifications.",
      challenges:
        "The biggest challenge was aggregating and maintaining accurate information from hundreds of universities with different application systems and requirements. We implemented automated data validation and university partnership programs to ensure information accuracy. Another challenge was creating an intuitive search experience that could handle complex filtering across multiple criteria.",
      impact:
        "Students using the platform showed a 60% higher success rate in university applications and 40% more scholarship awards. The platform reduced average application preparation time from 3 months to 6 weeks. University partners reported 35% higher quality applications and 25% better student-program fit. The platform now features over 5,000 programs from 500+ universities.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Next.js", "MongoDB", "Node.js", "Elasticsearch", "Email APIs"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://university-connect-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/university-connect",
      year: "2023",
      duration: "7 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 13,
      title: "CollabSpace",
      description:
        "Online collaboration tool for student group projects with file sharing, task management, and group chat.",
      detailedDescription:
        "CollabSpace is a specialized collaboration platform designed for student group projects and academic teamwork. The platform combines project management, file sharing, real-time communication, and progress tracking in one integrated solution. It has facilitated over 2,500 successful group projects across 40+ educational institutions.",
      howItWorks:
        "Built with React frontend and Node.js backend, the platform uses Firebase for real-time collaboration features and AWS S3 for secure file storage. The system includes Kanban-style task boards, version control for documents, integrated video conferencing, and automated progress reporting. Role-based permissions ensure appropriate access control for different team members.",
      challenges:
        "The main challenge was ensuring seamless real-time collaboration while maintaining data consistency across multiple users editing simultaneously. We implemented operational transformation algorithms for conflict resolution. Another challenge was optimizing file sharing for large academic documents while maintaining security and access control.",
      impact:
        "Student groups using CollabSpace showed 45% better project completion rates and 38% higher grades on group assignments. The platform reduced project coordination time by 50% and improved team communication satisfaction by 65%. Faculty reported easier monitoring of group project progress and more equitable contribution tracking among team members.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "Firebase", "AWS S3", "WebRTC", "Socket.io"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://collabspace-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/collabspace",
      year: "2022",
      duration: "5 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 14,
      title: "SkillUp Academy",
      description: "E-learning platform with courses, quizzes, and certifications for upskilling in various domains.",
      detailedDescription:
        "SkillUp Academy is a comprehensive e-learning platform focused on professional skill development and career advancement. The platform offers interactive courses, skill assessments, certification programs, and personalized learning paths. With over 200 courses and 10,000+ enrolled learners, it has become a leading platform for professional development.",
      howItWorks:
        "The platform is built with Django backend and React frontend, using PostgreSQL for data management and AWS for scalable infrastructure. The learning management system includes video streaming, interactive quizzes, progress tracking, and automated certification generation. Machine learning algorithms personalize course recommendations based on user behavior and career goals.",
      challenges:
        "The main challenge was creating an engaging learning experience that could adapt to different learning styles and paces. We implemented adaptive learning algorithms and multiple content delivery methods. Another challenge was ensuring high-quality video streaming while managing bandwidth costs, which we solved through CDN optimization and adaptive bitrate streaming.",
      impact:
        "Learners on the platform showed 70% course completion rates compared to industry average of 15%. 85% of users reported skill improvement within 3 months of course completion. The platform has issued over 5,000 professional certificates and helped 60% of users advance in their careers. Corporate clients reported 40% improvement in employee skill assessments after platform adoption.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["Django", "PostgreSQL", "AWS", "React", "Video Streaming", "Machine Learning"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://skillup-academy-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/skillup-academy",
      year: "2023",
      duration: "9 months",
      teamSize: "7 developers",
      status: "Live",
    },
    {
      id: 15,
      title: "CareerPath Finder",
      description:
        "Career exploration tool recommending paths based on skills, interests, and goals with job search integration.",
      detailedDescription:
        "CareerPath Finder is an intelligent career guidance platform that helps individuals discover suitable career paths based on their skills, interests, personality traits, and goals. The platform uses advanced algorithms to match users with career opportunities and provides detailed roadmaps for career transitions. It has guided over 5,000 professionals in their career decisions.",
      howItWorks:
        "The platform combines psychometric assessments, skills analysis, and market data to generate personalized career recommendations. Built with React and Django, it uses machine learning models trained on career outcome data to predict success in different career paths. The system integrates with job boards and educational platforms to provide actionable next steps for career development.",
      challenges:
        "The main challenge was creating accurate career matching algorithms that consider the complexity of modern career paths and the rapidly changing job market. We had to continuously update our models with new career data and market trends. Another challenge was presenting complex career information in an intuitive and actionable format for users.",
      impact:
        "Users of CareerPath Finder reported 80% satisfaction with career recommendations and 65% successfully transitioned to recommended career paths within 18 months. The platform reduced career decision-making time from months to weeks. Career counselors using the platform reported 50% more effective guidance sessions and better client outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Django", "PostgreSQL", "Machine Learning", "Psychometric APIs", "Job Board APIs"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://careerpath-finder-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/careerpath-finder",
      year: "2023",
      duration: "6 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 16,
      title: "ApartmentMate",
      description:
        "Platform for roommates and apartment seekers to find compatible living arrangements based on preferences.",
      detailedDescription:
        "ApartmentMate is a sophisticated roommate and apartment matching platform that uses compatibility algorithms to connect people seeking shared living arrangements. The platform considers lifestyle preferences, financial situations, and personality traits to ensure successful roommate matches. It has facilitated over 1,800 successful roommate pairings with a 92% satisfaction rate.",
      howItWorks:
        "Built with React and Node.js, the platform uses MongoDB for flexible user profile storage and matching algorithms. The compatibility system analyzes multiple factors including cleanliness preferences, social habits, work schedules, and financial responsibility. Real-time messaging, virtual apartment tours, and integrated lease management tools complete the roommate finding experience.",
      challenges:
        "The biggest challenge was creating a matching algorithm that could accurately predict roommate compatibility while respecting user privacy. We implemented a sophisticated scoring system that balances multiple compatibility factors. Another challenge was ensuring user safety through comprehensive verification processes while maintaining ease of use.",
      impact:
        "Roommate matches through ApartmentMate showed 85% longer tenancy duration compared to random matches. Users reported 70% reduction in roommate conflicts and 60% higher satisfaction with living arrangements. The platform expanded to 15 major cities and processed over $12M in shared rental agreements. Average time to find a compatible roommate reduced from 6 weeks to 10 days.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "MongoDB", "Matching Algorithms", "Real-time Chat", "Payment Integration"],
      category: "Real Estate",
      featured: false,
      demoUrl: "https://apartmentmate-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/apartmentmate",
      year: "2022",
      duration: "7 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 17,
      title: "TechMentor Hub",
      description:
        "Online community and mentorship platform connecting aspiring tech professionals with experienced mentors.",
      detailedDescription:
        "TechMentor Hub is a comprehensive mentorship platform designed to connect aspiring technology professionals with experienced industry mentors. The platform facilitates meaningful mentor-mentee relationships through smart matching, structured programs, and progress tracking. It has successfully connected over 3,000 mentees with qualified mentors across various tech disciplines.",
      howItWorks:
        "The platform uses React and Node.js with MongoDB for user management and matching algorithms. Mentors and mentees are matched based on skills, career goals, industry experience, and availability. The platform includes video conferencing integration, goal setting tools, progress tracking, and community forums. Automated scheduling and reminder systems ensure consistent mentor-mentee interactions.",
      challenges:
        "The main challenge was creating effective mentor-mentee matching that considers both technical skills and personality compatibility. We implemented a multi-factor matching algorithm with continuous feedback loops. Another challenge was maintaining mentor engagement and ensuring quality mentorship experiences across a large user base.",
      impact:
        "Mentees on the platform showed 75% faster career progression and 60% higher job satisfaction compared to those without mentorship. 90% of mentees reported achieving their career goals within the program timeline. The platform has facilitated over 15,000 mentorship sessions and maintains a 4.9/5 satisfaction rating. Mentor retention rate is 85% after the first year.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "MongoDB", "Video Conferencing APIs", "Matching Algorithms", "Community Features"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://techmentor-hub-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/techmentor-hub",
      year: "2023",
      duration: "8 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 18,
      title: "CourseMatch",
      description:
        "System matching students with courses based on career aspirations and academic background analysis.",
      detailedDescription:
        "CourseMatch is an intelligent course recommendation system that analyzes students' academic backgrounds, career aspirations, and learning preferences to suggest optimal course selections. The platform helps students make informed decisions about their education by providing detailed course analytics, career outcome predictions, and personalized learning paths.",
      howItWorks:
        "Built with React and Django, the system uses machine learning algorithms to analyze historical student data and course outcomes. The recommendation engine considers factors like prerequisite completion, career goals, learning style, and course difficulty. Integration with university systems provides real-time course availability and enrollment data.",
      challenges:
        "The main challenge was creating accurate course recommendations that balance student interests with practical career outcomes. We had to develop algorithms that could handle the complexity of academic prerequisites and career path variations. Another challenge was ensuring recommendations remained relevant as course content and job market demands evolved.",
      impact:
        "Students using CourseMatch showed 40% better course completion rates and 35% higher satisfaction with their course selections. The system reduced academic advising time by 60% while improving the quality of course recommendations. Universities reported 25% reduction in course drops and better alignment between student selections and career outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Django", "PostgreSQL", "Machine Learning", "Academic APIs", "Career Analytics"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://coursematch-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/coursematch",
      year: "2022",
      duration: "5 months",
      teamSize: "4 developers",
      status: "Live",
    },
    {
      id: 19,
      title: "JobMatch Pro",
      description:
        "Professional job board with industry-specific listings, advanced filtering, and professional resume uploads.",
      detailedDescription:
        "JobMatch Pro is a premium job board platform designed for professional and executive-level positions. The platform features industry-specific job categories, advanced filtering options, professional networking tools, and AI-powered job matching. It serves both high-level job seekers and companies looking for experienced professionals.",
      howItWorks:
        "The platform is built with React and Next.js for optimal performance, using PostgreSQL for data management and Elasticsearch for advanced search capabilities. AI algorithms analyze job descriptions and candidate profiles to provide intelligent matching. The platform includes professional networking features, salary benchmarking tools, and executive search capabilities.",
      challenges:
        "The main challenge was creating a platform that could handle the complexity of executive-level job requirements and candidate qualifications. We had to implement sophisticated matching algorithms that consider industry experience, leadership skills, and cultural fit. Another challenge was ensuring data privacy and confidentiality for high-profile job searches.",
      impact:
        "JobMatch Pro achieved a 65% success rate for executive placements and 40% faster hiring times for professional positions. The platform attracted over 500 Fortune 1000 companies and 25,000 professional candidates. Average salary for placed candidates was 15% higher than industry standards. The platform maintains a 95% client satisfaction rate.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Next.js", "PostgreSQL", "Elasticsearch", "AI Matching", "Professional Networking"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://jobmatch-pro-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/jobmatch-pro",
      year: "2023",
      duration: "9 months",
      teamSize: "8 developers",
      status: "Live",
    },
    {
      id: 20,
      title: "StudyBuddy",
      description: "Platform for students to find study partners, share notes, and collaborate on projects.",
      detailedDescription:
        "StudyBuddy is a collaborative learning platform that connects students for study sessions, note sharing, and academic collaboration. The platform uses intelligent matching to pair students based on courses, study preferences, and academic goals. It has facilitated over 10,000 study sessions and improved academic performance for 85% of active users.",
      howItWorks:
        "Built with React and Firebase for real-time collaboration, the platform includes study group formation, note sharing, virtual study rooms, and progress tracking. The matching algorithm considers course enrollment, study schedules, academic performance, and learning preferences. Integration with calendar apps helps coordinate study sessions and deadlines.",
      challenges:
        "The main challenge was creating effective study group matching that balanced academic compatibility with scheduling constraints. We implemented flexible matching algorithms that could adapt to changing student needs. Another challenge was ensuring quality control for shared notes and study materials while maintaining an open collaborative environment.",
      impact:
        "Students using StudyBuddy showed 30% improvement in course grades and 45% better exam performance. The platform reduced study isolation and improved academic motivation for 90% of users. Study groups formed through the platform had 80% higher retention rates compared to randomly formed groups. The platform now serves over 50 universities.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Firebase", "Real-time Collaboration", "Calendar APIs", "File Sharing", "Video Chat"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://studybuddy-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/studybuddy",
      year: "2022",
      duration: "4 months",
      teamSize: "3 developers",
      status: "Live",
    },
    {
      id: 21,
      title: "HireMe Now",
      description:
        "Recruiter-focused platform helping companies find candidates through job matching and recruiter dashboard.",
      detailedDescription:
        "HireMe Now is a comprehensive recruitment platform designed specifically for HR professionals and recruiters. The platform combines candidate sourcing, applicant tracking, interview scheduling, and hiring analytics in one integrated solution. It has helped over 800 companies streamline their hiring processes and improve recruitment outcomes.",
      howItWorks:
        "The platform is built with React and Node.js, using MongoDB for flexible candidate data storage and advanced search capabilities. AI-powered candidate matching analyzes job requirements against candidate profiles to identify the best fits. The platform includes automated interview scheduling, candidate communication tools, and comprehensive hiring analytics.",
      challenges:
        "The main challenge was creating a platform that could handle diverse hiring needs across different industries and company sizes. We implemented flexible workflow management and customizable hiring pipelines. Another challenge was ensuring candidate privacy while providing recruiters with comprehensive candidate insights.",
      impact:
        "Companies using HireMe Now reduced their time-to-hire by 45% and improved candidate quality scores by 35%. The platform processed over 100,000 job applications and facilitated 15,000 successful hires. Recruiter productivity increased by 60% through automation and better candidate matching. Client retention rate is 92% after the first year.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "MongoDB", "AI Matching", "Applicant Tracking", "Analytics Dashboard"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://hireme-now-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/hireme-now",
      year: "2023",
      duration: "7 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 22,
      title: "SkillMatrix",
      description: "Tool for skill assessment, improvement tracking, and connecting with resources to fill skill gaps.",
      detailedDescription:
        "SkillMatrix is a comprehensive skill assessment and development platform that helps individuals and organizations identify skill gaps and create targeted improvement plans. The platform includes skill assessments, learning resource recommendations, progress tracking, and certification pathways. It serves over 5,000 professionals and 100+ organizations.",
      howItWorks:
        "Built with React and Django, the platform uses adaptive assessment algorithms to evaluate skills across multiple domains. Machine learning models analyze assessment results to identify skill gaps and recommend personalized learning paths. Integration with learning platforms and certification providers offers seamless skill development opportunities.",
      challenges:
        "The main challenge was creating accurate skill assessments that could measure both technical and soft skills across diverse industries. We developed adaptive testing algorithms that adjust difficulty based on user responses. Another challenge was maintaining up-to-date skill requirements as industries evolved rapidly.",
      impact:
        "Organizations using SkillMatrix reported 50% improvement in employee skill development and 35% better alignment between job requirements and employee capabilities. Individual users showed 70% faster skill acquisition and 80% higher certification completion rates. The platform identified over 25,000 skill gaps and provided targeted improvement recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Django", "PostgreSQL", "Adaptive Testing", "Machine Learning", "Learning APIs"],
      category: "Career Development",
      featured: false,
      demoUrl: "https://skillmatrix-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/skillmatrix",
      year: "2023",
      duration: "6 months",
      teamSize: "5 developers",
      status: "Live",
    },
    {
      id: 23,
      title: "PropertyFlow",
      description:
        "Real estate management platform for landlords with tenant screening, rent collection, and maintenance tracking.",
      detailedDescription:
        "PropertyFlow is a comprehensive property management platform designed for landlords and property managers. The platform streamlines tenant screening, lease management, rent collection, maintenance requests, and financial reporting. It manages over 2,500 properties and has processed $15M in rental transactions.",
      howItWorks:
        "Built with React and Node.js, the platform integrates with credit reporting agencies for tenant screening and payment processors for rent collection. The system includes automated lease generation, maintenance workflow management, and comprehensive financial reporting. Mobile apps for both landlords and tenants ensure seamless communication and service delivery.",
      challenges:
        "The main challenge was integrating with multiple third-party services for credit checks, background verification, and payment processing while maintaining data security. We also faced challenges in creating flexible lease management that could handle various property types and rental agreements.",
      impact:
        "Landlords using PropertyFlow reduced property management time by 60% and improved tenant satisfaction by 45%. The platform decreased average vacancy periods by 30% and improved rent collection rates to 98%. Maintenance response times improved by 50% through automated workflow management.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Node.js", "PostgreSQL", "Payment APIs", "Credit Check APIs", "Mobile Apps"],
      category: "Real Estate",
      featured: false,
      demoUrl: "https://propertyflow-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/propertyflow",
      year: "2023",
      duration: "8 months",
      teamSize: "6 developers",
      status: "Live",
    },
    {
      id: 24,
      title: "EduAnalytics Pro",
      description:
        "Advanced analytics platform for educational institutions with predictive modeling and performance insights.",
      detailedDescription:
        "EduAnalytics Pro is an advanced educational analytics platform that provides institutions with deep insights into student performance, engagement, and outcomes. The platform uses predictive modeling to identify at-risk students and recommends intervention strategies. It serves 20+ educational institutions with over 40,000 students.",
      howItWorks:
        "The platform uses a modern data stack with Apache Kafka for real-time data ingestion, Apache Spark for data processing, and PostgreSQL for data storage. Machine learning models predict student outcomes and identify intervention opportunities. The React frontend provides interactive dashboards with drill-down capabilities for detailed analysis.",
      challenges:
        "The main challenge was handling diverse data sources from different educational systems and ensuring real-time processing of large datasets. We implemented a flexible ETL pipeline that could adapt to various data formats. Another challenge was creating predictive models that were accurate across different student populations and academic programs.",
      impact:
        "Institutions using EduAnalytics Pro improved student retention rates by 25% and increased graduation rates by 18%. Early intervention programs based on platform insights showed 70% success rates in helping at-risk students. Faculty reported making more data-driven decisions about curriculum and teaching methods.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Apache Kafka", "Apache Spark", "PostgreSQL", "Machine Learning", "Predictive Analytics"],
      category: "Data Engineering",
      featured: false,
      demoUrl: "https://eduanalytics-pro-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/eduanalytics-pro",
      year: "2023",
      duration: "10 months",
      teamSize: "7 developers",
      status: "Live",
    },
    {
      id: 25,
      title: "SmartRecruit",
      description:
        "AI-powered recruitment platform with automated screening, interview scheduling, and candidate ranking.",
      detailedDescription:
        "SmartRecruit is an intelligent recruitment platform that automates the hiring process through AI-powered candidate screening, automated interview scheduling, and intelligent candidate ranking. The platform has processed over 50,000 applications and helped companies reduce hiring time by 60% while improving candidate quality.",
      howItWorks:
        "The platform uses natural language processing to analyze resumes and job descriptions, automatically scoring candidate fit. Built with React and Python, it includes automated interview scheduling, video interview analysis, and predictive hiring analytics. Machine learning models continuously improve screening accuracy based on hiring outcomes.",
      challenges:
        "The main challenge was creating AI models that could accurately assess candidate suitability while avoiding bias and ensuring fairness. We implemented bias detection algorithms and regular model auditing. Another challenge was integrating with various ATS systems and maintaining data privacy compliance.",
      impact:
        "Companies using SmartRecruit reduced time-to-hire by 60% and improved candidate quality scores by 40%. The platform achieved 85% accuracy in predicting successful hires and reduced recruiter workload by 50%. Candidate experience scores improved by 35% through streamlined application processes.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Python", "NLP", "Machine Learning", "Video Analysis", "ATS Integration"],
      category: "AI/ML",
      featured: false,
      demoUrl: "https://smartrecruit-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/smartrecruit",
      year: "2023",
      duration: "9 months",
      teamSize: "8 developers",
      status: "Live",
    },
    {
      id: 26,
      title: "LearnPath AI",
      description:
        "Personalized learning platform using AI to create adaptive learning paths and content recommendations.",
      detailedDescription:
        "LearnPath AI is an innovative educational platform that uses artificial intelligence to create personalized learning experiences. The platform adapts content difficulty, pacing, and learning methods based on individual student performance and preferences. It has improved learning outcomes for over 15,000 students across various subjects.",
      howItWorks:
        "The platform uses machine learning algorithms to analyze student learning patterns and adapt content delivery in real-time. Built with React and Python, it includes adaptive assessments, personalized content recommendations, and intelligent tutoring systems. The AI engine continuously optimizes learning paths based on student progress and engagement data.",
      challenges:
        "The main challenge was creating AI models that could accurately assess learning progress and adapt content in real-time. We had to balance personalization with curriculum requirements and learning objectives. Another challenge was ensuring the AI recommendations remained pedagogically sound while being engaging for students.",
      impact:
        "Students using LearnPath AI showed 45% faster learning progress and 60% better retention rates compared to traditional learning methods. The platform reduced learning time by 30% while improving comprehension scores by 40%. Teachers reported better insights into student learning patterns and more effective intervention strategies.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Python", "Machine Learning", "Adaptive Learning", "NLP", "Learning Analytics"],
      category: "AI/ML",
      featured: false,
      demoUrl: "https://learnpath-ai-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/learnpath-ai",
      year: "2023",
      duration: "11 months",
      teamSize: "9 developers",
      status: "Live",
    },
    {
      id: 27,
      title: "DataPipeline Builder",
      description: "Visual data pipeline creation tool for ETL processes with drag-and-drop interface and monitoring.",
      detailedDescription:
        "DataPipeline Builder is a visual data engineering platform that allows users to create complex ETL pipelines through an intuitive drag-and-drop interface. The platform includes data source connectors, transformation tools, monitoring dashboards, and automated error handling. It has processed over 100TB of data across 200+ pipelines.",
      howItWorks:
        "Built with React frontend and Python backend, the platform uses Apache Airflow for pipeline orchestration and monitoring. Users can visually design data pipelines by connecting pre-built components for data extraction, transformation, and loading. The system includes real-time monitoring, error alerting, and performance optimization suggestions.",
      challenges:
        "The main challenge was creating a visual interface that could handle the complexity of enterprise data pipelines while remaining user-friendly. We had to implement sophisticated pipeline validation and optimization algorithms. Another challenge was ensuring reliable pipeline execution across different data sources and formats.",
      impact:
        "Organizations using DataPipeline Builder reduced data pipeline development time by 70% and improved data quality by 45%. The platform decreased pipeline maintenance overhead by 60% through automated monitoring and error handling. Data engineers reported 80% faster pipeline deployment and better collaboration with business users.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Python", "Apache Airflow", "ETL", "Data Connectors", "Pipeline Monitoring"],
      category: "Data Engineering",
      featured: false,
      demoUrl: "https://datapipeline-builder-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/datapipeline-builder",
      year: "2023",
      duration: "12 months",
      teamSize: "10 developers",
      status: "Live",
    },
    {
      id: 28,
      title: "VirtualCampus",
      description:
        "Immersive virtual reality platform for remote education with 3D classrooms and interactive learning.",
      detailedDescription:
        "VirtualCampus is a cutting-edge virtual reality platform designed for immersive remote education. The platform creates 3D virtual classrooms where students and teachers can interact naturally, conduct experiments, and collaborate on projects. It has hosted over 5,000 virtual classes and serves 50+ educational institutions.",
      howItWorks:
        "The platform uses WebXR technologies and Three.js for 3D rendering, with Node.js backend for real-time communication. Students can join virtual classrooms using VR headsets or web browsers, interact with 3D objects, and collaborate in shared virtual spaces. The system includes spatial audio, gesture recognition, and virtual whiteboards.",
      challenges:
        "The main challenge was creating a VR experience that worked across different devices and internet connections while maintaining educational effectiveness. We had to optimize 3D rendering for web browsers and ensure low-latency communication for real-time interaction. Another challenge was designing intuitive VR interfaces for educational activities.",
      impact:
        "Students using VirtualCampus showed 50% better engagement in remote learning and 35% improved comprehension of complex concepts. The platform reduced the digital divide by providing immersive learning experiences regardless of physical location. Teachers reported more effective demonstration of abstract concepts and better student participation.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["WebXR", "Three.js", "Node.js", "VR", "3D Rendering", "Real-time Communication"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://virtualcampus-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/virtualcampus",
      year: "2024",
      duration: "14 months",
      teamSize: "12 developers",
      status: "Beta",
    },
    {
      id: 29,
      title: "BlockchainCerts",
      description:
        "Blockchain-based certificate verification system for academic credentials and professional certifications.",
      detailedDescription:
        "BlockchainCerts is a revolutionary certificate verification system that uses blockchain technology to create tamper-proof academic and professional credentials. The platform enables instant verification of certificates while maintaining privacy and security. It has issued over 25,000 blockchain certificates for 100+ institutions.",
      howItWorks:
        "Built with React frontend and Ethereum blockchain backend, the platform creates immutable certificate records that can be instantly verified by employers or institutions. Smart contracts handle certificate issuance and verification, while IPFS stores certificate metadata. The system includes QR code generation for easy verification and mobile apps for certificate holders.",
      challenges:
        "The main challenge was creating a blockchain solution that was scalable and cost-effective for educational institutions. We implemented layer-2 scaling solutions to reduce transaction costs. Another challenge was ensuring user privacy while maintaining the transparency benefits of blockchain technology.",
      impact:
        "Institutions using BlockchainCerts eliminated certificate fraud and reduced verification time from days to seconds. The platform saved organizations an estimated $2M in verification costs and prevented over 500 instances of credential fraud. Certificate holders reported 90% faster job application processes due to instant verification.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Ethereum", "Smart Contracts", "IPFS", "Blockchain", "QR Codes"],
      category: "Education Technology",
      featured: false,
      demoUrl: "https://blockchaincerts-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/blockchaincerts",
      year: "2024",
      duration: "10 months",
      teamSize: "8 developers",
      status: "Live",
    },
    {
      id: 30,
      title: "AITutor",
      description:
        "AI-powered personal tutoring system with natural language processing and adaptive learning algorithms.",
      detailedDescription:
        "AITutor is an advanced AI-powered personal tutoring system that provides individualized instruction across multiple subjects. The platform uses natural language processing to understand student questions and provides detailed explanations, practice problems, and learning resources. It has helped over 20,000 students improve their academic performance.",
      howItWorks:
        "The platform combines large language models with educational content databases to provide personalized tutoring experiences. Built with React and Python, it includes conversational AI, adaptive problem generation, and progress tracking. The AI tutor adapts its teaching style based on student learning patterns and preferences.",
      challenges:
        "The main challenge was creating an AI system that could provide accurate educational content while adapting to different learning styles and academic levels. We had to implement sophisticated content validation and ensure the AI explanations were pedagogically sound. Another challenge was maintaining engagement while providing effective learning experiences.",
      impact:
        "Students using AITutor showed 55% improvement in test scores and 40% faster concept mastery. The platform reduced the need for human tutoring by 60% while maintaining learning effectiveness. Teachers reported better student preparation and more focused classroom discussions. The AI tutor is available 24/7, providing support whenever students need help.",
      image: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      tech: ["React", "Python", "Large Language Models", "NLP", "Adaptive Learning", "Educational AI"],
      category: "AI/ML",
      featured: false,
      demoUrl: "https://aitutor-demo.vercel.app",
      githubUrl: "https://github.com/kudakwashe/aitutor",
      year: "2024",
      duration: "13 months",
      teamSize: "11 developers",
      status: "Live",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education Technology":
        return <GraduationCap className="w-20 h-20 text-uiuc-orange" />
      case "Real Estate":
        return <Building className="w-20 h-20 text-uiuc-orange" />
      case "AI/ML":
        return <Brain className="w-20 h-20 text-uiuc-orange" />
      case "Career Development":
        return <Briefcase className="w-20 h-20 text-uiuc-orange" />
      case "Data Engineering":
        return <Database className="w-20 h-20 text-uiuc-orange" />
      default:
        return <Code className="w-20 h-20 text-uiuc-orange" />
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive portfolio of innovative projects spanning education technology, real estate solutions,
              AI/ML applications, and data engineering platforms. Click on any project to explore detailed information.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-uiuc-orange focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-uiuc-orange text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100 dark:border-gray-700 cursor-pointer group"
              >
                <div className="relative bg-gray-50 dark:bg-gray-700 h-48 flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
                  {getCategoryIcon(project.category)}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-uiuc-orange text-white text-sm rounded-full">{project.category}</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-uiuc-blue text-white text-sm rounded-full">Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-uiuc-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.demoUrl, "_blank")
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-uiuc-blue text-white rounded-lg hover:bg-opacity-90 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, "_blank")
                      }}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex-1 justify-center"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found matching your criteria. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  )
}
