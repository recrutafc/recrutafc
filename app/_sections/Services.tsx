import ServiceCard from '../_components/ServiceCard'
import ServiceTitle from '../_components/ServiceTitle'

export default function Services() {
  return (
    <>
      <section className="px-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-colors-mainWhite to-colors-mainGray200 to-70%">
        <div className="max-w-[1400px] mx-auto py-9">
          <div className="max-w-[833px] mx-auto flex flex-col items-center">
            <ServiceTitle>Serviços</ServiceTitle>
            <h2 className="text-4xl font-extrabold text-colors-mainBlue900 text-center mb-6 max-lg:text-2xl">
              Nossos Serviços Vão Te Surpreender
            </h2>
            <p className="text-xl text-colors-mainGray400 text-center max-lg:text-base">
              A Recruta F&C oferece uma seleção personalizada que supera
              expectativas. Quando estiver pronto para encontrar os melhores
              talentos, conte conosco.
            </p>
          </div>
          <div className="py-6 flex flex-col justify-between gap-4">
            <ServiceCard
              link='/recrutamento-e-selecao'
              image="/images/1.webp"
              styleType="1"
              title="Recrutamento e Seleção"
              text="Nossa missão é colaborar com as empregadoras na contratação de colaboradores através de um serviço totalmente personalizado, ágil e qualificado. Se você busca economia financeira, redução de taxa turnover, otimização de tempo e qualidade em contratações, oferecemos o serviço ideal a você."
            />
            <ServiceCard
              link='/recolocacao-profissional'
              image="/images/2.webp"
              styleType="2"
              title="Recolocação e Transição Profissional "
              text="Oferecemos esse serviço para quem busca sua reinserção no mercado de trabalho e/ou busca uma transição profissional. Adotamos estratégias individuais, entendendo propósitos e objetivos para assim buscarmos o objetivo junto ao assessorado."
            />
          </div>
        </div>
      </section>
    </>
  )
}
