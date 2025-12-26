import { useNavigate } from 'react-router-dom';

export default function Experience() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display min-h-screen overflow-x-hidden selection:bg-primary selection:text-white">
            {/* Sticky Top Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 pointer-events-none">
                <div className="pointer-events-auto">
                    <a
                        onClick={() => navigate('/')}
                        className="group flex items-center gap-2 bg-card-dark/80 backdrop-blur-md border border-[#2b2839] px-6 py-2 rounded-full shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-primary group-hover:-translate-y-1 transition-transform">keyboard_arrow_up</span>
                        <span className="text-sm font-bold tracking-wide uppercase text-white/90">Back to Hub</span>
                    </a>
                </div>
            </nav>

            <div className="layout-container flex flex-col items-center w-full max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pt-28 pb-32">
                {/* Header Section */}
                <header className="w-full flex flex-col items-start gap-4 mb-16 animate-fade-in-down">
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Work Experience</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                        Professional Experience
                    </h1>
                    <p className="text-[#a19db9] max-w-2xl text-lg leading-relaxed">
                        My journey in Python full-stack development, highlighting key achievements and the technologies I've mastered.
                    </p>
                </header>

                {/* Timeline Section */}
                <div className="w-full flex flex-col relative">
                    {/* Timeline Item - Internship */}
                    <div className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-12 relative">
                        <div className="flex flex-col items-center pt-2">
                            <div className="relative z-10 flex items-center justify-center size-12 rounded-full bg-primary shadow-[0_0_20px_rgba(55,19,236,0.5)] border-4 border-background-dark text-white">
                                <span className="material-symbols-outlined text-[20px]">code</span>
                            </div>
                            <div className="w-[2px] bg-gradient-to-b from-primary to-[#2b2839] grow h-full -mt-2"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="relative bg-card-dark border border-[#2b2839] p-6 md:p-8 rounded-xl hover:border-primary/40 transition-colors duration-300 group-hover:bg-[#232036]">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                            <span className="material-symbols-outlined text-white">terminal</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Full Stack Developer Intern</h3>
                                            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mt-1">SMEC LABS, KOCHI, KALOOR</h4>
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Developed full-stack web applications using Python, Django, and Flask with clean, maintainable backend architecture.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Designed and implemented RESTful APIs to support frontend applications built with React.js.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Built responsive and modern user interfaces using Tailwind CSS and reusable React components.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Implemented secure user authentication and authorization using JWT tokens and role-based access control.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Integrated relational and NoSQL databases (MySQL, MongoDB) with optimized queries and ORM-based data handling.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Developed core application features including user onboarding, dashboards, CRUD modules, and admin panels.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Integrated third-party services such as payment processing and external APIs to support real-world use cases.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Containerized applications using Docker and deployed production-ready systems with Nginx and Gunicorn.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Collaborated on UI/UX design using Figma and converted prototypes into fully functional web interfaces.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-[#cbc8d6] text-sm md:text-base leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-[2px]">check_circle</span>
                                        <span>Performed testing, debugging, and performance optimization across backend and frontend components.</span>
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'Django', 'Flask', 'React.js', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Docker', 'Nginx', 'JWT'].map((skill) => (
                                        <span key={skill} className="bg-white/5 text-white/80 px-4 py-1.5 rounded-full text-xs font-medium border border-white/5">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer / End of List Indicator */}
                    <div className="flex justify-center mt-12 mb-20 text-[#2b2839]">
                        <span className="material-symbols-outlined text-4xl opacity-20">more_horiz</span>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-8 right-8 z-40">
                <button
                    onClick={() => navigate('/education')}
                    className="group flex items-center gap-3 bg-primary hover:bg-[#2b0eb5] text-white pl-5 pr-6 py-4 rounded-full shadow-[0_8px_30px_rgba(55,19,236,0.5)] hover:shadow-[0_8px_35px_rgba(55,19,236,0.7)] transition-all duration-300 transform hover:-translate-y-1"
                >
                    <span className="material-symbols-outlined text-[24px]">school</span>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-bold leading-none">View Education</span>
                        <span className="text-[10px] uppercase tracking-wide opacity-80 leading-none mt-1">& Certifications</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
