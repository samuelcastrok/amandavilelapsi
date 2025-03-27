import "react";
import Image from 'next/image'
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GmailIcon from "./icons/GmailIcon";

declare module "react" {
  interface FormHTMLAttributes <T> extends HTMLAttributes<T> {
    netlify?: string;
  }
}

export default function Contact(props: {id: string}) {
  return (
    <section id={props.id} className="h-full  text-secondary-color bg-[url(../public/images/VLFC0500.jpg)] bg-[center_60%] bg-cover">
      <div className="h-full w-full px-4 sm:px-20 py-[100px] m-auto backdrop-blur-[3px]">
        <div className="flex flex-col sm:flex-col">
          <div className="w-full sm:w-1/2 p-8">
            <ul>
              <li className="flex items-center gap-6 my-4">
                <WhatsAppIcon color="var(--secondary-color)" className="h-6 w-6" />
                {/* <Image src={whatsappIcon} alt="Ícone do Whatsapp" className="h-6 w-6"/> */}
                <a 
                  className="text-xl"
                  href="https://wa.me/5543999162436"
                  target="_blank"
                  aria-label="Converse comigo pelo Whatsapp" 
                >
                  (43) 99916-2436
                </a>
              </li>
              <li className="flex items-center gap-6 my-4">
                <InstagramIcon color="var(--secondary-color)" className="h-6 w-6" />
                <a
                  className="text-xl"
                  href="https://www.instagram.com/amandavilelak/"
                  target="_blank"
                  aria-label="Acesse meu perfil no Instagram"
                >
                  @amandavilelak
                </a>
              </li>
              <li className="flex items-center gap-6 my-4">
                <LinkedInIcon color="var(--secondary-color)" className="h-6 w-6" />
                <a
                  className="text-xl"
                  href="https://br.linkedin.com/in/amandavilela"
                  target="_blank"
                  aria-label="Acesse meu perfil no LinkedIn"
                >
                  /amandavilela
                </a>
              </li>
              <li className="flex items-center gap-6 my-4">
                <GmailIcon color="var(--secondary-color)" className="h-6 w-6" />
                <a
                  className="text-xl"
                  href="mailto:amandavilelapsi@gmail.com"
                  target="_blank"
                  aria-label="Envie um e-mail para mim"
                >
                  amandavilelapsi@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <h1 className="text-6xl text-[#e6d6be] font-pritude-radiance">Entre em contato</h1>
            <form className="flex flex-col gap-8 w-full bg-[#e6d6be] text-primary-color rounded-xl p-12" netlify="true" >
              <div>
                <label htmlFor="name" className="block">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  title=""
                  type="text"
                  className="block mt-2 rounded-md outline outline-1 outline-gray-300 w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-md outline outline-1 outline-gray-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block">
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 w-full rounded-md outline outline-1 outline-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 w-full rounded-md outline outline-1 outline-gray-300"
                />
              </div>
              <button className="bg-primary-color text-[#e6d6be] rounded-full p-2">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}