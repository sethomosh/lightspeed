export function getTechLogo(name: string): string {
    // Map technology names to Simple Icons slugs
    const logoMap: Record<string, string> = {
        // Cloud & Infrastructure
        'AWS': 'amazonaws',
        'Azure': 'microsoftazure',
        'Google Cloud': 'googlecloud',
        'GCP': 'googlecloud',
        'Vercel': 'vercel',
        'DigitalOcean': 'digitalocean',
        'Heroku': 'heroku',
        'Windows Server': 'windows',
        'Ubuntu Server': 'ubuntu',
        'Linux': 'linux',

        // DevOps
        'Docker': 'docker',
        'Kubernetes': 'kubernetes',
        'GitHub': 'github',
        'GitLab': 'gitlab',
        'Jenkins': 'jenkins',
        'Terraform': 'terraform',
        'Ansible': 'ansible',
        'GitHub Actions': 'githubactions',
        'Prometheus': 'prometheus',
        'Grafana': 'grafana',

        // Frontend
        'React': 'react',
        'Next.js': 'nextdotjs',
        'Vue': 'vuedotjs',
        'Angular': 'angular',
        'Tailwind CSS': 'tailwindcss',
        'TypeScript': 'typescript',
        'JavaScript': 'javascript',

        // Backend
        'Node.js': 'nodedotjs',
        'Python': 'python',
        'Express': 'express',
        'FastAPI': 'fastapi',
        'Django': 'django',
        'Go': 'go',
        'Rust': 'rust',

        // Databases
        'PostgreSQL': 'postgresql',
        'MongoDB': 'mongodb',
        'MySQL': 'mysql',
        'Redis': 'redis',
        'Supabase': 'supabase',
        'SQLite': 'sqlite',

        // Networking
        'Ubiquiti': 'ubiquiti',
        'Ubiquiti UniFi': 'ubiquiti',
        'Ubiquiti Protect': 'ubiquiti',
        'UniFi': 'ubiquiti',
        'Cisco': 'cisco',
        'MikroTik': 'mikrotik',
        'pfSense': 'pfsense',
        'Cloudflare': 'cloudflare',
        'Fortinet': 'fortinet',
        'Palo Alto': 'paloaltonetworks',
        'Hikvision': 'hikvision',
        'TP-Link': 'tplink',

        // Smart Home
        'Home Assistant': 'homeassistant',
        'Philips Hue': 'philipshue',
        'Sonos': 'sonos',
        'Plex': 'plex',
        'Synology': 'synology',
        'Synology NAS': 'synology',
        'Samsung SmartThings': 'smartthings',
        'Zigbee': 'zigbee',
        'Z-Wave': 'zwave',

        // Storage
        'TrueNAS': 'truenas',
    }

    const slug = logoMap[name] || name.toLowerCase().replace(/[\s.]/g, '')

    // Return Simple Icons CDN URL
    return `https://cdn.simpleicons.org/${slug}/334155` // Slate-700 color
}
