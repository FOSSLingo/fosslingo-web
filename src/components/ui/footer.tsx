import * as FeatherIcons from 'react-feather';
import { SiBluesky, SiGithub } from '@icons-pack/react-simple-icons';
import Link from "next/link";
import { useTranslations } from 'next-intl';

function wipPopup() {
  alert("The FOSSLingo Bluesky account is a work in progress. Stay tuned!")
}

function domainNotice() {
  alert("This website's domain will probably change once I buy a domain for FOSSLingo!")
}

export const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <main>
      <hr className='border-neutral-800'/> 
      <div className='flex items-center justify-between px-15 sm:px-25 md:px-50 lg:px-75 xl:px-200 h-32'>
        <div>
          <p>{t("footerText")}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5'>
          <Link href="" onClick={wipPopup}><SiBluesky/></Link>
          <Link href="https://github.com/FOSSLingo"><SiGithub/></Link>
          <Link href="https://web-eight-ivory-84.vercel.app/" onClick={domainNotice}><FeatherIcons.Globe/></Link>
        </div>
      </div>
    </main>
  )
}