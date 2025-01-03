import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"
import React from "react";
import {Toaster} from "sonner";

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Messarae - Personal Portfolio",
	description: "Façonner des histoires avec passion : Découvrez le travail de Messara",
	metadataBase : new URL('https://messarae.com')
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr" data-bs-theme="dark">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}><Toaster richColors={true} position={'top-right'}/>{children}</body>
		</html>
	)
}
