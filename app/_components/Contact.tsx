'use client';

import "react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GmailIcon from "./icons/GmailIcon";
import { useState } from "react";

export default function Contact(props: {id: string}) {
  const [phone, setPhone] = useState("");
  // const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); 

  //   const target = event.target as HTMLFormElement;
  //   const formData = new FormData(target);
    
  //   const name = formData.get("name") as string;
  //   const email = formData.get("email") as string;
  //   const rawPhone = formData.get("phone")?.toString() ?? "";
  //   const phone = rawPhone.replace(/\D/g, "");
  //   const message = formData.get("message") as string;

  //   try {
  //     const response = await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: new URLSearchParams({
  //         'form-name': 'contact',
  //         name,
  //         email,
  //         phone,
  //         message,
  //       }).toString(),
  //     })

  //     if (response.ok) {
  //       setFormStatus("success");
  //       target.reset(); 
  //     } else {
  //       setFormStatus("error");
  //     }
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //     setFormStatus("error");
  //   }
  // };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const data = {
      "form-name": "contact",
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone,
      message: formData.get("message")?.toString() ?? "",
    };
  
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });

    setPhone("");
    target.reset(); 
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
    console.log(result);
    return result;
  }

  return (
    <section id={props.id} className="h-full  text-secondary-color bg-[url(../public/images/VLFC0500.jpg)] bg-[center_60%] bg-cover">
      <div className="h-full w-full px-4 sm:px-20 py-10 m-auto backdrop-blur-[3px]">
        <div className="flex flex-col sm:flex-row">
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
            <form 
              name="contact"
              className="flex flex-col gap-8 w-full bg-[#e6d6be] text-primary-color rounded-xl p-12" 
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  title=""
                  type="text"
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