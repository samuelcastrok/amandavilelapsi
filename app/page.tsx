import Image from "next/image";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Services from "./_components/Services";
import Psycotherapy from "./_components/Approach";
import whatsAppIcon from '../public/images/whatsapp-raw.svg';
import { Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function HomePage() {
  return (    
    <main>
      {/* <Main /> */}
      <About id="about"/>
      <Psycotherapy id="approach" />
      <Services id="services" />
      {/* <Network id="network" />
      <Blog id="blog" /> */}
      <Contact id="contact" />
      <a href="https://wa.me/5543999162436" aria-label="Converse comigo pelo WhatsApp">
        <Image className="fixed bottom-6 right-6 h-16 w-min" alt="Ícone do WhatsApp" src={whatsAppIcon} height={whatsAppIcon.height} width={whatsAppIcon.width} />
      </a>
    </main>
  );
}
