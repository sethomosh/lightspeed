export interface ServiceData {
    slug: string
    title: string
    description: string
    icon: string
    status?: 'active' | 'coming-soon'
    subServices?: string[]
    parentService?: string
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
    heroImage: string
    imagePosition?: string // e.g., "center", "top", "bottom", "left", "right", "center 75%"
    caseStudy?: {
        title: string
        description: string
        image: string
    }
    bodyContent?: string
    faqs?: Array<{ question: string; answer: string }>
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
            { title: "Professional site survey and assessment", description: "Comprehensive signal testing and physical site analysis.", icon: "Map" },
            { title: "Structured cabling installation", description: "CAT6/Fiber installation following international standards.", icon: "Hammer" },
            { title: "Enterprise-grade equipment", description: "Deployment of reliable hardware from Ubiquiti, Cisco, and MikroTik.", icon: "Server" },
            { title: "WiFi coverage optimization", description: "Eliminating dead zones and ensuring high-speed roaming.", icon: "Wifi" },
            { title: "Network security implementation", description: "Firewall configuration and VLAN segmentation.", icon: "Shield" },
            { title: "Performance monitoring", description: "Proactive maintenance and 24/7 uptime monitoring.", icon: "Activity" }
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
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
        bodyContent: "A reliable network is the backbone of every modern business. At Stratum Systems, we design and deploy business and home networks in Nairobi built to handle real-world demands — high device density, video conferencing, cloud storage, and 24/7 uptime. We are experienced with Ubiquiti UniFi, Cisco, and MikroTik systems, giving us the flexibility to recommend the right hardware for your budget and performance needs. Our projects begin with a full site survey and RF analysis to identify coverage gaps, interference sources, and cabling routes. We then produce a detailed network design before any hardware is ordered. Installation follows structured cabling standards (CAT6/Fibre), and every deployment includes VLAN segmentation, firewall configuration, and QoS tuning. We serve offices in Westlands, Karen, Kilimani, Upperhill, and across the Nairobi CBD. Whether you are setting up a new office, expanding an existing network, or troubleshooting persistent WiFi problems, Stratum delivers a solution that works — and keeps working.",
        faqs: [
            { question: "How much does a business network installation cost in Nairobi?", answer: "Costs vary depending on site size, number of access points, and cabling requirements. A small office setup starts from KES 45,000. We provide a detailed quote after a free site survey." },
            { question: "What WiFi equipment do you use?", answer: "We primarily deploy Ubiquiti UniFi, MikroTik, and TP-Link Omada systems depending on budget and performance requirements. All hardware is sourced from authorised distributors." },
            { question: "Can you fix an existing network that has problems?", answer: "Yes. We offer network audits, troubleshooting, and optimisation for existing installations. Common issues we resolve include dead zones, slow speeds, and IP conflicts." },
            { question: "Do you install fibre cabling?", answer: "Yes. We install both CAT6 copper and fibre optic cabling for high-bandwidth applications." }
        ]
    },
    // NETWORK SOLUTIONS SUB-PAGES
    {
        slug: "business-network-setup-nairobi",
        title: "Business Network Setup",
        description: "Professional business network design and installation for offices. Structured cabling, VLAN setup, firewall configuration, and ongoing support.",
        icon: "Network",
        status: 'active',
        parentService: "network-solutions",
        features: [
            { title: "Professional site survey and assessment", icon: "Map" },
            { title: "Structured cabling installation", icon: "Hammer" },
            { title: "Network security implementation", icon: "Shield" },
            { title: "Performance monitoring", icon: "Activity" }
        ],
        process: [
            { step: 1, title: "Initial consultation and site survey" },
            { step: 2, title: "Network design and planning" },
            { step: 3, title: "Installation and configuration" },
            { step: 4, title: "Testing, optimization and support" }
        ],
        technologies: ["Ubiquiti UniFi", "Cisco", "MikroTik", "pfSense", "TP-Link Omada"],
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "home-network-installation-nairobi",
        title: "Home Network Installation",
        description: "Reliable home network setup including WiFi coverage optimisation, mesh systems, and parental controls for homes.",
        icon: "Home",
        status: 'active',
        parentService: "network-solutions",
        features: [
            { title: "WiFi coverage optimization", icon: "Wifi" },
            { title: "Structured cabling installation", icon: "Hammer" },
            { title: "Enterprise-grade equipment", icon: "Server" },
            { title: "Performance monitoring", icon: "Activity" }
        ],
        process: [
            { step: 1, title: "Home network assessment" },
            { step: 2, title: "Design and equipment selection" },
            { step: 3, title: "Installation and integration" },
            { step: 4, title: "Testing and support" }
        ],
        technologies: ["Ubiquiti UniFi", "Synology", "TP-Link Omada"],
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "ubiquiti-unifi-installation-nairobi",
        title: "Ubiquiti UniFi Installation",
        description: "Certified Ubiquiti UniFi access point and switch deployment for homes and businesses.",
        icon: "Wifi",
        status: 'active',
        parentService: "network-solutions",
        features: [
            { title: "Professional site survey and assessment", icon: "Map" },
            { title: "Enterprise-grade equipment", icon: "Server" },
            { title: "WiFi coverage optimization", icon: "Wifi" },
            { title: "Performance monitoring", icon: "Activity" }
        ],
        process: [
            { step: 1, title: "Site survey for UniFi access points" },
            { step: 2, title: "Hardware procurement" },
            { step: 3, title: "UniFi OS configuration" },
            { step: 4, title: "Testing and optimization" }
        ],
        technologies: ["Ubiquiti UniFi"],
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "wifi-troubleshooting-nairobi",
        title: "WiFi Troubleshooting & Optimisation",
        description: "Expert diagnosis and resolution of WiFi dead zones, slow speeds, and connectivity issues across.",
        icon: "Activity",
        status: 'active',
        parentService: "network-solutions",
        features: [
            { title: "Comprehensive signal testing", icon: "Map" },
            { title: "WiFi coverage optimization", icon: "Wifi" },
            { title: "Network security implementation", icon: "Shield" },
            { title: "Performance monitoring", icon: "Activity" }
        ],
        process: [
            { step: 1, title: "Symptom diagnosis" },
            { step: 2, title: "RF mapping and analysis" },
            { step: 3, title: "Configuration tuning" },
            { step: 4, title: "Ongoing support" }
        ],
        technologies: ["Ubiquiti UniFi", "Cisco", "MikroTik", "TP-Link Omada"],
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "structured-cabling-nairobi",
        title: "Structured Cabling Installation",
        description: "CAT6 and fibre optic cabling installation for offices and data centres.",
        icon: "Hammer",
        status: 'active',
        parentService: "network-solutions",
        features: [
            { title: "Structured cabling installation", icon: "Hammer" },
            { title: "Professional site survey and assessment", icon: "Map" },
            { title: "Network design/architecture", icon: "Server" },
            { title: "Performance monitoring", icon: "Activity" }
        ],
        process: [
            { step: 1, title: "Site survey" },
            { step: 2, title: "Cabling architectural design" },
            { step: 3, title: "Cable pulling and termination" },
            { step: 4, title: "Fluke testing and certification" }
        ],
        technologies: ["CAT6", "Fiber Optics"],
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
    },
    
    // SMART HOME
    {
        slug: "smart-home-automation",
        title: "Smart Home Automation",
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
        technologies: ["Home Assistant", "Philips Hue", "Sonos", "Ubiquiti Protect", "Synology NAS", "Plex"],
        heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920",
        imagePosition: "center",
        bodyContent: "Smart home technology in Nairobi has moved well beyond novelty. Stratum builds intelligent home systems that are practical, reliable, and genuinely useful. We specialise in Home Assistant — an open-source platform that puts you in full control of your home without monthly subscription fees or dependence on overseas cloud servers. Our installations cover automated lighting scenes, motorised blinds, smart climate control, voice assistant integration (Google Home, Amazon Alexa), and full security convergence — connecting your CCTV, alarm, and access control into one unified dashboard. We design systems for new builds and retrofits alike. Most smart home upgrades can be done without replacing existing wiring. We serve homes in Karen, Lavington, Runda, Gigiri, Muthaiga, and across Nairobi's residential suburbs. Every installation includes a full handover session so you know exactly how to control and expand your system.",
        faqs: [
            { question: "Do smart home systems work with existing appliances?", answer: "Yes. Most systems integrate with existing lights, TVs, and appliances using smart plugs, switches, and IR blasters." },
            { question: "Do I need a subscription to use Home Assistant?", answer: "No. Home Assistant is a local, self-hosted platform with no monthly fees. Optional cloud access is available at low cost." },
            { question: "How long does a smart home installation take?", answer: "A standard installation covering lighting, climate, and security takes 2–3 days. Larger homes or full retrofits may take up to a week." },
            { question: "Can you add more devices to the system later?", answer: "Yes. Home Assistant is highly extensible. We design every system with future expansion in mind." }
        ]
    },
    // SMART HOME SUB-PAGES
    {
        slug: "home-assistant-setup-nairobi",
        title: "Home Assistant Setup",
        description: "Local, subscription-free smart home automation using Home Assistant. Expert installation and configuration.",
        icon: "Cpu",
        status: 'active',
        parentService: "smart-home-automation",
        features: [
            { title: "Home Assistant hub configuration", icon: "Cpu" },
            { title: "Remote access and control", icon: "Smartphone" },
            { title: "Smart security integration", icon: "Lock" },
            { title: "Automated routines", icon: "Lightbulb" }
        ],
        process: [
            { step: 1, title: "System design and device checking" },
            { step: 2, title: "Home Assistant OS installation" },
            { step: 3, title: "Integration and automation programming" },
            { step: 4, title: "User training" }
        ],
        technologies: ["Home Assistant"],
        heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "smart-lighting-installation-nairobi",
        title: "Smart Lighting Installation",
        description: "Automated lighting scenes and smart switch installation for homes and offices.",
        icon: "Lightbulb",
        status: 'active',
        parentService: "smart-home-automation",
        features: [
            { title: "Automated lighting scenes", icon: "Lightbulb" },
            { title: "Voice control integration", icon: "Mic" },
            { title: "Remote access and control", icon: "Smartphone" },
            { title: "Energy management", icon: "Thermometer" }
        ],
        process: [
            { step: 1, title: "Lighting assessment" },
            { step: 2, title: "Smart switch selection" },
            { step: 3, title: "Installation and configuration" },
            { step: 4, title: "Automation programming" }
        ],
        technologies: ["Philips Hue", "Home Assistant", "Shelly", "Sonoff"],
        heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "voice-control-integration-nairobi",
        title: "Voice Control Integration",
        description: "Google Home and Amazon Alexa integration with your smart home devices.",
        icon: "Mic",
        status: 'active',
        parentService: "smart-home-automation",
        features: [
            { title: "Voice control integration", icon: "Mic" },
            { title: "Automated scenes", icon: "Lightbulb" },
            { title: "Home Assistant configuration", icon: "Cpu" },
            { title: "Remote access", icon: "Smartphone" }
        ],
        process: [
            { step: 1, title: "Ecosystem selection" },
            { step: 2, title: "Smart speaker placement" },
            { step: 3, title: "Integration with smart devices" },
            { step: 4, title: "Routine programming" }
        ],
        technologies: ["Google Home", "Amazon Alexa", "Home Assistant"],
        heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "home-security-automation-nairobi",
        title: "Home Security Automation",
        description: "Unified smart security systems integrating CCTV, alarms, and access control for homes.",
        icon: "Lock",
        status: 'active',
        parentService: "smart-home-automation",
        features: [
            { title: "Smart security integration", icon: "Lock" },
            { title: "Camera and alarm sync", icon: "Camera" },
            { title: "Remote monitoring", icon: "Smartphone" },
            { title: "Voice notifications", icon: "Mic" }
        ],
        process: [
            { step: 1, title: "Security audit" },
            { step: 2, title: "System design" },
            { step: 3, title: "Device installation and integration" },
            { step: 4, title: "Testing and fine-tuning" }
        ],
        technologies: ["Ubiquiti Protect", "Home Assistant", "Hikvision"],
        heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1920",
    },

    // SECURITY SYSTEMS
    {
        slug: "security-systems",
        title: "Security System Installation",
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
        technologies: ["Hikvision", "Dahua", "Ubiquiti Protect", "Ajax Security", "ZKTeco"],
        heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
        bodyContent: "Security is not optional for homes and businesses. Stratum designs and installs comprehensive surveillance and access control systems that give you full visibility and control over your property. We deploy IP CCTV systems with local NAS recording — footage stored on-site on a dedicated hard drive array, not dependent on internet connectivity or cloud subscriptions. For clients who want remote access, we configure secure cloud viewing accessible from any smartphone. Our installations include perimeter cameras, PTZ cameras for wide-area coverage, indoor cameras, and integration with alarm systems and electric fencing controllers. We also install access control systems including keypad, card, and biometric entry for offices and gated properties. We serve residential and commercial clients across Nairobi including Karen, Runda, Westlands, Industrial Area, and the CBD.",
        faqs: [
            { question: "How many cameras do I need for my home?", answer: "A standard 3-bedroom home typically requires 4–6 cameras covering entry points, perimeter, and parking. We assess your property and recommend the optimal layout." },
            { question: "Is footage stored locally or in the cloud?", answer: "We install NAS-based local recording by default. Cloud backup can be added as an option." },
            { question: "Can I view my cameras remotely?", answer: "Yes. All our systems are configured for secure remote viewing via a smartphone app." },
            { question: "Do you integrate CCTV with alarm systems?", answer: "Yes. We can integrate your CCTV, alarm, and access control into a single unified dashboard." }
        ]
    },
    // SECURITY SUB-PAGES
    {
        slug: "cctv-installation-nairobi",
        title: "CCTV Installation",
        description: "IP CCTV camera installation with local NAS recording and remote viewing for homes and businesses.",
        icon: "Camera",
        status: 'active',
        parentService: "security-systems",
        features: [
            { title: "High-definition IP cameras (2K/4K)", icon: "Camera" },
            { title: "Night vision and motion detection", icon: "Eye" },
            { title: "Local storage options", icon: "Database" },
            { title: "Mobile app access", icon: "Smartphone" }
        ],
        process: [
            { step: 1, title: "Property assessment" },
            { step: 2, title: "Camera placement and wiring" },
            { step: 3, title: "NVR setup and configuration" },
            { step: 4, title: "Remote viewing setup" }
        ],
        technologies: ["Hikvision", "Dahua", "Ubiquiti Protect"],
        heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "nas-storage-deployment-nairobi",
        title: "NAS Storage Deployment",
        description: "Network-attached storage setup for secure local video recording and file storage.",
        icon: "Database",
        status: 'active',
        parentService: "security-systems",
        features: [
            { title: "Local storage options", icon: "Database" },
            { title: "Raid configurations", icon: "HardDrive" },
            { title: "Data redundancy", icon: "Save" },
            { title: "Remote file access", icon: "Globe" }
        ],
        process: [
            { step: 1, title: "Storage needs analysis" },
            { step: 2, title: "Hardware procurement" },
            { step: 3, title: "RAID setup and formatting" },
            { step: 4, title: "Network integration" }
        ],
        technologies: ["Synology", "TrueNAS", "QNAP"],
        heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "access-control-installation-nairobi",
        title: "Access Control Installation",
        description: "Keypad, card, and biometric access control systems for offices and residential properties.",
        icon: "Fingerprint",
        status: 'active',
        parentService: "security-systems",
        features: [
            { title: "Biometric and card access control", icon: "Fingerprint" },
            { title: "Integration with smart home systems", icon: "Link" },
            { title: "Time and attendance logging", icon: "Activity" },
            { title: "Remote unlocks", icon: "Smartphone" }
        ],
        process: [
            { step: 1, title: "Entry point assessment" },
            { step: 2, title: "Hardware deployment" },
            { step: 3, title: "Database configuration" },
            { step: 4, title: "User management training" }
        ],
        technologies: ["ZKTeco", "Hikvision"],
        heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "cloud-surveillance-nairobi",
        title: "Cloud Surveillance Setup",
        description: "Remote cloud-connected CCTV surveillance setup for homes and businesses.",
        icon: "Cloud",
        status: 'active',
        parentService: "security-systems",
        features: [
            { title: "Cloud storage options", icon: "Cloud" },
            { title: "High-definition streaming", icon: "Tv" },
            { title: "Mobile app access", icon: "Smartphone" },
            { title: "24/7 monitoring capabilities", icon: "Watch" }
        ],
        process: [
            { step: 1, title: "Network capability review" },
            { step: 2, title: "Cloud platform selection" },
            { step: 3, title: "Camera linking and config" },
            { step: 4, title: "Testing and handoff" }
        ],
        technologies: ["Ubiquiti Protect", "Eagle Eye", "Meraki"],
        heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1920",
    },

    // DEVOPS
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
        technologies: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "AWS", "Azure", "Prometheus", "Grafana"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
        bodyContent: "Scaling a technology business in Nairobi requires modern infrastructure practices. Stratum brings enterprise DevOps expertise to local startups and growing businesses — helping you move faster, deploy more reliably, and reduce operational risk. We implement Infrastructure as Code using Terraform, containerise applications with Docker and Kubernetes, and build CI/CD pipelines on GitHub Actions, GitLab CI, or your platform of choice. Our engagements start with an infrastructure audit to identify bottlenecks, manual processes, and security gaps. We then design and implement a roadmap that fits your team's capacity and budget. We also assist with cloud migrations to AWS, GCP, or Azure, and can deploy self-hosted alternatives on bare metal for cost-conscious teams. Whether you have one developer or a team of twenty, we build the infrastructure layer that lets your engineers focus on product — not servers.",
        faqs: [
            { question: "Do you work with small startups or only large companies?", answer: "We work with startups from early stage upwards. Many of our engagements are with 2–10 person engineering teams." },
            { question: "Can you help us move from manual deployments to CI/CD?", answer: "Yes. This is one of our most common engagements. We assess your current workflow and implement an automated pipeline incrementally." },
            { question: "Do you offer ongoing DevOps support?", answer: "Yes. We offer retainer-based support for infrastructure management, monitoring, and incident response." },
            { question: "What cloud platforms do you work with?", answer: "We work with AWS, Google Cloud Platform, and Azure. We also support self-hosted infrastructure using Proxmox and bare metal servers." }
        ]
    },
    // DEVOPS SUB-PAGES
    {
        slug: "terraform-infrastructure-nairobi",
        title: "Terraform Infrastructure Setup",
        description: "Infrastructure as Code implementation using Terraform for startups and tech companies.",
        icon: "Code",
        status: 'active',
        parentService: "devops-consulting",
        features: [
            { title: "Infrastructure provisioning (Terraform)", icon: "Code" },
            { title: "Documentation and training", icon: "Book" },
            { title: "Cloud cost optimization", icon: "DollarSign" },
            { title: "Security best practices", icon: "Shield" }
        ],
        process: [
            { step: 1, title: "Resource auditing" },
            { step: 2, title: "Module design" },
            { step: 3, title: "Codifying state" },
            { step: 4, title: "Testing and integration" }
        ],
        technologies: ["Terraform", "AWS", "Google Cloud", "Azure"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "docker-kubernetes-setup-nairobi",
        title: "Docker & Kubernetes Setup",
        description: "Container orchestration and microservices infrastructure for development teams.",
        icon: "Box",
        status: 'active',
        parentService: "devops-consulting",
        features: [
            { title: "Kubernetes cluster management", icon: "Box" },
            { title: "Docker containerization", icon: "Layers" },
            { title: "Monitoring stack setup", icon: "Activity" },
            { title: "Automated scaling", icon: "TrendingUp" }
        ],
        process: [
            { step: 1, title: "Application analysis" },
            { step: 2, title: "Containerization" },
            { step: 3, title: "Cluster provisioning" },
            { step: 4, title: "Deployment and tuning" }
        ],
        technologies: ["Docker", "Kubernetes", "AWS EKS", "Google GKE"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "cicd-pipeline-setup-nairobi",
        title: "CI/CD Pipeline Setup",
        description: "Automated deployment pipelines using GitHub Actions or GitLab CI for engineering teams.",
        icon: "GitBranch",
        status: 'active',
        parentService: "devops-consulting",
        features: [
            { title: "Automated deployment pipelines", icon: "GitBranch" },
            { title: "Testing integration", icon: "CheckCircle2" },
            { title: "Docker containerization", icon: "Layers" },
            { title: "Documentation and training", icon: "Book" }
        ],
        process: [
            { step: 1, title: "Git workflow mapping" },
            { step: 2, title: "Pipeline scripting" },
            { step: 3, title: "Environment setup" },
            { step: 4, title: "Automation triggers" }
        ],
        technologies: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "cloud-migration-nairobi",
        title: "Cloud Migration Services",
        description: "Managed migration to AWS, GCP, or Azure for businesses moving off on-premise infrastructure.",
        icon: "Cloud",
        status: 'active',
        parentService: "devops-consulting",
        features: [
            { title: "Infrastructure provisioning", icon: "Code" },
            { title: "Cloud cost optimization", icon: "DollarSign" },
            { title: "Monitoring stack setup", icon: "Activity" },
            { title: "Zero-downtime migration strategies", icon: "TrendingUp" }
        ],
        process: [
            { step: 1, title: "Infrastructure audit" },
            { step: 2, title: "Migration planning" },
            { step: 3, title: "Execution and syncing" },
            { step: 4, title: "DNS switchover and testing" }
        ],
        technologies: ["AWS", "Google Cloud", "Azure", "Terraform"],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    },

    // BUSINESS SOLUTIONS
    {
        slug: "business-solutions",
        title: "Business IT Solutions",
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
        technologies: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
        bodyContent: "Every Nairobi business has processes that could be faster, more accurate, and less dependent on manual effort. Stratum builds the software and integration layer that makes it happen. We develop custom web applications, internal tools, and API integrations that connect your existing systems — accounting software, CRMs, inventory platforms, communication tools — into seamless automated workflows. Our engagements begin with a process mapping session to identify the highest-value automation opportunities. We then scope, build, and deploy solutions using modern frameworks, with full documentation and handover training for your team. We also build client-facing portals, booking systems, and reporting dashboards tailored to your operations.",
        faqs: [
            { question: "Can you integrate our existing software tools?", answer: "Yes. We specialise in API integrations between existing platforms including accounting, CRM, inventory, and communication tools." },
            { question: "How long does a custom software project take?", answer: "Simple automations and integrations can be delivered in 1–2 weeks. Full web application builds typically take 4–12 weeks depending on scope." },
            { question: "Do you provide documentation and training after delivery?", answer: "Yes. Every project includes full documentation and a handover training session for your team." }
        ]
    },
    // BUSINESS SUB-PAGES
    {
        slug: "custom-software-development-nairobi",
        title: "Custom Software Development",
        description: "Bespoke web applications and internal tools built for businesses.",
        icon: "Code",
        status: 'active',
        parentService: "business-solutions",
        features: [
            { title: "Full-stack web application development", icon: "Globe" },
            { title: "Database design and optimization", icon: "Database" },
            { title: "Cloud deployment", icon: "Cloud" },
            { title: "Technical strategy", icon: "Compass" }
        ],
        process: [
            { step: 1, title: "Requirements gathering" },
            { step: 2, title: "Architecture design" },
            { step: 3, title: "Development sprints" },
            { step: 4, title: "Testing and launch" }
        ],
        technologies: ["Next.js", "React", "Node.js", "Python", "PostgreSQL"],
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "api-integration-nairobi",
        title: "API Integration Services",
        description: "Connect your existing business systems with custom API integrations built for companies.",
        icon: "Webhook",
        status: 'active',
        parentService: "business-solutions",
        features: [
            { title: "API development and integration", icon: "Webhook" },
            { title: "Business process automation", icon: "Cpu" },
            { title: "Database optimization", icon: "Database" },
            { title: "Cloud handling constraints", icon: "Cloud" }
        ],
        process: [
            { step: 1, title: "Systems evaluation" },
            { step: 2, title: "Integration mapping" },
            { step: 3, title: "API development" },
            { step: 4, title: "Deployment and monitoring" }
        ],
        technologies: ["REST", "GraphQL", "Node.js", "Python"],
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "business-process-automation-nairobi",
        title: "Business Process Automation",
        description: "Automate repetitive workflows and manual processes for businesses using modern tooling.",
        icon: "Cpu",
        status: 'active',
        parentService: "business-solutions",
        features: [
            { title: "Business process automation", icon: "Cpu" },
            { title: "API integration", icon: "Webhook" },
            { title: "Custom internal tools", icon: "Code" },
            { title: "Reporting and analytics", icon: "TrendingUp" }
        ],
        process: [
            { step: 1, title: "Workflow auditing" },
            { step: 2, title: "Automation planning" },
            { step: 3, title: "Bot and script writing" },
            { step: 4, title: "Testing and deployment" }
        ],
        technologies: ["n8n", "Zapier", "Make", "Python"],
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
    },

    // COMPUTER SOLUTIONS
    {
        slug: "computer-solutions",
        title: "Computer Solutions",
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
        technologies: ["TrueNAS", "Windows Server", "Ubuntu Server", "Synology", "RAID configurations", "Enterprise hardware"],
        heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1920",
        bodyContent: "Getting the right hardware is as important as the software running on it. Stratum specifies, procures, builds, and deploys workstations, servers, and storage systems for businesses and power users. We build custom workstations for video editing, 3D rendering, software development, and general business use — configured and tested before delivery. Our server builds are based on TrueNAS for network-attached storage, Proxmox for virtualisation, and custom configurations for specific compute workloads. We handle component sourcing from trusted suppliers to ensure genuine hardware with valid warranties. We also offer staged rollouts for businesses deploying multiple workstations including OS imaging, software installation, domain joining, and user profile setup.",
        faqs: [
            { question: "Can you build a custom PC for video editing or 3D work?", answer: "Yes. We spec and build custom workstations for creative and technical workloads, optimised for your specific software and budget." },
            { question: "Do you supply the hardware or do we?", answer: "We can procure all hardware on your behalf from trusted suppliers, or work with hardware you have already purchased." },
            { question: "Do you offer TrueNAS setup and support?", answer: "Yes. TrueNAS is our preferred NAS platform and we have extensive experience with both SCALE and CORE editions." },
            { question: "Do you offer warranties on custom builds?", answer: "Yes. All components are sourced from authorised distributors with valid manufacturer warranties." }
        ]
    },
    // COMPUTER SUB-PAGES
    {
        slug: "workstation-setup-nairobi",
        title: "Workstation Setup & Configuration",
        description: "Professional workstation deployment, OS imaging, and configuration for businesses.",
        icon: "Monitor",
        status: 'active',
        parentService: "computer-solutions",
        features: [
            { title: "High-performance workstation specification", icon: "Monitor" },
            { title: "Operating system optimization", icon: "Settings" },
            { title: "Data migration and backup", icon: "Save" },
            { title: "Remote support", icon: "Headphones" }
        ],
        process: [
            { step: 1, title: "Spec design" },
            { step: 2, title: "Hardware procurement" },
            { step: 3, title: "OS and software imaging" },
            { step: 4, title: "Deployment and domain joining" }
        ],
        technologies: ["Windows 11", "Ubuntu Desk", "Active Directory"],
        heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "custom-server-builds-nairobi",
        title: "Custom Server Builds",
        description: "Bespoke server hardware specification, assembly, and deployment for businesses.",
        icon: "Server",
        status: 'active',
        parentService: "computer-solutions",
        features: [
            { title: "Custom server builds", icon: "Server" },
            { title: "Storage solutions", icon: "HardDrive" },
            { title: "Hardware troubleshooting", icon: "Wrench" },
            { title: "Remote support", icon: "Headphones" }
        ],
        process: [
            { step: 1, title: "Compute requirements assessment" },
            { step: 2, title: "Component sourcing" },
            { step: 3, title: "Assembly and stress testing" },
            { step: 4, title: "Installation at site" }
        ],
        technologies: ["Intel Xeon", "AMD EPYC", "Supermicro", "Dell", "HP"],
        heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1920",
    },
    {
        slug: "truenas-configuration-nairobi",
        title: "TrueNAS Configuration",
        description: "TrueNAS SCALE and CORE setup for network storage and virtualisation.",
        icon: "HardDrive",
        status: 'active',
        parentService: "computer-solutions",
        features: [
            { title: "Storage solutions (10TB - 100TB+)", icon: "HardDrive" },
            { title: "Custom server builds", icon: "Server" },
            { title: "Data migration and backup", icon: "Save" },
            { title: "Operating system optimization", icon: "Settings" }
        ],
        process: [
            { step: 1, title: "Storage topology planning" },
            { step: 2, title: "TrueNAS OS installation" },
            { step: 3, title: "ZFS pool creation" },
            { step: 4, title: "Network sharing configuration" }
        ],
        technologies: ["TrueNAS SCALE", "TrueNAS CORE", "ZFS"],
        heroImage: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1920",
    },

    // COMING SOON
    {
        slug: "cybersecurity",
        title: "Cybersecurity",
        description: "Comprehensive cybersecurity services - launching Q1 2025",
        icon: "Lock",
        status: 'coming-soon',
        subServices: [],
        features: [],
        process: [],
        technologies: [],
        heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920",
    }
]
