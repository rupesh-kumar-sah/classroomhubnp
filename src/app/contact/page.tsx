import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, Send, Building, Phone } from "lucide-react";

export default function ContactPage() {
    const heroImage = PlaceHolderImages.find((img) => img.id === "contact-hero");

    return (
        <div>
            <section className="w-full py-12 bg-muted/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                                Get in Touch
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                I'd love to hear from you. Send a message and I'll get back to you.
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
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Contact Information</CardTitle>
                                <CardDescription>Find my contact details below.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <User className="h-6 w-6 text-primary" />
                                    <div>
                                        <p className="font-semibold">Rupesh Kumar Sah</p>
                                        <p className="text-sm text-muted-foreground">ClassroomHub Admin</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <a href="mailto:rsah0123456@gmail.com" className="text-sm hover:underline">
                                        rsah0123456@gmail.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                     <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Send a Message</CardTitle>
                                <CardDescription>Fill out the form to get in touch.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Your Email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Your Message" className="min-h-[100px]" />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        <Send className="mr-2 h-4 w-4" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}