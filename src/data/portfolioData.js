
import {
    Terminal,
    Mail,
    Linkedin
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
   Maps string names to React Components for social icons.
*/
export const iconMap = {
    'Github': ({ size }) => React.createElement(SimpleIcon, { slug: 'github', size }),
    'Linkedin': Linkedin, // Use Lucide icon (SimpleIcons removed LinkedIn)
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
        // links: [{ label: "", url: "#" }],
        tags: ["SQL", "PySpark", "Databricks", "AWS", "QlikSense"]
    },
    {
        id: 'To-Do',
        type: 'small',
        year: '2026',
        title: "Your Digital Napkeen",
        subtitle: "Vibe Code - Lovable",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        links: [{ label: "SingleTxt", url: "http://singletxt.lovable.app" }],
        tags: ["Lovable", "Antigravity", "React"],
        previewUrl: "http://singletxt.lovable.app"
    },
    {
        id: 'Leftover',
        type: 'small',
        year: '2025',
        title: "Leftover",
        subtitle: "Swipe. Keep. Delete",
        description: "Swipe-driven photo cleanup app for fast, intuitive gallery decluttering.",
        links: [{ label: "Demo Video", url: "https://drive.google.com/file/d/1zqARBTmfQ0m4DVdup50HXCc7UKVRXnEf/view?usp=sharing" }],
        tags: ["Xcode", "Antigravity", "React"],
        // previewUrl: "https://drive.google.com/file/d/1zqARBTmfQ0m4DVdup50HXCc7UKVRXnEf/view?usp=sharing"
    },
    // {
    //     id: 'nocode',
    //     type: 'small',
    //     year: '2022',
    //     title: "Labore Et Dolore",
    //     subtitle: "Magna Aliqua",
    //     description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    //     links: []
    // },
    {
        id: 'Capgemini',
        type: 'small',
        year: '2022',
        title: "Senior Analyst",
        subtitle: "Capgemini 2019-2022",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        links: [
            { label: "Experience Letter", url: "https://drive.google.com/file/d/1dOusQrAbmNE1CW1cd0tqiJxxGqaO7iCq/view?usp=sharing" }
        ],
        previewUrl: "https://drive.google.com/file/d/1dOusQrAbmNE1CW1cd0tqiJxxGqaO7iCq/view?usp=sharing",
        tags: ["SQL", "QlikSense", "Power BI", "Python"]
    },
    {
        id: 'digital marketing',
        type: 'small',
        year: '2020',
        title: "Digital Marketing",
        subtitle: "Intern, PixelTrack Digital",
        description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        links: [
            { label: "Certificate", url: "https://drive.google.com/file/d/1HM3mhewkepNuGzXoXbw2-HApDK2gXRMZ/view?usp=sharing" }
        ],
        previewUrl: "https://drive.google.com/file/d/1HM3mhewkepNuGzXoXbw2-HApDK2gXRMZ/view?usp=sharing",
        tags: ["Website Hosting", "Payment Integration", "Facebook Ads"]
    },
    {
        id: 'WhatsApp',
        type: 'small',
        year: '2019',
        title: "WhatsApp",
        subtitle: "No more saving temporary WhatsApp contacts",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        links: [
            { label: "WhatsApp Plugin", url: "https://whytoadd.netlify.app" }
        ],
        previewUrl: "https://whytoadd.netlify.app",
        tags: ["React", "WhatsApp API"]
    },
    {
        id: 'DRDO',
        type: 'small',
        year: '2018',
        title: "Project Intern",
        subtitle: "Center for Artificial Intelligence and Robotics, DRDO",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        tags: ["Arduino", "Manipulator Arm", "Robotics"]
        // links: [
        //     { label: "WhatsApp Plugin", url: "https://whytoadd.netlify.app" }
        // ],
        // previewUrl: "https://whytoadd.netlify.app"
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
            { label: "GitHub", url: "http://github.com/whysokara", icon: iconMap.Github },
            { label: "Email", url: "mailto:kara_himanshu@yahoo.com", icon: iconMap.Mail },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/karahimanshu/", icon: iconMap.Linkedin },
            { label: "X", url: "http://x.com/whysokara", icon: iconMap.Twitter },
            { label: "Instagram", url: "http://instagram.com/whysokara/", icon: iconMap.Instagram }
        ]
    }
];
