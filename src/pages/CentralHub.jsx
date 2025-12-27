import { useNavigate } from 'react-router-dom';
import { useDragNavigation } from '../hooks/useDragNavigation';

export default function CentralHub() {
    const navigate = useNavigate();

    const { dragState, handlers } = useDragNavigation({
        UP: '/about',
        DOWN: '/experience',
        LEFT: '/tools',
        RIGHT: '/projects'
    });

    const getOverlayContent = () => {
        if (!dragState.isDragging || !dragState.direction) return null;

        const config = {
            UP: { icon: 'arrow_upward', label: 'About Me', color: 'from-blue-500/20 to-purple-500/20' },
            DOWN: { icon: 'arrow_downward', label: 'Experience', color: 'from-emerald-500/20 to-teal-500/20' },
            LEFT: { icon: 'arrow_back', label: 'Tools', color: 'from-orange-500/20 to-red-500/20' },
            RIGHT: { icon: 'arrow_forward', label: 'Projects', color: 'from-pink-500/20 to-rose-500/20' }
        };

        const { icon, label, color } = config[dragState.direction];
        const opacity = Math.min(dragState.distance / 200, 0.8); // Cap opacity at 0.8
        const scale = Math.min(1 + (dragState.distance / 1000), 1.2);

        return (
            <div
                className={`fixed inset-0 z-[60] flex items-center justify-center pointer-events-none transition-all duration-300`}
                style={{ opacity }}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} backdrop-blur-[2px]`}></div>
                <div
                    className="relative flex flex-col items-center gap-4 transition-transform duration-100"
                    style={{ transform: `scale(${scale})` }}
                >
                    <div className="size-20 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl">
                        <span className="material-symbols-outlined text-4xl text-white">{icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-widest uppercase shadow-black drop-shadow-lg">{label}</h3>
                    <p className="text-white/60 text-sm font-mono tracking-wider">Release to navigate</p>
                </div>
            </div>
        );
    };

    return (
        <div
            className="bg-background-dark text-white font-display overflow-hidden h-screen w-screen selection:bg-primary selection:text-white relative touch-none select-none"
            {...handlers}
        >
            {getOverlayContent()}
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60vw] h-[60vw] center-glow blur-[100px] rounded-full opacity-60"></div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col h-full w-full">
                {/* Header */}
                <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-50 pointer-events-none">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-2xl">terminal</span>
                        </div>
                        <h2 className="text-white text-lg font-bold tracking-tight hidden sm:block">AKASH.DEV</h2>
                    </div>
                </header>



                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center relative w-full h-full p-6">
                    {/* Top - About Me/Contact */}
                    <div
                        onClick={() => navigate('/about')}
                        className="absolute top-20 sm:top-12 md:top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer z-30"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:-translate-y-1 transition-transform">arrow_upward</span>
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase">About Me</span>
                    </div>

                    {/* Left - Tools & Technologies */}
                    <div
                        onClick={() => navigate('/tools')}
                        className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider text-[#a19db9] group-hover:text-white transition-colors uppercase -rotate-90 whitespace-nowrap">Tools</span>
                    </div>

                    {/* Right - Projects */}
                    <div
                        onClick={() => navigate('/projects')}
                        className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider text-[#a19db9] group-hover:text-white transition-colors uppercase rotate-90 whitespace-nowrap">Projects</span>
                    </div>

                    {/* Bottom - Experience/Education */}
                    <div
                        onClick={() => navigate('/experience')}
                        className="absolute bottom-8 sm:bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-2 group cursor-pointer text-center z-30"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:translate-y-1 transition-transform">arrow_downward</span>
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase px-2">Experience</span>
                    </div>

                    {/* Center Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 animate-fade-in">
                        <div className="absolute -inset-10 border border-primary/20 rounded-full w-[120%] h-[150%] left-[-10%] top-[-25%] animate-pulse-slow pointer-events-none hidden lg:block"></div>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-4 sm:mb-6 drop-shadow-2xl relative leading-tight">
                            AKASH S
                            <span className="text-primary block sm:inline"> NAIR</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-8 flex-wrap justify-center">
                            <p className="text-[#a19db9] text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide">
                                Python Full-Stack Developer
                            </p>
                            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase">Available for work</span>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-12">
                            <button onClick={() => navigate('/projects')} className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-white text-background-dark hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                <span>Explore Portfolio</span>
                                <span className="material-symbols-outlined text-base sm:text-lg transition-transform group-hover:rotate-45">explore</span>
                            </button>
                        </div>

                        {/* Social Links - Added beautifully */}
                        <div className="flex items-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <a
                                href="https://github.com/astradevop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/20"
                                aria-label="GitHub"
                            >
                                <svg className="w-6 h-6 fill-white/70 group-hover:fill-primary transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.08-.735.075-.72.075-.72 1.2.09 1.83 1.245 1.83 1.245 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aakash-s-nair"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0077b5]/50 hover:scale-110 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-black/20"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-white/70 group-hover:fill-[#0077b5] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="absolute bottom-6 w-full flex justify-center pointer-events-none z-0 hidden sm:flex">
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#131022]/50 backdrop-blur-md border border-white/5">
                        <span className="material-symbols-outlined text-white/40 text-sm">touch_app</span>
                        <p className="text-[#a19db9] text-xs font-medium tracking-wide">Click to Navigate</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
