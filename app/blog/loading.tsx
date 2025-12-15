import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="container py-24 md:py-32">
            {/* Header Skeleton */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-12">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-6 w-96" />
                </div>
                <Skeleton className="h-10 w-[300px]" /> {/* Search bar */}
            </div>

            {/* Blog Grid Skeleton */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="aspect-video w-full rounded-xl" />
                        <div className="space-y-2 pt-2">
                            <Skeleton className="h-5 w-1/4" /> {/* Tag/Date */}
                            <Skeleton className="h-6 w-3/4" /> {/* Title */}
                            <Skeleton className="h-4 w-full" /> {/* Excerpt */}
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
