import Image from "next/image";
import aboutImage from '../../public/images/about2.jpg';

export default function About(props: {id: string}) {
  return (
    <section id={props.id} className="flex flex-col px-24 py-[100px] gap-6  m-auto snap-start text-secondary-color">
      <header>
        <h1 className="text-6xl font-pritude-radiance">Sobre mim</h1>
      </header>
      <div className="flex items-start">
        <div className="flex-[2] h-full max-h-[500px]">
          <Image
            className="h-auto max-h-full w-auto object-cover rounded-xl"
            alt="Me"
            src={aboutImage.src}
            width={aboutImage.width}
            height={aboutImage.height}
          />
        </div>
        <div className="flex-[2] flex flex-col h-full max-h-[500px] pl-12 gap-y-4">
          <p>
            Oi, sou a Amanda! :) 
          </p>
          <p>
            Psicóloga clínica (CRP 08/40399) e especialista em Terapia Analítico-Comportamental.
          </p>
          <p>
            Em meu trabalho priorizo trocas verdadeiras e autênticas, oferecendo um espaço com muito acolhimento para que o processo terapêutico se torne um caminho de autoconhecimento e transformação.
          </p>
          <p>
            Tudo isso através de uma relação de parceria e comprometimento, com o propósito de auxiliar você a construir uma percepção mais aprofundada de si e do ambiente que o cerca.
          </p>
          <p>
            É nesse entendimento e no trabalho conjunto que conseguimos gerar as mudanças necessárias para que você possa trilhar um caminho em direção a uma vida que seja verdadeiramente significativa e valiosa para você.
          </p>
        </div>
      </div>
    </section>
  );
}