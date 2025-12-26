import { useNavigate } from 'react-router-dom';

export default function CentralHub() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-dark text-white font-display overflow-hidden h-screen w-screen selection:bg-primary selection:text-white relative"
        >

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60vw] h-[60vw] center-glow blur-[100px] rounded-full opacity-60"></div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col h-full w-full">
                {/* Header */}
                <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-50">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white text-2xl">terminal</span>
                        </div>
                        <h2 className="text-white text-lg font-bold tracking-tight hidden sm:block">AKASH.DEV</h2>
                    </div>
                    <button className="flex items-center justify-center size-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 backdrop-blur-md transition-colors group">
                        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">menu</span>
                    </button>
                </header>

                {/* Location Info */}
                <div className="absolute bottom-8 left-8 z-50 hidden md:flex items-center gap-4 text-[#a19db9] text-xs font-mono tracking-widest uppercase">
                    <div className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-[#131022]/80 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-lg">my_location</span>
                    </div>
                    <div>
                        <p>LOC: [0, 0]</p>
                        <p>HUB: CENTRAL</p>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-1 flex flex-col items-center justify-center relative w-full h-full p-6">
                    {/* Top - About Me/Contact */}
                    <div
                        onClick={() => navigate('/about')}
                        className="absolute top-8 sm:top-12 md:top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer z-20"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:-translate-y-1 transition-transform">arrow_upward</span>
                        </div>
                        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase">About Me</span>
                    </div>

                    {/* Left - Tools & Technologies */}
                    <div
                        onClick={() => navigate('/tools')}
                        className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider text-[#a19db9] group-hover:text-white transition-colors uppercase -rotate-90 whitespace-nowrap">Tools</span>
                    </div>

                    {/* Right - Projects */}
                    <div
                        onClick={() => navigate('/projects')}
                        className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20"
                    >
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined text-lg sm:text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                        <span className="text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wider text-[#a19db9] group-hover:text-white transition-colors uppercase rotate-90 whitespace-nowrap">Projects</span>
                    </div>

                    {/* Bottom - Experience/Education */}
                    <div
                        onClick={() => navigate('/experience')}
                        className="absolute bottom-8 sm:bottom-12 md:bottom-24 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-2 group cursor-pointer text-center z-20"
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
                            <button className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-white text-background-dark hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                                <span>Explore Portfolio</span>
                                <span className="material-symbols-outlined text-base sm:text-lg transition-transform group-hover:rotate-45">explore</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="absolute bottom-6 w-full flex justify-center pointer-events-none z-0">
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-[#131022]/50 backdrop-blur-md border border-white/5">
                        <span className="material-symbols-outlined text-white/40 text-sm">touch_app</span>
                        <p className="text-[#a19db9] text-xs font-medium tracking-wide">Click to Navigate</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
