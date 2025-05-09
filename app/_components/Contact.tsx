'use client';

import "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GmailIcon from "./icons/GmailIcon";
import { useState } from "react";

export default function Contact(props: {id: string}) {
  const [phone, setPhone] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const data = {
      "form-name": "contact",
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: phone,
      message: formData.get("message")?.toString() ?? "",
    };
  
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      setFormStatus("success");
      setPhone("");
      target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch {
      setFormStatus("error");
    }
  };

  const formatPhone = (value: string) => {
    const number = value.replace(/\D/g, "").slice(0, 11);
    const match = number.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (!match) return value;
    const [, ddd, firstPart, secondPart] = match;
    let result = "";
    if (ddd) result += `(${ddd}`;
    if (ddd && ddd.length === 2) result += `) `;
    if (firstPart) result += firstPart;
    if (secondPart) result += `-${secondPart}`;
    return result;
  }

  return (
    <section id={props.id} className="h-full text-secondary-color font-bold sm:font-normal bg-[url(../public/images/VLFC0500.jpg)] bg-[14%_3%] sm:bg-[center_60%] sm:bg-cover">
      <div className="h-full w-full px-4 sm:px-20 py-10 m-auto backdrop-blur-[3px]">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 p-8">
            <ul>
              <li className="flex items-center gap-6 my-4">
                <WhatsAppIcon color="var(--secondary-color)" className="h-6 w-6" />
                {/* <Image src={whatsappIcon} alt="Ícone do Whatsapp" className="h-6 w-6"/> */}
                <a 
                  className="text-xl"
                  href="https://wa.me/message/OBXTA5PU5G56M1"
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
            <form 
              name="contact"
              className="flex flex-col gap-8 w-full bg-[#e6d6be] text-primary-color rounded-xl p-12" 
              data-netlify="true"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Mensagem enviada com sucesso!</strong>
                  <span className="block sm:inline"> Entrarei em contato em breve.</span>
                </div>
              )}
              {formStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Erro ao enviar mensagem.</strong>
                  <span className="block sm:inline"> Por favor, tente novamente mais tarde.</span>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  title=""
                  type="text"
                  autoComplete="off"
                  required
                  className="block mt-2 rounded-md outline outline-1 outline-gray-300 w-full p-2 text-black"
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
                  autoComplete="off"
                  required
                  className="mt-2 p-2 w-full rounded-md outline outline-1 outline-gray-300 text-black"
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
                  value={phone}
                  autoComplete="off"
                  className="mt-2 p-2 w-full rounded-md outline outline-1 outline-gray-300 text-black"
                  onChange={(event) => {
                    const formattedValue = formatPhone(event.target.value);
                    setPhone(formattedValue);
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  required
                  className="mt-2 p-2 w-full rounded-md outline outline-1 outline-gray-300 text-black"
                />
              </div>
              <button className="bg-primary-color text-[#e6d6be] rounded-full p-2" >Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}