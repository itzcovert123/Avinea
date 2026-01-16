import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadBrochureButton() {
  const phone = "9657119798"
  const message = "Send me a brochure of Vyom Sigma Avinea Hadapsar."

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <div
      className="fixed top-20 right-4 z-40"
      aria-live="polite"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Download brochure via WhatsApp"
      >
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" aria-hidden="true" />
          <span className="hidden sm:inline">Download Brochure</span>
          <span className="sm:hidden">Brochure</span>
        </Button>
      </a>
    </div>
  )
}