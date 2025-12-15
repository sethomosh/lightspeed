export interface ServiceData {
    slug: string
    title: string
    description: string
    icon: string
    status?: 'active' | 'coming-soon'
    subServices?: string[]
    features: Array<{
        title: string
        description?: string
        icon?: string
    }>
    process: Array<{
        step: number
        title: string
        description?: string
    }>
    technologies: string[]
    pricing?: {
        starter: { price: string; features: string[] }
        professional: { price: string; features: string[] }
        enterprise: { price: string; features: string[] }
    }
    caseStudy?: {
        title: string
        description: string
        image: string
    }
}

export const services: ServiceData[] = [
    {
        slug: "network-solutions",
        title: "Network Solutions",
        description: "Complete network infrastructure design, installation, and optimization for businesses and homes",
        icon: "Network",
        status: 'active',
        subServices: [
            "Network installations and setup",
            "WiFi design & troubleshooting",
            "Network performance and optimization",
            "Connectivity issues resolution",
            "Network design/architecture",
            "Enterprise network planning"
        ],
        features: [
            {
                title: "Professional site survey and assessment",
                description: "Comprehensive signal testing and physical site analysis.",
                icon: "Map"
            },
            {
                title: "Structured cabling installation",
                description: "CAT6/Fiber installation following international standards.",
                icon: "Hammer"
            },
            {
                title: "Enterprise-grade equipment",
                description: "Deployment of reliable hardware from Ubiquiti, Cisco, and MikroTik.",
                icon: "Server"
            },
            {
                title: "WiFi coverage optimization",
                description: "Eliminating dead zones and ensuring high-speed roaming.",
                icon: "Wifi"
            },
            {
                title: "Network security implementation",
                description: "Firewall configuration and VLAN segmentation.",
                icon: "Shield"
            },
            {
                title: "Performance monitoring",
                description: "Proactive maintenance and 24/7 uptime monitoring.",
                icon: "Activity"
            }
        ],
        process: [
            { step: 1, title: "Initial consultation and site survey", description: "We assess your requirements and physical space." },
            { step: 2, title: "Network design and planning", description: "Architecting a solution that meets your capacity needs." },
            { step: 3, title: "Equipment procurement", description: "Sourcing genuine hardware from trusted vendors." },
            { step: 4, title: "Installation and configuration", description: "Professional deployment and software setup." },
            { step: 5, title: "Testing and optimization", description: "Rigorous stress testing and fine-tuning." },
            { step: 6, title: "Training and handover", description: "Teaching your team how to manage basic functions." },
            { step: 7, title: "Ongoing support", description: "Available maintenance and troubleshooting." }
        ],
        technologies: ["Ubiquiti UniFi", "Cisco", "MikroTik", "pfSense", "TP-Link Omada"],
    },
    {
        slug: "smart-home-automation",
        title: "Smart Home & Automation",
        description: "Transform your living space with intelligent automation and seamless control",
        icon: "Home",
        status: 'active',
        subServices: [
            "Home automation systems",
            "Smart home setup (lights, climate, curtains, security, routines)",
            "Home server installation (Plex, NAS)",
            "Network optimization for smart devices and IoT"
        ],
        features: [
            { title: "Voice control integration", icon: "Mic" },
            { title: "Automated lighting scenes", icon: "Lightbulb" },
            { title: "Climate control and energy management", icon: "Thermometer" },
            { title: "Smart security integration", icon: "Lock" },
            { title: "Media server setup", icon: "Tv" },
            { title: "Home Assistant hub configuration", icon: "Cpu" },
            { title: "Remote access and control", icon: "Smartphone" }
        ],
        process: [
            { step: 1, title: "Home assessment and consultation" },
            { step: 2, title: "System design and device selection" },
            { step: 3, title: "Network infrastructure preparation" },
            { step: 4, title: "Device installation and configuration" },
            { step: 5, title: "Automation programming" },
            { step: 6, title: "User training" },
            { step: 7, title: "Ongoing optimization" }
        ],
        technologies: ["Home Assistant", "Philips Hue", "Sonos", "Ubiquiti Protect", "Synology NAS", "Plex"]
    },
    {
        slug: "security-systems",
        title: "Security Systems",
        description: "Comprehensive security solutions for homes and businesses",
        icon: "Shield",
        status: 'active',
        subServices: [
            "CCTV installation & configuration",
            "Alarm systems",
            "Access control systems",
            "Remote monitoring setup"
        ],
        features: [
            { title: "High-definition IP cameras (2K/4K)", icon: "Camera" },
            { title: "Night vision and motion detection", icon: "Eye" },
            { title: "Cloud and local storage options", icon: "Database" },
            { title: "Mobile app access", icon: "Smartphone" },
            { title: "Intrusion detection systems", icon: "Bell" },
            { title: "Biometric and card access control", icon: "Fingerprint" },
            { title: "Integration with smart home systems", icon: "Link" },
            { title: "24/7 monitoring capabilities", icon: "Watch" }
        ],
        process: [
            { step: 1, title: "Security assessment" },
            { step: 2, title: "System design and equipment selection" },
            { step: 3, title: "Installation and wiring" },
            { step: 4, title: "Configuration and testing" },
            { step: 5, title: "Mobile app setup" },
            { step: 6, title: "User training" },
            { step: 7, title: "Maintenance support" }
        ],
        technologies: ["Hikvision", "Dahua", "Ubiquiti Protect", "Ajax Security", "ZKTeco"]
    },
    {
        slug: "devops-consulting",
        title: "DevOps Consulting",
        description: "Modern DevOps practices and infrastructure automation for scaling businesses",
        icon: "Settings",
        status: 'active',
        subServices: [
            "Infrastructure as Code (IaC)",
            "CI/CD pipeline setup",
            "Cloud infrastructure optimization",
            "Container orchestration",
            "Monitoring and alerting",
            "Security best practices"
        ],
        features: [
            { title: "Automated deployment pipelines", icon: "GitBranch" },
            { title: "Infrastructure provisioning (Terraform)", icon: "Code" },
            { title: "Kubernetes cluster management", icon: "Box" },
            { title: "Docker containerization", icon: "Layers" },
            { title: "Monitoring stack setup", icon: "Activity" },
            { title: "Cloud cost optimization", icon: "DollarSign" },
            { title: "Documentation and training", icon: "Book" }
        ],
        process: [
            { step: 1, title: "Infrastructure audit" },
            { step: 2, title: "Strategy and roadmap development" },
            { step: 3, title: "Tool selection and setup" },
            { step: 4, title: "Implementation and migration" },
            { step: 5, title: "Team training" },
            { step: 6, title: "Ongoing optimization" }
        ],
        technologies: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "AWS", "Azure", "Prometheus", "Grafana"]
    },
    {
        slug: "business-solutions",
        title: "Business Solutions",
        description: "Custom software solutions and digital transformation for your business",
        icon: "Briefcase",
        status: 'active',
        subServices: [
            "Custom web applications",
            "Business automation",
            "Digital transformation consulting",
            "Startup CTO services"
        ],
        features: [
            { title: "Full-stack web application development", icon: "Globe" },
            { title: "Business process automation", icon: "Cpu" },
            { title: "API development and integration", icon: "Webhook" },
            { title: "Database design and optimization", icon: "Database" },
            { title: "Cloud deployment", icon: "Cloud" },
            { title: "Technical strategy and planning", icon: "Compass" },
            { title: "CTO-as-a-Service for startups", icon: "TrendingUp" },
            { title: "Team technical leadership", icon: "Users" }
        ],
        process: [
            { step: 1, title: "Discovery and requirements gathering" },
            { step: 2, title: "Solution architecture design" },
            { step: 3, title: "Development sprints (Agile)" },
            { step: 4, title: "Testing and QA" },
            { step: 5, title: "Deployment and training" },
            { step: 6, title: "Ongoing support and iteration" }
        ],
        technologies: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel"]
    },
    {
        slug: "computer-solutions",
        title: "Computer Solutions & Architecture",
        description: "Complete computer infrastructure from specification to deployment",
        icon: "Monitor",
        status: 'active',
        subServices: [
            "Server specification, building and upgrades",
            "NAS solutions",
            "Workstation setup & deployment",
            "Windows/Linux installation & optimization",
            "Computer building & upgrades",
            "IT support & maintenance"
        ],
        features: [
            { title: "Custom server builds (TrueNAS, Windows Server)", icon: "Server" },
            { title: "High-performance workstation specification", icon: "Monitor" },
            { title: "Storage solutions (10TB - 100TB+)", icon: "HardDrive" },
            { title: "Operating system optimization", icon: "Settings" },
            { title: "Hardware troubleshooting and repair", icon: "Wrench" },
            { title: "Data migration and backup", icon: "Save" },
            { title: "Remote support", icon: "Headphones" }
        ],
        process: [
            { step: 1, title: "Requirements assessment" },
            { step: 2, title: "Hardware specification" },
            { step: 3, title: "Procurement assistance" },
            { step: 4, title: "Assembly and installation" },
            { step: 5, title: "Operating system setup" },
            { step: 6, title: "Software configuration" },
            { step: 7, title: "Training and documentation" }
        ],
        technologies: ["TrueNAS", "Windows Server", "Ubuntu Server", "Synology", "RAID configurations", "Enterprise hardware"]
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity",
        description: "Comprehensive cybersecurity services - launching Q1 2025",
        icon: "Lock",
        status: 'coming-soon',
        subServices: [],
        features: [],
        process: [],
        technologies: []
    }
]
