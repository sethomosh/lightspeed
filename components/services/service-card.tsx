import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ServiceCardProps {
    title: string
    description: string
    icon?: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {icon && <div className="mb-4">{icon}</div>}
            </CardContent>
        </Card>
    )
}
