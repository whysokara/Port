
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
   LOREM IPSUM VERSION
*/

export const portfolioData = [
    {
        id: 'KPMG',
        type: 'small',
        year: '2026',
        title: "Data Engineer",
        subtitle: "Assistant Manager, KPMG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
        icon: Cpu,
        links: [{ label: "", url: "#" }]
    },
    {
        id: 'To-Do',
        type: 'small',
        year: '2026',
        title: "Your Digital Napkeen",
        subtitle: "Vibe Code - Lovable",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        icon: Database,
        links: [{ label: "SingleTxt", url: "http://singletxt.lovable.app" }]
    },
    {
        id: 'Leftover',
        type: 'small',
        year: '2025',
        title: "Leftover",
        subtitle: "Swipe. Keep. Delete",
        description: "Swipe-driven photo cleanup app for fast, intuitive gallery decluttering.",
        icon: Smartphone,
        links: []
    },
    {
        id: 'nocode',
        type: 'small',
        year: '2022',
        title: "Labore Et Dolore",
        subtitle: "Magna Aliqua",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        icon: Layout,
        links: []
    },
    {
        id: 'dev',
        type: 'large',
        year: '2021',
        title: "Ullamco Laboris",
        subtitle: "Nisi Ut Aliquip",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        icon: Code2,
        links: [
            { label: "GitHub", url: "https://github.com" }
        ]
    },
    {
        id: 'marketing',
        type: 'small',
        year: '2020',
        title: "Totam Rem Aperiam",
        subtitle: "Eaque Ipsa",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        icon: TrendingUp,
        links: []
    },
    {
        id: 'design',
        type: 'medium',
        year: '2019',
        title: "Quis Autem Vel",
        subtitle: "Eum Iure",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
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
