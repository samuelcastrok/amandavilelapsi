import Image from "next/image";
import approachImage from '../../public/images/approach.jpeg';

export default function Approach(props: {id: string}) {
  return (
    <section id={props.id} className="relative flex w-full flex-col py-[100px] pb-[100px] pl-20 gap-6 bg-background-secondary text-[#e6d6be]">
      <div className="section-container m-auto">
        <header className="flex items-center gap-4">
          <h1 className="mb-6 text-6xl font-pritude-radiance">Abordagem</h1>
          <hr className="w-full bt-1 border-[#e6d6be]" />
        </header>
        <div className="grid grid-cols-[2fr_1fr] grid-rows-1">
          <div className="flex flex-col my-auto mr-40 align-center text-justify leading-6 gap-y-4">
            <p>
              Meu trabalho é pautado nas Terapias Comportamentais Contextuais, com foco na ACT, Terapia de Aceitação e Compromisso.
            </p>
            <p>
              Minha abordagem tem como foco auxiliar você a lidar com suas dificuldades, sejam elas problemas, emoções intensas, conflitos internos ou momentos de incerteza, te ajudando a compreender as origens dos seus comportamentos, as consequências que eles geram na sua vida e os fatores que contribuem para que eles se repitam. Ao entendermos juntos esses aspectos, o objetivo é promover um maior autoconhecimento, para que você possa fazer escolhas mais conscientes e alinhadas com o que você deseja para sua vida. É um processo de descoberta e compreensão de si mesmo para viver de uma forma mais plena.
            </p>
            <p>
              A ACT te convida a aceitar a realidade como ela é e a se comprometer com ações que te levam em direção a uma vida significativa, cultivando a flexibilidade psicológica para lidar com os desafios. 
            </p>
            <p className="flex flex-col text-center"><q className="bg-primary-color"><i>As artimanhas que usamos para escapar da aflição nos desviam de nossos objetivos de vida. 
              <br/>E é por eles que vale a pena viver</i></q> - Steven Hayes</p>
          </div>
          <div className="flex h-full">
            <Image
              className="absolute h-[calc(100%_+_4rem)] w-fit top-[-2rem]  bottom-[-2rem] right-0 object-contain object-left rounded-tl-full rounded-bl-full"
              src={approachImage}
              alt="approach"
              width={approachImage.width}
              height={approachImage.height}
            />
          </div>
        </div>
      </div>      
    </section>
    
  );
}