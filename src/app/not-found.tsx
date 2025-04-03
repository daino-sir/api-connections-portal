'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {PageWrapper} from "@/components/ui";

export default function NotFound() {
    const pathname = usePathname()

    useEffect(() => {
        // Log the 404 error to an external service
        console.error(`Page not found: ${pathname}`)
    }, [pathname])

    return (
        <PageWrapper>
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
        </PageWrapper>
    )
}