
import {
    Code2,
    Palette,
    Terminal,
    Database,
    Cpu,
    Layout,
    Smartphone,
    TrendingUp,
    Github,
    Linkedin,
    Mail
} from 'lucide-react';

/* 
   ORDER: Top is most recent history (minus the current/future state which is in Header)
   OR: Bottom to top? Usually timelines read top-down. 
   Let's keep the chronological flow we established: Present -> Past (Reverse Chronological) 
   OR Past -> Present. 
   
   The roadmap view implemented was:
   1. Present
   2. 2024
   3. 2023...
   
   Let's stick to that.
*/

export const portfolioData = [
    /* 
       Removed 'Hero' / 'The Next Chapter' card. 
       The Header covers "Who I am now". 
       The Timeline covers "How I got here".
    */
    {
        id: 'ai',
        type: 'medium',
        year: '2024',
        title: "AI & Intelligent Agents",
        subtitle: "LangChain, Ollama, RAG",
        description: "Building autonomous agents. Understanding the LLM stack to design the next generation of AI-first products.",
        icon: Cpu,
        links: [{ label: "View Demos", url: "#" }]
    },
    {
        id: 'web3',
        type: 'small',
        year: '2023',
        title: "Web3 Engineering",
        subtitle: "Solidity, Smart Contracts",
        description: "Deep dive into decentralized systems. Built and deployed custom smart contracts on Ethereum testnets.",
        icon: Database,
        links: [{ label: "Contracts", url: "#" }]
    },
    {
        id: 'mobile',
        type: 'small',
        year: '2022',
        title: "Mobile Development",
        subtitle: "iOS, Swift",
        description: "Learned the constraints and capabilities of native mobile environments. Shipped experimental apps.",
        icon: Smartphone,
        links: []
    },
    {
        id: 'nocode',
        type: 'small',
        year: '2022',
        title: "Rapid Prototyping",
        subtitle: "Glide, Lovable",
        description: "Mastered low-code tools to validate product hypotheses in days, not weeks.",
        icon: Layout,
        links: []
    },
    {
        id: 'dev',
        type: 'large',
        year: '2021',
        title: "Full Stack Engineering",
        subtitle: "Python, JavaScript, React",
        description: "The core technical pivot. From scripts to scalable web applications. Built pipelines and frontends.",
        icon: Code2,
        links: [
            { label: "GitHub", url: "https://github.com" }
        ]
    },
    {
        id: 'marketing',
        type: 'small',
        year: '2020',
        title: "Digital Strategy",
        subtitle: "Growth & Analytics",
        description: "Understanding user acquisition and retention funnels. The business side of product.",
        icon: TrendingUp,
        links: []
    },
    {
        id: 'design',
        type: 'medium',
        year: '2019',
        title: "Visual Design Origins",
        subtitle: "Adobe XD, Figma",
        description: "Where it started. Learning to empathize with users through UI/UX design and illustrations.",
        icon: Palette,
        links: [
            { label: "Behance", url: "#" }
        ]
    },
    {
        id: 'socials',
        type: 'social-strip',
        year: '2024',
        title: "Network",
        subtitle: "Connect",
        description: "System Online.",
        icon: Terminal,
        links: [
            { label: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
            { label: "GitHub", url: "https://github.com", icon: Github },
            { label: "Email", url: "mailto:hello@example.com", icon: Mail }
        ]
    }
];
