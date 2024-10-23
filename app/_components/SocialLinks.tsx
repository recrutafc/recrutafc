import {
  FacebookLogo,
  WhatsappLogo,
  LinkedinLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className="text-colors-mainGray200 flex gap-9">
      <Link href="https://www.linkedin.com/company/recruta-fc/" target="_blank" aria-label='Botão ir para linkedIn'>
        <LinkedinLogo
          size={32}
          weight="fill"
          className="hover:text-colors-mainWhite delay-150 ease-in-out"
        />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=61557708250068" target="_blank" aria-label='Botão ir para Facebook'>
        <FacebookLogo
          size={32}
          weight="fill"
          className="hover:text-colors-mainWhite delay-150 ease-in-out"
        />
      </Link>
      <Link href="https://wa.me/5516996093789/?text=Olá, gostaria de saber mais sobre a Recruta FC." target="_blank" aria-label='Botão ir para WhatsApp'>
        <WhatsappLogo
          size={32}
          weight="fill"
          className="hover:text-colors-mainWhite delay-150 ease-in-out"
        />
      </Link>
    </div>
  )
}
