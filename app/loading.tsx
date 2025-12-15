import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="container min-h-screen pt-20 pb-10 flex flex-col items-center animate-in fade-in duration-500">
            {/* Hero Section Skeleton */}
            <div className="w-full max-w-4xl flex flex-col items-center space-y-6 text-center mb-16">
                <Skeleton className="h-8 w-48 rounded-full" /> {/* Badge */}
                <Skeleton className="h-16 w-3/4 max-w-[600px]" /> {/* Title */}
                <Skeleton className="h-16 w-full max-w-[700px]" /> {/* Title L2 */}
                <Skeleton className="h-24 w-full max-w-[600px] mt-4" /> {/* Description */}
                <div className="flex gap-4 mt-8">
                    <Skeleton className="h-12 w-40 rounded-full" />
                    <Skeleton className="h-12 w-40 rounded-full" />
                </div>
            </div>

            {/* Content Grid Skeleton */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-[200px] w-full rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
