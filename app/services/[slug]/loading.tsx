import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Hero Skeleton */}
            <div className="relative h-[60vh] min-h-[500px] w-full bg-muted/30">
                <div className="container relative z-10 flex h-full flex-col justify-center gap-6">
                    <Skeleton className="h-8 w-32 rounded-full" />
                    <Skeleton className="h-16 w-3/4 max-w-3xl" />
                    <Skeleton className="h-6 w-full max-w-2xl" />
                    <Skeleton className="h-6 w-2/3 max-w-2xl" />
                    <div className="flex gap-4 mt-4">
                        <Skeleton className="h-12 w-40 rounded-full" />
                        <Skeleton className="h-12 w-40 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="container py-20">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-6">
                            <Skeleton className="h-10 w-48" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton key={i} className="h-32 rounded-xl" />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Pricing */}
                    <div className="space-y-8">
                        <Skeleton className="h-[400px] w-full rounded-xl" />
                        <Skeleton className="h-[200px] w-full rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
