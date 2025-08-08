import { cn } from "@/lib/utils"

interface Partner {
  name: string
  domain: string
  logo: string
  alt: string
}

const partners: Partner[] = [
  {
    name: "Holo Org",
    domain: "holo-org.com",
    logo: "/placeholder.svg",
    alt: "Holo Org - Holistic Organization Platform"
  },
  {
    name: "Augmented Humanity Coach",
    domain: "augmentedhumanity.coach",
    logo: "/placeholder.svg",
    alt: "Augmented Humanity Coach - Personal Development Platform"
  },
  {
    name: "GCBAT",
    domain: "gcbat.org",
    logo: "/placeholder.svg",
    alt: "GCBAT - Global Community Building and Technology"
  },
  {
    name: "Enter Australia Tech",
    domain: "enteraustralia.tech",
    logo: "/placeholder.svg",
    alt: "Enter Australia Tech - Technology Immigration Solutions"
  },
  {
    name: "Tech4Humanity Australia",
    domain: "tech4humanity.com.au",
    logo: "/placeholder.svg",
    alt: "Tech4Humanity Australia - Technology for Social Impact"
  }
]

interface PartnerCarouselProps {
  className?: string
}

export function PartnerCarousel({ className }: PartnerCarouselProps) {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className={cn(
      "fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden py-3 z-40",
      className
    )}>
      <div className="carousel-track flex animate-partner-scroll hover:animation-pause">
        {duplicatedPartners.map((partner, index) => (
          <a
            key={`${partner.domain}-${index}`}
            href={`https://${partner.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300 group"
          >
            <div className="flex items-center gap-3">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.domain}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  )
}