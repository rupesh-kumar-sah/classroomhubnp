import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SearchComponent } from "@/components/search/SearchComponent";

export default function SearchPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === "search-hero");
    return (
        <div>
            <section className="w-full py-12 bg-muted/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                            Intelligent Search
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Find exactly what you need with our AI-powered search. Look for notes, videos, topics, and more.
                        </p>
                        </div>
                        {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            width={600}
                            height={300}
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            data-ai-hint={heroImage.imageHint}
                        />
                        )}
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12 md:px-6">
                <SearchComponent />
            </div>
        </div>
    )
}
