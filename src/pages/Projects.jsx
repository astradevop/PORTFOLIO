import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();

    const projects = [
        {
            id: 1,
            title: 'Digital Banking Platform',
            description: 'Multi-step onboarding with account creation, unique ID generation, Auth0 OAuth integration, and multi-currency ledger with real-time transactions - Internship Project.',
            tags: ['Python', 'Django', 'PostgreSQL', 'Auth0'],
            icon: 'account_balance',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_EbKGWayksCCSal9Nfa2tyh2anQ1xl0wXAuF_TRd50i3-khSDCJtI-BixWrOPG5Jbs3i_5PuT5Ut5HdlFwErbKHeopJ-f6z9FWLsdgJrURzx2Qri4jlIB4IOVl6TlDxsX7vLl4XNu4QnOK5v_1HzbkOmJMbw2_Vk1G7L44PanbML-qZLjFBWqofKH4zj7rUEUZ1DBxOM8SFCw1feYeHx3r2wZBROqrJa4yyDsJ0Djw9Bb46K0blDk0IHbUFRqoGtF9DQ3WwDGpA'
        },
        {
            id: 2,
            title: 'Expense Tracker',
            description: 'Full-stack expense management system with CRUD operations, search, category filtering, image uploads, and REST API - Personal Project.',
            tags: ['Django REST', 'React', 'PostgreSQL'],
            icon: 'receipt_long',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjHtCpwLmbKOpSv8dGWhHhQfIJ9WiapB2kll4tesBBXlAuWPIYmONNFCBxLU3565T6GfeIN36XlTjtHOeO3bHQCn8CtSBvirCopwxWm4WygIwbYwKMh9sRla26GJ3mH-_sPrTR5dfWpopNATqG56m_MX0Fi7xGJgNFQ7I0kLGfzJ55ZtpvfBc2FPrCl2L8huD4Jzi1CrcNaW324TJM9JbxHgpSWiFuIOLzfl9Ofo7S1xfITAqE0mjm0UcxG6yBmjMKbt8OhJRTOg'
        },
        {
            id: 3,
            title: 'AI Image Generator',
            description: 'Leveraging Stable Diffusion models to create custom asset generation pipelines for creative teams.',
            tags: ['Python', 'FastAPI', 'ML'],
            icon: 'auto_awesome',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1zOErZdfRipJTqoip9YKzyB-gPgqpadPJ8ywIFf_t1sT9G-6C6x61_yrVdKpMppWjib7PA9fgfsZizNr1xsEABPng-lczJNGuE7e7LU_B0CSZH-8LeAbJs9-Zfbw7gDmopY3gXBlIl5_aCNIHybiXbGPiRjIGj5SM6-z24-pLeAscgnELNwvt0tiCtN_ZX3hhoCK5SXYPfPmThauxOW9Z90TB-QcOtdg6l3OlvpFQRZzpI7UP_GIryYB9EpM--h7K-qeR0eXfUQ'
        },
        {
            id: 4,
            title: 'Brand Identity System',
            description: 'Corporate rebranding for a logistics giant, focusing on trust, speed, and modern typography.',
            tags: ['Illustrator', 'Design System'],
            icon: 'category',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlrZZqbSrxpfGLjGBNXF2q_eQ6FD-kbtL1Bjd4GXQpSV-A4ClKCiAtuzrhlOd2KSRBmfb5Rji1h-Dl2MIE-qbRcqs7kTeZld6C-H4Zdr0AJIQ-RqrSNI5USWj6rl0SX5VZx05qNO6RhRQJwxf6ThfLKzOV21N6Ul29RVodBdN7ea04_4kIf2UIiR_Ko8n0e8LPb6ERylcDw2rpectIbvkYb39QoiXE_nnYf71mgU7trUeUxVMOpsG_8gsyeC-P1u8FR52nq7QbhQ'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display overflow-hidden selection:bg-primary selection:text-white">
            {/* Main Container */}
            <div className="relative flex h-screen w-full flex-col lg:flex-row overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                {/* Left Sidebar: Header & Navigation */}
                <div className="flex-shrink-0 w-full lg:w-[400px] xl:w-[480px] p-4 sm:p-6 lg:p-12 flex flex-col justify-between z-20 relative bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none border-b border-gray-200/10 lg:border-b-0 lg:border-r">
                    {/* Header Content */}
                    <div className="flex flex-col gap-6 pt-4">
                        <div className="space-y-4">
                            <p className="text-primary font-bold tracking-widest text-sm uppercase">Selected Works</p>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                                FEATURED<br />PROJECTS
                            </h1>
                            <p className="text-gray-500 dark:text-[#a19db9] text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-sm">
                                A curated collection of my recent work across web development, mobile experiences, and digital branding.
                            </p>
                        </div>
                    </div>

                    {/* Back Navigation */}
                    <div className="hidden lg:flex">
                        <button
                            onClick={() => navigate('/')}
                            className="group flex items-center justify-start gap-4 rounded-full h-14 pr-8 pl-2 bg-white dark:bg-[#1d1c27] border border-gray-200 dark:border-white/10 shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                            </div>
                            <span className="text-gray-900 dark:text-white text-base font-bold tracking-wide">Back to Hub</span>
                        </button>
                    </div>
                </div>

                {/* Right Content: Horizontal Scrolling Carousel */}
                <div className="flex-1 h-full overflow-hidden relative group/carousel">
                    <div className="h-full w-full overflow-x-auto overflow-y-hidden no-scrollbar flex items-center px-4 sm:px-6 lg:px-12 snap-x snap-mandatory scroll-smooth">
                        <div className="flex gap-6 lg:gap-10 py-10 items-center">
                            {projects.map((project) => (
                                <article
                                    key={project.id}
                                    onClick={() => navigate(`/projects/${project.id}`)}
                                    className="snap-center shrink-0 w-[280px] sm:w-[340px] md:w-[420px] flex flex-col gap-0 rounded-lg bg-white dark:bg-[#1d1c27] shadow-xl dark:shadow-black/40 border border-gray-200 dark:border-white/5 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer"
                                >
                                    {/* Image Area */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1c27] to-transparent opacity-60 dark:opacity-80"></div>
                                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <span className="material-symbols-outlined text-white">{project.icon}</span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex flex-col flex-1 p-6 lg:p-8 pt-6 gap-6">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-gray-500 dark:text-[#a19db9] text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:bg-white/5 dark:text-white/80 border border-transparent dark:border-white/10">{tag}</span>
                                            ))}
                                        </div>
                                        <button className="mt-auto w-full cursor-pointer flex items-center justify-between rounded-full h-12 px-6 bg-gray-100 dark:bg-[#2b2839] hover:bg-primary hover:text-white text-gray-900 dark:text-white text-sm font-bold transition-all duration-300 group-hover:pl-8">
                                            <span>View Case Study</span>
                                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                            {/* Spacer for scroll end */}
                            <div className="shrink-0 w-8 lg:w-16"></div>
                        </div>
                    </div>

                    {/* Scroll Indicator Overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none z-10 flex items-center justify-end pr-6">
                        <div className="animate-bounce p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hidden lg:block">
                            <span className="material-symbols-outlined text-gray-400 dark:text-white/60">arrow_forward</span>
                        </div>
                    </div>

                    {/* Mobile FAB */}
                    <div className="fixed bottom-6 left-6 lg:hidden z-50">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg border border-white/20"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
