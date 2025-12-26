import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const navigate = useNavigate();

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-200">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#2b2839] px-6 lg:px-10 py-4 sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">Portfolio</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-9">
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/projects')}>Work</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/about')}>About</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors cursor-pointer" onClick={() => navigate('/contact')}>Contact</a>
                        </nav>
                        <button className="flex items-center justify-center rounded-full size-10 bg-gray-200 dark:bg-[#2b2839] hover:bg-gray-300 dark:hover:bg-[#3f3b54] transition-colors text-gray-900 dark:text-white">
                            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                        </button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow flex flex-col items-center justify-center p-6 lg:p-10 relative">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"></div>
                    </div>

                    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 py-10">
                        {/* Left Column: Info & Context */}
                        <div className="flex flex-col justify-center space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                                    <span className="material-symbols-outlined text-sm">north</span>
                                    Top Section
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                                    Let's Build <br className="hidden lg:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Something Together</span>
                                </h1>
                                <p className="text-gray-600 dark:text-[#a19db9] text-lg leading-relaxed max-w-md">
                                    Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 dark:bg-[#2b2839] text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-[#a19db9] font-medium">Email Me</p>
                                        <a className="text-lg font-bold hover:text-primary transition-colors" href="mailto:akash.bmrskr@gmail.com">akash.bmrskr@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 dark:bg-[#2b2839] text-primary">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-[#a19db9] font-medium">Location</p>
                                        <p className="text-lg font-bold">Kottayam, Kerala</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Dock */}
                            <div className="pt-4">
                                <p className="text-sm text-gray-500 dark:text-[#a19db9] mb-4 font-medium">Connect on Socials</p>
                                <div className="flex items-center gap-3">
                                    <a className="group flex items-center justify-center size-12 rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all duration-300" href="#">
                                        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                    <a className="group flex items-center justify-center size-12 rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all duration-300" href="#">
                                        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="group flex items-center justify-center size-12 rounded-full bg-gray-200 dark:bg-[#2b2839] hover:bg-primary hover:text-white transition-all duration-300" href="#">
                                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="relative">
                            <div className="bg-white dark:bg-[#1d1c27]/60 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] border border-gray-100 dark:border-[#2b2839] shadow-xl shadow-primary/5">
                                <form className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold ml-4 text-gray-700 dark:text-gray-300">Your Name</span>
                                            <input className="form-input w-full rounded-xl h-14 px-6 bg-gray-50 dark:bg-[#131022] border-gray-200 dark:border-[#3f3b54] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#a19db9] transition-all" placeholder="John Doe" type="text" />
                                        </label>
                                        <label className="flex flex-col gap-2">
                                            <span className="text-sm font-semibold ml-4 text-gray-700 dark:text-gray-300">Your Email</span>
                                            <input className="form-input w-full rounded-xl h-14 px-6 bg-gray-50 dark:bg-[#131022] border-gray-200 dark:border-[#3f3b54] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#a19db9] transition-all" placeholder="john@example.com" type="email" />
                                        </label>
                                    </div>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold ml-4 text-gray-700 dark:text-gray-300">Subject</span>
                                        <input className="form-input w-full rounded-xl h-14 px-6 bg-gray-50 dark:bg-[#131022] border-gray-200 dark:border-[#3f3b54] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#a19db9] transition-all" placeholder="Project Proposal" type="text" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-semibold ml-4 text-gray-700 dark:text-gray-300">Message</span>
                                        <textarea className="form-textarea w-full rounded-[2rem] min-h-[160px] p-6 bg-gray-50 dark:bg-[#131022] border-gray-200 dark:border-[#3f3b54] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#a19db9] resize-none transition-all" placeholder="Tell me about your goals..."></textarea>
                                    </label>
                                    <div className="pt-2">
                                        <button className="group w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-[0.98]" type="button">
                                            Send Message
                                            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">send</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Hint */}
                    <div
                        onClick={() => navigate('/about')}
                        className="mt-auto pt-16 pb-8 flex flex-col items-center gap-2 text-gray-400 dark:text-[#a19db9] animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-sm font-semibold tracking-widest uppercase">Back to About Me</span>
                        <span className="material-symbols-outlined">expand_more</span>
                    </div>
                </main>
            </div>
        </div>
    );
}
