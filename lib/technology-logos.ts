
// Map of technology names to their Simple Icons slugs
// Using https://cdn.simpleicons.org/[slug]

const slugs: Record<string, string> = {
    // Cloud & Infrastructure
    "AWS": "amazonaws",
    "Azure": "microsoftazure",
    "Google Cloud": "googlecloud",
    "Vercel": "vercel",
    "DigitalOcean": "digitalocean",
    "Windows Server": "windows",
    "Ubuntu Server": "ubuntu",

    // DevOps & Containers
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "GitHub": "github",
    "GitHub Actions": "githubactions",
    "GitLab": "gitlab",
    "Jenkins": "jenkins",
    "Terraform": "terraform",
    "Ansible": "ansible",

    // Development
    "Next.js": "nextdotjs",
    "React": "react",
    "Node.js": "nodedotjs",
    "Python": "python",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Go": "go",
    "Rust": "rust",
    "C++": "cplusplus",
    "C#": "csharp",

    // Databases
    "PostgreSQL": "postgresql",
    "MongoDB": "mongodb",
    "Redis": "redis",
    "MySQL": "mysql",
    "SQLite": "sqlite",

    // Networking & Security
    "Ubiquiti": "ubiquiti",
    "Ubiquiti UniFi": "ubiquiti",
    "Ubiquiti Protect": "ubiquiti",
    "Cisco": "cisco",
    "MikroTik": "mikrotik",
    "Cloudflare": "cloudflare",
    "pfSense": "pfsense",
    "Fortinet": "fortinet",
    "Palo Alto": "paloaltonetworks",
    "Hikvision": "hikvision",
    "TP-Link": "tplink",

    // Smart Home & IoT
    "Home Assistant": "homeassistant",
    "Philips Hue": "philipshue",
    "Sonos": "sonos",
    "Plex": "plex",
    "Synology": "synology",
    "Synology NAS": "synology",
    "Samsung SmartThings": "smartthings",
    "Zigbee": "zigbee",
    "Z-Wave": "zwave",

    // Monitoring
    "Prometheus": "prometheus",
    "Grafana": "grafana",
    "Datadog": "datadog",
    "Splunk": "splunk",

    // Storage & Systems
    "TrueNAS": "truenas",
    "Linux": "linux",
    "Android": "android",
    "iOS": "ios"
}

export function getTechnologyLogo(name: string): string {
    const slug = slugs[name] || slugs[Object.keys(slugs).find(k => name.includes(k)) || ""] || name.toLowerCase().replace(/\s+/g, '')
    // Returning URL without color to allow CSS filters to handle hover effects
    // User requested dark gray (222222), but handling that via CSS filter (grayscale) is more flexible
    return `https://cdn.simpleicons.org/${slug}`
}
