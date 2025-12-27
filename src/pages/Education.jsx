import { useNavigate } from 'react-router-dom';

export default function Education() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"></div>
            </div>

            {/* Navigation to Experience - Spatially Up */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
                <button
                    onClick={() => navigate('/experience')}
                    className="group flex flex-col-reverse items-center gap-1 bg-[#1d1c27]/90 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-105"
                >
                    <span className="text-white font-bold tracking-wide uppercase text-sm">Back to Experience</span>
                    <span className="material-symbols-outlined text-primary group-hover:-translate-y-1 transition-transform">keyboard_arrow_up</span>
                </button>
            </div>

            {/* Main Container */}
            <div className="relative z-10 layout-container flex h-full grow flex-col max-w-[1440px] mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:px-20 xl:py-16">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 animate-fade-in-down">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                            Education & <span className="text-primary">Certifications</span>
                        </h1>
                        <p className="text-text-muted text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                            My academic journey and professional certifications that build the foundation of my expertise in Python full-stack development.
                        </p>
                    </div>
                </header>

                {/* Two Column Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Column A: Education Timeline */}
                    <section className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">school</span>
                            </span>
                            Formal Education
                        </h2>
                        <div className="relative pl-4 md:pl-0">
                            <div className="grid grid-cols-[auto_1fr] gap-x-6 group/timeline">
                                {/* Item 1 */}
                                <div className="flex flexcol items-center pt-2">
                                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background-dark outline outline-1 outline-white/20 z-10 relative"></div>
                                    <div className="w-[2px] bg-gradient-to-b from-primary to-white/10 h-full grow my-2"></div>
                                </div>
                                <div className="pb-10">
                                    <div className="bg-white/5 border border-white/5 dark:bg-card-dark dark:border-white/10 p-6 md:p-8 rounded-[2rem] hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group/card hover:-translate-y-1 cursor-default">
                                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">BCA (Information Technology)</h3>
                                            <span className="px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/20 whitespace-nowrap">Completed Jun 2025</span>
                                        </div>
                                        <div className="text-text-muted font-medium text-base mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[20px]">account_balance</span>
                                            Ettumanoorappan College (Affiliated to Mahatma Gandhi University)
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-center pt-2">
                                    <div className="w-4 h-4 rounded-full bg-white/20 border-4 border-background-dark outline outline-1 outline-white/20 z-10 relative"></div>
                                </div>
                                <div className="pb-4">
                                    <div className="bg-white/5 border border-white/5 dark:bg-card-dark dark:border-white/10 p-6 md:p-8 rounded-[2rem] hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group/card hover:-translate-y-1 cursor-default">
                                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">Higher Secondary (Computer Science)</h3>
                                            <span className="px-4 py-1 rounded-full bg-white/5 text-text-muted text-sm font-bold border border-white/10 whitespace-nowrap">Completed Jun 2022</span>
                                        </div>
                                        <div className="text-text-muted font-medium text-base mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[20px]">location_city</span>
                                            IHRD Technical HSS, Puthuppally
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Column B: Certifications List */}
                    <section className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">workspace_premium</span>
                            </span>
                            Certifications
                        </h2>
                        <div className="flex flex-col gap-4">
                            {/* Certification Card 1 */}
                            <div className="flex items-center gap-4 bg-white/5 border border-white/5 dark:bg-card-dark dark:border-white/10 p-4 pr-6 rounded-full hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                                <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#FF5722] to-[#FF5722]/50 flex items-center justify-center text-white shadow-lg">
                                    <span className="font-bold text-lg">AI</span>
                                </div>
                                <div className="flex flex-col grow">
                                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">AI Tools & ChatGPT Workshop</h4>
                                    <p className="text-sm text-text-muted">Be10X • Apr 2023</p>
                                </div>
                                <span className="material-symbols-outlined text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </div>

                            {/* Certification Card 2 */}
                            <div className="flex items-center gap-4 bg-white/5 border border-white/5 dark:bg-card-dark dark:border-white/10 p-4 pr-6 rounded-full hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                                <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-[#4B8BBE] to-[#FFD43B] flex items-center justify-center text-white shadow-lg">
                                    <span className="material-symbols-outlined text-3xl">terminal</span>
                                </div>
                                <div className="flex flex-col grow">
                                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Python Programming (Beginner → Intermediate)</h4>
                                    <p className="text-sm text-text-muted">KELTRON(K) • 2023</p>
                                </div>
                                <span className="material-symbols-outlined text-text-muted group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
