export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Agung Bahtiar',
    subtitle: 'Software Engineer - Linux Enthusiast - Network Enginner',
    description: '',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/agung-bahtiar-057265213'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/agungbahctiar'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/agungberkah12'
        }, {
            text: 'Github',
            href: 'https://github.com/AgungBahtiarr'
        }
    ],
    hero: {
        title: "Hello! Welcome to My Unique Corner of the Web, Let's embark on an exciting digital adventure together!.",
        text: "I'm Agung Bahtiar, a 5th-semester student majoring in Business Informatics at the State Polytechnic of Banyuwangi. I've been passionate about technology since childhood, with a particular focus on web technologies, networking, and Linux. My approach involves continuous learning, practical application of knowledge, and leveraging technology to solve real-world problems. I have a profound appreciation for web development, network systems, and the versatility of Linux. When I'm not immersed in code or studying, you can find me cycling or working on personal coding projects - two activities that help me maintain a calm and focused mind. Feel free to explore some of my academic projects or connect with me to discuss the latest in tech!",
        image: {
            src: '/hero.jpg',
            alt: 'Agung Bahtiar'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
