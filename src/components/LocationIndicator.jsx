import { useLocation } from 'react-router-dom';

const COORDS = {
    "/": [0, 0],
    "/about": [0, 1],
    "/contact": [0, 2],
    "/experience": [0, -1],
    "/education": [0, -2],
    "/tools": [-1, 0],
    "/projects": [1, 0]
};

const HUBS = {
    "/": "CENTRAL",
    "/about": "ABOUT",
    "/contact": "CONTACT",
    "/experience": "EXPERIENCE",
    "/education": "EDUCATION",
    "/tools": "TOOLS",
    "/projects": "PROJECTS"
};

export default function LocationIndicator() {
    const { pathname } = useLocation();

    const getCoords = (path) => {
        if (COORDS[path]) return COORDS[path];
        if (path.startsWith("/projects/")) return [2, 0];
        return [0, 0];
    };

    const getHub = (path) => {
        if (HUBS[path]) return HUBS[path];
        if (path.startsWith("/projects/")) return "PROJECT DETAIL";
        return "UNKNOWN";
    };

    const coords = getCoords(pathname);
    const hub = getHub(pathname);

    return (
        <div className="absolute bottom-8 left-8 z-50 hidden md:flex items-center gap-4 text-[#a19db9] text-xs font-mono tracking-widest uppercase animate-fade-in pointer-events-none">
            <div className="flex items-center justify-center size-10 rounded-full border border-white/10 bg-[#131022]/80 backdrop-blur-sm shadow-lg">
                <span className="material-symbols-outlined text-lg text-primary/80">my_location</span>
            </div>
            <div>
                <p>LOC: [{coords[0]}, {coords[1]}]</p>
                <p>HUB: {hub}</p>
            </div>
        </div>
    );
}
