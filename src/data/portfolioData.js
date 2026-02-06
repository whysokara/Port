
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
        id: 'ai',
        type: 'medium',
        year: '2024',
        title: "Lorem Ipsum",
        subtitle: "Dolor Sit Amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
        icon: Cpu,
        links: [{ label: "View Demos", url: "#" }]
    },
    {
        id: 'web3',
        type: 'small',
        year: '2023',
        title: "Consectetur Adipiscing",
        subtitle: "Elit, Sed Do",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        icon: Database,
        links: [{ label: "Contracts", url: "#" }]
    },
    {
        id: 'mobile',
        type: 'small',
        year: '2022',
        title: "Eiusmod Tempor",
        subtitle: "Incididunt Ut",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
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
