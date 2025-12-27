import { useNavigate } from 'react-router-dom';

export default function Tools() {
    const navigate = useNavigate();

    const languages = [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 5, proficiency: 'Expert' }
    ];

    const backend = [
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', level: 4, proficiency: 'Advanced', isWhite: true },
        { name: 'RESTful API', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'JWT Auth', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'Django ORM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', level: 5, proficiency: 'Expert' },
        { name: 'Insomnia', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/insomnia.svg', level: 4, proficiency: 'Advanced', isWhite: true }
    ];

    const frontend = [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 5, proficiency: 'Expert' },
        { name: 'JavaScript (ES6+)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 5, proficiency: 'Expert' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 5, proficiency: 'Expert' }
    ];

    const databases = [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 4, proficiency: 'Advanced' }
    ];

    const devops = [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', level: 3, proficiency: 'Intermediate' },
        { name: 'Gunicorn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'PythonAnywhere', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', level: 4, proficiency: 'Advanced', isWhite: true }
    ];

    const toolsPlatforms = [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 5, proficiency: 'Expert' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 4, proficiency: 'Advanced' },
        { name: 'ChatGPT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'GitHub Copilot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 4, proficiency: 'Advanced', isWhite: true },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 5, proficiency: 'Expert' }
    ];

    const integrations = [
        { name: 'Razorpay', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/razorpay.svg', level: 4, proficiency: 'Advanced', isWhite: true },
        { name: 'Twilio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twilio/twilio-original.svg', level: 3, proficiency: 'Intermediate' },
        { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg', level: 5, proficiency: 'Expert', isWhite: true },
        { name: 'OAuth 2.0', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg', level: 4, proficiency: 'Advanced', isWhite: true }
    ];

    const SkillCard = ({ skill }) => (
        <div className="group flex flex-col gap-4 rounded-lg border border-border-dark bg-card-dark p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,19,236,0.15)]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center size-12 rounded-lg bg-white/10 p-2.5 group-hover:bg-primary/20 transition-colors ${skill.isWhite ? 'brightness-0 invert' : ''}`}>
                        <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-white text-base font-bold font-display">{skill.name}</h3>
                </div>
            </div>
            <div className="flex gap-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${i < skill.level ? 'bg-primary' : 'bg-[#3f3b54]'}`}
                    ></div>
                ))}
            </div>
            <p className="text-xs text-[#a19db9] font-medium uppercase tracking-wider">{skill.proficiency}</p>
        </div>
    );

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white overflow-x-hidden min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2b2839] bg-background-dark/95 backdrop-blur-sm px-4 sm:px-6 md:px-10 py-3">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-8 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">deployed_code</span>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] font-display">Portfolio</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8 hidden md:flex">
                    <div className="flex items-center gap-9">
                        <a onClick={() => navigate('/')} className="text-[#a19db9] hover:text-white text-sm font-medium leading-normal transition-colors cursor-pointer">Home</a>
                        <a onClick={() => navigate('/about')} className="text-[#a19db9] hover:text-white text-sm font-medium leading-normal transition-colors cursor-pointer">About</a>
                        <a onClick={() => navigate('/projects')} className="text-[#a19db9] hover:text-white text-sm font-medium leading-normal transition-colors cursor-pointer">Work</a>
                        <a onClick={() => navigate('/contact')} className="text-[#a19db9] hover:text-white text-sm font-medium leading-normal transition-colors cursor-pointer">Contact</a>
                        <a className="text-white text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-6 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-t-full">Tools</a>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Download Resume</span>
                    </button>
                </div>
                <div className="md:hidden text-white">
                    <span className="material-symbols-outlined">menu</span>
                </div>
            </header>

            <main className="flex-grow flex flex-col pt-20 sm:pt-24 pb-32 md:pb-12 px-4 sm:px-6 md:px-10 lg:px-40 max-w-[1440px] mx-auto w-full">
                {/* Header Section */}
                <div className="flex flex-col gap-6 py-10 animate-fade-in-up">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] font-display">
                            TECHNICAL <span className="text-primary">SKILLS</span>
                        </h1>
                        <p className="text-[#a19db9] text-base sm:text-lg font-normal leading-relaxed max-w-2xl font-display">
                            My comprehensive toolkit for building secure, scalable, and modern full-stack applications.
                        </p>
                    </div>
                </div>

                {/* Programming Languages */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Programming Languages</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {languages.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Backend Development */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Backend Development</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {backend.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Frontend Development */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Frontend Development</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {frontend.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Databases */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Databases</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {databases.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* DevOps & Deployment */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">DevOps & Deployment</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {devops.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Tools & Platforms */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Tools & Platforms</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {toolsPlatforms.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Third-Party Integrations */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-8 w-1.5 bg-primary rounded-full"></div>
                        <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Third-Party Integrations</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {integrations.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                </section>

                {/* Learning Footer */}
                <div className="mt-8 rounded-lg bg-primary/5 border border-primary/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                            <span className="material-symbols-outlined animate-pulse">rocket_launch</span>
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-bold font-display">Always Learning</h3>
                            <p className="text-[#a19db9]">Currently exploring: <span className="text-white font-medium">AI Tools & Advanced Python</span></p>
                        </div>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-primary/30 text-white font-bold hover:bg-primary hover:border-primary transition-all text-sm">
                        View Learning Roadmap
                    </button>
                </div>
            </main>

            {/* Back to Hub Button - Spatially Right on Desktop, Bottom Center on Mobile */}
            <button
                onClick={() => navigate('/')}
                className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group hidden md:flex items-center gap-3 bg-[#1d1c27]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-105"
            >
                <span className="text-white font-bold tracking-wide uppercase text-sm">Back to Hub</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">keyboard_arrow_right</span>
            </button>

            {/* Mobile Back Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 bg-[#1d1c27]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-primary/20 hover:scale-105"
                >
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">keyboard_arrow_left</span>
                    <span className="text-white font-bold tracking-wide uppercase text-sm">Back to Hub</span>
                </button>
            </div>
        </div>
    );
}
