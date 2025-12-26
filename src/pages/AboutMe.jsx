import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/akash_portfolio.png';

export default function AboutMe() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen flex flex-col relative">
            {/* Top Navigation */}
            <header className="w-full flex items-center justify-between border-b border-gray-200 dark:border-[#2b2839] px-6 py-4 md:px-10 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md fixed top-0 left-0 right-0">
                <div className="flex items-center gap-4">
                    <img
                        src={profileImage}
                        alt="Akash S Nair"
                        className="size-8 rounded-full object-cover border-2 border-primary/20"
                    />
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Akash S Nair</h2>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/projects')}>Work</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/contact')}>Contact</a>
                    </div>
                    <button className="flex items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95">
                        <span className="truncate">Hire Me</span>
                    </button>
                </div>
            </header>

            {/* Main Content Wrapper */}
            <main className="flex-grow flex flex-col items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 w-full max-w-[1400px] mx-auto">
                {/* Hero Section */}
                <section className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 py-10 lg:py-16">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left lg:w-1/2">
                        <div className="space-y-2">
                            <span className="text-primary font-bold tracking-wider uppercase text-xs">Introduction</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                                Building Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Solutions.</span>
                            </h1>
                        </div>
                        <h2 className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Hi, I'm Akash. BCA graduate specializing in <strong className="text-primary dark:text-white">Python full-stack development</strong> with Django, Flask, and React.js. I build secure, scalable web applications with clean architecture and modern UI design.
                        </h2>
                        {/* Social & Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-2">
                            <button className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                <span>Download Resume</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <a aria-label="Github" className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all group" href="#">
                                    <span className="material-symbols-outlined text-[20px] group-hover:text-white">code</span>
                                </a>
                                <a aria-label="LinkedIn" className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all group" href="#">
                                    <span className="material-symbols-outlined text-[20px] group-hover:text-white">work</span>
                                </a>
                                <a aria-label="Email" className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all group" href="#">
                                    <span className="material-symbols-outlined text-[20px] group-hover:text-white">mail</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image Content */}
                    <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Decorative blurred circle behind */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[420px] lg:h-[480px] rounded-full lg:rounded-[10rem] overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5 rotate-0 lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black relative">
                                <img
                                    alt="Professional headshot of a developer"
                                    className="w-full h-full object-cover"
                                    src={profileImage}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competencies & Passions Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-10">
                    {/* Skills Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">psychology</span>
                            Core Competencies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Python', 'Django', 'Flask', 'React.js', 'JavaScript', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Docker', 'Git'].map((skill) => (
                                <div key={skill} className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#2b2839] px-5 hover:bg-primary/20 hover:text-primary dark:hover:text-white transition-colors cursor-default">
                                    <span className="text-sm font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Passions Column */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">favorite</span>
                            Passions & Interests
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: 'code', text: 'Clean Code' },
                                { icon: 'psychology', text: 'Problem Solving' },
                                { icon: 'local_library', text: 'Continuous Learning' },
                                { icon: 'terminal', text: 'CLI Tools' },
                                { icon: 'cloud', text: 'Cloud Computing' }
                            ].map((passion) => (
                                <div key={passion.text} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-gray-300 dark:border-[#2b2839] bg-white dark:bg-transparent px-5">
                                    <span className="material-symbols-outlined text-lg text-primary">{passion.icon}</span>
                                    <span className="text-sm font-medium">{passion.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Scroll Up Indicator */}
            <div
                onClick={() => navigate('/contact')}
                className="fixed top-24 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-2 z-40 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            >
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">Contact Me</span>
                <div className="w-10 h-10 rounded-full bg-[#2b2839]/50 backdrop-blur-sm flex items-center justify-center animate-bounce border border-white/5 shadow-lg">
                    <span className="material-symbols-outlined text-white">arrow_upward</span>
                </div>
            </div>
        </div>
    );
}
