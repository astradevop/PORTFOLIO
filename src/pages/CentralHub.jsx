import { useNavigate } from 'react-router-dom';
import { useDragNavigation } from '../hooks/useDragNavigation';

export default function CentralHub() {
    const navigate = useNavigate();

    // Enable drag/swipe/keyboard navigation with visual feedback
    const { dragOffset, isDragging, dragDirection } = useDragNavigation({
        up: '/about',
        down: '/experience',
        left: '/tools',
        right: '/projects'
    });

    const getPageLabel = () => {
        switch (dragDirection) {
            case 'up': return 'ABOUT ME';
            case 'down': return 'EXPERIENCE';
            case 'left': return 'TOOLS';
            case 'right': return 'PROJECTS';
            default: return null;
        }
    };

    return (
        <div
            className="bg-background-dark text-white font-display overflow-hidden h-screen w-screen selection:bg-primary selection:text-white relative select-none"
            style={{
                transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                touchAction: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none'
            }}
        >
            {/* Drag Indicator Overlay */}
            {isDragging && dragDirection && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className="bg-primary/20 backdrop-blur-md border border-primary/50 px-8 py-6 rounded-2xl shadow-2xl animate-pulse">
                        <div className="flex flex-col items-center gap-3">
                            <span className="material-symbols-outlined text-6xl text-primary">
                                {dragDirection === 'up' && 'arrow_upward'}
                                {dragDirection === 'down' && 'arrow_downward'}
                                {dragDirection === 'left' && 'arrow_back'}
                                {dragDirection === 'right' && 'arrow_forward'}
                            </span>
                            <p className="text-white text-2xl font-bold tracking-wider">{getPageLabel()}</p>
                            <p className="text-white/70 text-sm">Release to navigate</p>
                        </div>
                    </div>
                </div>
            )}

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
                        className="absolute top-12 sm:top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">arrow_upward</span>
                        </div>
                        <span className="text-sm font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase">About Me/Contact</span>
                    </div>

                    {/* Left - Tools & Technologies */}
                    <div
                        onClick={() => navigate('/tools')}
                        className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 flex flex-row items-center gap-4 group cursor-pointer hidden sm:flex"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        </div>
                        <div className="flex flex-col items-start opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-bold tracking-widest text-white uppercase">Tools & Technologies</span>
                            <span className="text-xs text-[#a19db9]">Philosophy & Stack</span>
                        </div>
                    </div>

                    {/* Right - Projects */}
                    <div
                        onClick={() => navigate('/projects')}
                        className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 flex flex-row-reverse items-center gap-4 group cursor-pointer hidden sm:flex"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                        <div className="flex flex-col items-end opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="text-sm font-bold tracking-widest text-white uppercase">Projects</span>
                            <span className="text-xs text-[#a19db9]">Thoughts & Notes</span>
                        </div>
                    </div>

                    {/* Bottom - Experience/Education */}
                    <div
                        onClick={() => navigate('/experience')}
                        className="absolute bottom-12 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center gap-3 group cursor-pointer text-center"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-background-dark/50 text-white backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all">
                            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">arrow_downward</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase">Professional Experience /</span>
                            <span className="text-xs font-bold tracking-widest text-[#a19db9] group-hover:text-white transition-colors uppercase mt-0.5">Education and Certifications</span>
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto animate-fade-in px-4">
                        <div className="absolute -inset-10 border border-primary/20 rounded-full w-[120%] h-[150%] left-[-10%] top-[-25%] animate-pulse-slow pointer-events-none hidden md:block"></div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-4 md:mb-6 drop-shadow-2xl relative leading-tight">
                            AKASH S
                            <span className="text-primary block md:inline"> NAIR</span>
                        </h1>
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
                            <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide text-[#a19db9]">
                                Python Full-Stack Developer
                            </p>
                            <div className="hidden md:block w-px h-6 bg-white/20"></div>
                            <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase">Available for work</span>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-12">
                            <button className="group relative flex items-center justify-center gap-2 md:gap-3 bg-white text-background-dark hover:bg-gray-200 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-95">
                                <span>Explore Portfolio</span>
                                <span className="material-symbols-outlined text-base md:text-lg transition-transform group-hover:rotate-45">explore</span>
                            </button>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="absolute bottom-4 md:bottom-6 w-full flex justify-center pointer-events-none z-0 px-4">
                    <div className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-[#131022]/50 backdrop-blur-md border border-white/5">
                        <span className="material-symbols-outlined text-white/40 text-sm">drag_pan</span>
                        <p className="text-[#a19db9] text-[10px] md:text-xs font-medium tracking-wide">
                            <span className="hidden sm:inline">Drag, Swipe, or use Arrow Keys to Navigate</span>
                            <span className="sm:hidden">Swipe to Navigate</span>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
