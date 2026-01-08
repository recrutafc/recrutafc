import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className="text-slate50 flex gap-4">
      <Link
        href="https://www.linkedin.com/company/recruta-fc/"
        target="_blank"
        aria-label="Botão ir para linkedIn"
      >
        <LinkedinLogoIcon
          size={24}
          weight="duotone"
          className="hover:text-slate500 delay-150 ease-in-out transition-colors"
        />
      </Link>
      <Link
        href="https://www.instagram.com/recrutafc_rh"
        target="_blank"
        aria-label="Botão ir para Instagram"
      >
        <InstagramLogoIcon
          size={24}
          weight="duotone"
          className="hover:text-slate500 delay-150 ease-in-out transition-colors"
        />
      </Link>
      <Link
        href="https://wa.link/xnrpdi"
        target="_blank"
        aria-label="Botão ir para WhatsApp"
      >
        <WhatsappLogoIcon
          size={24}
          weight="duotone"
          className="hover:text-slate500 delay-150 ease-in-out transition-colors"
        />
      </Link>
    </div>
  )
}
