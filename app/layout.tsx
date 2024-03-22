import React from "react";
import Navigation from "../components/navigation";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: {
        template: "%s | Next.js",
        default: "Loading...",
    },
    description: "Generated by Next.js",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Navigation/>
        {children}
        </body>
        </html>
    );
}
