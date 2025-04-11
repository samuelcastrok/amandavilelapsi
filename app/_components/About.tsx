import Image from "next/image";
import aboutImage from '../../public/images/about2.jpg';

export default function About(props: {id: string}) {
  return (
    <section id={props.id} className="flex flex-col px-6 py-10 sm:pl-20 sm:px-8  gap-6  m-auto snap-start text-secondary-color max-w-screen-xl">
      <header>
        <h1 className="text-6xl font-pritude-radiance">Sobre mim</h1>
      </header>
      <div className="flex gap-6 flex-col md:flex-row md:h-full md:items-stretch lg:items-center">
        <Image
          className="md:max-w-[450px] md:aspect-square md:object-cover rounded-xl h-auto max-w-full"
          alt="Me"
          src={aboutImage.src}
          width={aboutImage.width}
          height={aboutImage.height}
          priority
        />
        <div className=" flex flex-col h-full gap-y-4 max-w-screen-md">
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



