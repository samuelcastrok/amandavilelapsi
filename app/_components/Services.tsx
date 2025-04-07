import Image from 'next/image'
import approachIcon from '../../assets/images/undraw_learning-sketchingsh.svg'
import purposeIcon from '../../assets/images/undraw_things-to-say_f5mi.svg'
import contactIcon from '../../assets/images/undraw_personal-file_81l0.svg'

export default function Services(props: {id: string}) {
  return (
    <section id={props.id} className="flex flex-col px-20 py-10 gap-6 m-auto">
      <header className="grid items-center justify-center grid-cols-[1fr_auto_1fr] gap-4">
        <hr className="w-full bt-1 border-secondary-color" />
        <h1 className="text-6xl text-secondary-color font-pritude-radiance"> Atendimento </h1>
        <hr className="w-full bt-1 border-secondary-color" />
      </header>
      <div className="flex flex-col sm:flex-row gap-16 justify-center h-full">
        <div className="group text-lg leading-6  text-justify rounded-lg overflow-hidden max-w-sm h-full">
          {/* <Image 
            className="p-8 h-[256px] scale-90 group-hover:scale-100 transition-[transform] duration-100 ease-linear"
            alt=""
            src={approachIcon.src}
            width={approachIcon.width}
            height={approachIcon.height}
          /> */}
          <div className="flex flex-col gap-4 bg-secondary-color text-secondary-text-color color p-4 h-full">
            <h2 className="font-pritude-radiance text-4xl">Presencial</h2>
            <p className="text-base">Ofereço atendimento presencial na cidade de Londrina, no Núcleo Evoluir. As sessões têm duração de 50 minutos, e para tornar esse momento ainda mais agradável, temos um cafézinho delicioso. :)</p>
          </div>
        </div>
        <div className="group text-lg leading-6  text-justify border border-secondary-color rounded-lg overflow-hidden max-w-sm h-full">
          {/* <Image 
            className="p-8 h-[256px] scale-90 group-hover:scale-100 transition-[transform] duration-100 ease-linear"
            alt=""
            src={purposeIcon.src}
            width={purposeIcon.width}
            height={purposeIcon.height}
          /> */}
          <div className="flex flex-col gap-4 bg-secondary-color text-secondary-text-color p-4 h-full">
            <h2 className="font-pritude-radiance text-4xl">Online</h2>
            <p className="text-base">Para aqueles que não residem em Londrina ou preferem a comodidade do atendimento remoto, as sessões são conduzidas através do Google Meet, com a mesma duração de 50 minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}