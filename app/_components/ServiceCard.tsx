import Image from 'next/image'
import Button from './Button'

interface ServiceCardProps {
  image: string
  title: string
  text: string
  styleType?: '1' | '2'
  link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  text,
  styleType = '1',
  link
}) => {
  return (
    <>
      {styleType === '1' && (
        <div className="flex max-md:flex-wrap">
          <div className="max-w-[700px] pt-[50px] max-md:mb-9 pr-4 max-md:pr-0">
            <h2 className="font-extrabold text-4xl mb-4 max-md:text-2xl text-colors-mainBlue900">
              {title}
            </h2>
            <p className="text-colors-mainGray400 mb-9">{text}</p>
            <Button href={link} styleType="1" maxWidth={200} redirect=''>
              Saber Mais
            </Button>
          </div>
          <div className="p-[50px]">
            <div className="relative">
              <Image src={image} alt="Image" width={610} height={400} />
              <Image
                src="/assets/circle.svg"
                alt="Image"
                width={100}
                height={100}
                className="absolute -top-[50px] -left-[50px]"
              />
              <Image
                src="/assets/rectangle.svg"
                alt="Image"
                width={100}
                height={100}
                className="absolute -bottom-[50px] -right-[50px]"
              />
            </div>
          </div>
        </div>
      )}
      {styleType === '2' && (
        <div className="flex max-md:flex-wrap-reverse">
          <div className="p-[50px]">
            <div className="relative">
              <Image src={image} alt="Image" width={610} height={400} />
              <Image
                src="/assets/circle.svg"
                alt="Image"
                width={100}
                height={100}
                className="absolute -top-[50px] -left-[50px]"
              />
              <Image
                src="/assets/rectangle.svg"
                alt="Image"
                width={100}
                height={100}
                className="absolute -bottom-[50px] -right-[50px]"
              />
            </div>
          </div>
          <div className="max-w-[700px] pt-[50px] max-md:mb-9 pl-4 max-md:pl-0">
            <h2 className="font-extrabold text-4xl mb-4 max-md:text-2xl text-colors-mainBlue900">
              {title}
            </h2>
            <p className="text-colors-mainGray400 mb-9">{text}</p>
            <Button href={link} styleType="1" maxWidth={200} redirect=''>
              Saber Mais
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default ServiceCard
