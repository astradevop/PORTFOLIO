import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111] dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
            <div className="relative flex min-h-screen w-full flex-col group/design-root">
                {/* Header */}
                <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-[#2b2839]/20">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
                        <a onClick={() => navigate('/')} className="flex items-center gap-3 group cursor-pointer">
                            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">dataset</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">Portfolio</span>
                        </a>
                        <a
                            onClick={() => navigate('/projects')}
                            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-full cursor-pointer"
                        >
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            <span>Back to Projects</span>
                        </a>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 relative">
                        {/* Left Column: Sticky Project Info */}
                        <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1">
                            <div className="lg:sticky lg:top-32 flex flex-col gap-8 animate-fade-in-up">
                                {/* Breadcrumbs */}
                                <div className="flex flex-wrap items-center gap-2 text-sm">
                                    <a onClick={() => navigate('/')} className="text-text-secondary hover:text-primary transition-colors font-medium cursor-pointer">Home</a>
                                    <span className="text-text-secondary font-medium">/</span>
                                    <a onClick={() => navigate('/projects')} className="text-text-secondary hover:text-primary transition-colors font-medium cursor-pointer">Projects</a>
                                    <span className="text-text-secondary font-medium">/</span>
                                    <span className="text-primary font-medium">Neobank</span>
                                </div>

                                {/* Project Header */}
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
                                        Neobank Mobile App Redesign
                                    </h1>
                                    <p className="text-text-secondary text-lg leading-relaxed">
                                        A comprehensive overhaul of the mobile banking experience, focusing on reducing friction in peer-to-peer payments and visualizing spending habits.
                                    </p>
                                </div>

                                {/* Metadata Grid */}
                                <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-[#2b2839] py-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Role</span>
                                        <span className="font-semibold text-lg">Lead Product Designer</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Timeline</span>
                                        <span className="font-semibold text-lg">Feb - Apr 2023</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Client</span>
                                        <span className="font-semibold text-lg">Fintech Co.</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Platform</span>
                                        <span className="font-semibold text-lg">iOS / Android</span>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-col gap-3">
                                    <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Technology Stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Figma', 'React Native', 'Node.js', 'Framer Motion'].map((tech) => (
                                            <span key={tech} className="px-4 py-2 bg-[#2b2839]/50 text-white rounded-full text-sm font-medium border border-[#2b2839]">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-[1.02] cursor-pointer">
                                        <span>View Live Project</span>
                                        <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                                    </a>
                                    <a className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#2b2839] hover:bg-[#2b2839] text-white px-8 py-4 rounded-full font-bold transition-all cursor-pointer">
                                        <span className="material-symbols-outlined text-[20px]">code</span>
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Scrollable Visuals */}
                        <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2 flex flex-col gap-8 lg:gap-12">
                            {/* Main Hero Image */}
                            <div className="group relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-[#2b2839]">
                                <img
                                    alt="High fidelity dashboard mockup"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIECkfPzRkf4J3C2YAhi4DoE8M7iTT0OlQTOQ7iaGBKSJ_hSghYns3k1Dr36uY83qbraCMCgVhbsM5ZbU7CuQieJZY5NIwEWdihyCE46GueADYh_HS747t6q1mtkaPLnvtylIyro22DsHLmY-gQpNwtUI8zbhxa2bx-0dc42nGt7o4A8kLacBT7JgLBU5wALnpZ-_1fXEPp0Q_quJjiZT9ybpALuQonU5HvzB7SzV6DvOs7rh_pkB57TA3pflzWdUQTe4P3Pl_Sg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                        <span className="material-symbols-outlined text-[14px]">image</span> Hero Preview
                                    </span>
                                </div>
                            </div>

                            {/* Introduction Text */}
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                    Users of the legacy application reported frustration with the complexity of transferring funds to friends and family. The existing workflow required 7 clicks and multiple screen transitions. Our goal was to reduce this friction while simultaneously introducing a new feature set for personal finance management without cluttering the interface.
                                </p>
                            </div>

                            {/* Two Column Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="bg-card-dark p-6 rounded-lg border border-[#2b2839]">
                                        <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-[#121118] relative shadow-2xl">
                                            <img
                                                alt="Mobile interface"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDZsd27VqM7w_v7boDFthhGoP9NE_9qLGnFWXL7ejBuBJ0f2rW9Dj3c3rVCHsFtn93JcGgcp14gTsbnruPTRevp5aqpUvGORr7-OOAfJ89tWT-u0bT-tr7vd-vDzjynaIA0FoDYV28mVuItyXObJW_EFDGRdAp94oVcfGA43i1P4238PutgJlMAI3mFWq9UHaWi_J75pV5ODdSNo8N861T5tEhyJXCkUSSO2rUuk8rvXu7s3iMeZB7EH4UC0djcCFzAb2sgalbeg"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-text-secondary font-medium px-2">Profile & Security Settings</p>
                                </div>
                                <div className="flex flex-col gap-4 mt-0 md:mt-12">
                                    <div className="bg-card-dark p-6 rounded-lg border border-[#2b2839]">
                                        <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-[#121118] relative shadow-2xl">
                                            <img
                                                alt="Analytics dashboard"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC155XKss54YiDZ06E2xdQegBJy4mZDZJXN9fxvN152BYVjOhuz3yA1Y8LiY9i6BXrRcI9cQrMrHdku5aKiqOtHBV1T67XVOTYNM2K1reDFLBAN5ypPaUo-WZs9cdsByrJfpXEFeAAEtz52LD_WfINE9SS5U9RexHTusQniEdjKcgCDmjnuheXGGbj0mJ_eJVVJy7U7-R8bPVacHLXlk4OU84hNcr9UhXWpysa1NYe0wD-A5uUPFOx-Ag11LYeq47o4w7Ffn09iRg"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-text-secondary font-medium px-2">Analytics Dashboard</p>
                                </div>
                            </div>

                            {/* Highlight/Quote */}
                            <div className="relative py-12 px-8 rounded-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                                <span className="material-symbols-outlined text-primary/40 text-6xl absolute top-6 left-4 -z-10">format_quote</span>
                                <blockquote className="text-2xl font-semibold text-white leading-snug">
                                    "The redesign improved user retention by 40% within the first three months of launch. The simplified payment flow was the most praised feature in user feedback sessions."
                                </blockquote>
                            </div>

                            {/* Solution Text */}
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
                                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                                    We implemented a "Quick Send" feature accessible directly from the home dashboard, utilizing contact shortcuts. For the data visualization, we used soft gradients and simplified charts to make financial health understandable at a glance. Dark mode was prioritized to give the app a premium, modern feel that reduces eye strain during night-time usage.
                                </p>
                            </div>

                            {/* Full Width Image */}
                            <div className="w-full rounded-lg overflow-hidden border border-[#2b2839]">
                                <img
                                    alt="Data visualization"
                                    className="w-full h-auto object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ij20FYkBdySEDy82pHfXn4rM6mPgehwVcpo2ulK03FYFy6sivv_lZKpD6fejG3DtxOBzqA776XS2PEstzdMRpgdT0-bOHH9MBIZhw-R2mFFAckjybQOgAVa2KRHmgkGqiqh4ZPhSs6KbApmo-IHGNSVL9M1D-veixEI6m0X0xSxGu74ZsKxeGhFkX5-WXAUXuC_zX8htAXpJ_yQkn-kH4Ul1JQLzFM698kzlBWYppF1XXRPOWWuSIVjKirxqFTVX7v-2Ud58mQ"
                                />
                            </div>
                        </div>
                    </div>
                </main>

                {/* Next Project Navigation */}
                <footer className="w-full border-t border-[#2b2839] bg-[#0f0d1a] mt-auto">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex flex-col gap-2">
                                <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Next Project</span>
                                <a className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer">
                                    E-Commerce Analytics Dashboard
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="size-12 rounded-full border border-[#2b2839] hover:bg-[#2b2839] flex items-center justify-center text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined">arrow_upward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
