
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
import React from 'react';

/* 
   SIMPLE ICON WRAPPER 
   Uses simpleicons.org for brand logos (X, Instagram, etc) 
   Colors: White (ffffff)
*/
const SimpleIcon = ({ slug, size = 24 }) =>
    React.createElement('img', {
        src: `https://cdn.simpleicons.org/${slug}/ffffff`,
        alt: slug,
        width: size,
        height: size,
        style: { opacity: 0.8, transition: 'opacity 0.2s' }
    });

/* 
   ICON MAPPING
   Maps string names (from Google Sheet) to React Components.
*/
export const iconMap = {
    'Code2': Code2,
    'Palette': Palette,
    'Terminal': Terminal,
    'Database': Database,
    'Cpu': Cpu,
    'Layout': Layout,
    'Smartphone': Smartphone,
    'TrendingUp': TrendingUp,
    'Github': ({ size }) => React.createElement(SimpleIcon, { slug: 'github', size }),
    'Linkedin': ({ size }) => React.createElement(SimpleIcon, { slug: 'linkedin', size }),
    'Twitter': ({ size }) => React.createElement(SimpleIcon, { slug: 'x', size }), // X Logo
    'Instagram': ({ size }) => React.createElement(SimpleIcon, { slug: 'instagram', size }),
    'Mail': Mail // Keep Lucide for generic mail
};

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
        links: ["X-code", "Claude"]
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
        id: 'WhatsApp',
        type: 'small',
        year: '2019',
        title: "WhatsApp API",
        subtitle: "No more saving temporary WhatsApp contacts",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        icon: Palette,
        links: [
            { label: "WhatsApp Plugin", url: "https://whytoadd.netlify.app" }
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
            { label: "LinkedIn", url: "https://www.linkedin.com/in/karahimanshu/", icon: iconMap.Linkedin },
            { label: "GitHub", url: "http://github.com/whysokara", icon: iconMap.Github },
            { label: "X", url: "http://x.com/whysokara", icon: iconMap.Twitter },
            { label: "Instagram", url: "http://instagram.com/whysokara/", icon: iconMap.Instagram },
            { label: "Email", url: "mailto:kara_himanshu@yahoo.com", icon: iconMap.Mail }
        ]
    }
];
