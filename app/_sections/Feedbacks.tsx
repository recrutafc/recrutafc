import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../_components/ui/carousel'
import FeedbacksCard from '../_components/FeedbacksCard'
import ServiceTitle from '../_components/ServiceTitle'

export default function Feedbacks() {
  return (
    <>
      <section className="bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat">
        <div className="max-w-[1400px] mx-auto py-[100px]">
          <div className="flex flex-col justify-center items-center">
            <ServiceTitle>Depoimentos</ServiceTitle>
            <h2 className="text-3xl text-center font-extrabold text-colors-mainBlue900 mb-4 max-lg:text-2xl">
              O Que Nossos Clientes Falam <br />
              Sobre Nós
            </h2>
          </div>
          <Carousel className="max-w-[1400px] mx-auto">
            <CarouselContent className="pt-[24px]">
              <CarouselItem>
                <FeedbacksCard
                  title="Lorem Ipsun"
                  prof="lorem"
                  image="/profile/1.webp"
                  feedback="“Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla odio nec parturient aptent enim praesent sapien. At amet vel sollicitudin ante, sodales sed dis. Donec non in duis; primis sed non. Habitasse fusce quisque lobortis nisi quisque cras lectus”"
                />
              </CarouselItem>
              <CarouselItem>
                <FeedbacksCard
                  title="Lorem Ipsun"
                  prof="lorem"
                  image="/profile/1.webp"
                  feedback="“Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla odio nec parturient aptent enim praesent sapien. At amet vel sollicitudin ante, sodales sed dis. Donec non in duis; primis sed non. Habitasse fusce quisque lobortis nisi quisque cras lectus”"
                />
              </CarouselItem>
              <CarouselItem>
                <FeedbacksCard
                  title="Lorem Ipsun"
                  prof="lorem"
                  image="/profile/1.webp"
                  feedback="“Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla odio nec parturient aptent enim praesent sapien. At amet vel sollicitudin ante, sodales sed dis. Donec non in duis; primis sed non. Habitasse fusce quisque lobortis nisi quisque cras lectus”"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="relative w-[100px] mx-auto mt-9 text-colors-mainBlue900">
              <CarouselPrevious className="left-0 bg-colors-mainWhite" />
              <CarouselNext className="right-0 bg-colors-mainWhite" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
