import Image from 'next/image'

interface EquipeCardProps {
  image: string
  name: string
  feedback: string
  prof: string
  descProf: string
}

const EquipeCard: React.FC<EquipeCardProps> = ({
  image,
  name,
  feedback,
  prof,
  descProf
}) => {
  return (
    <div className="flex items-center justify-center p-4 rounded-lg cursor-grab">
      <div>
        <div className="text-gray-600 text-2xl max-w-[800px] text-center mb-9 relative">
          <Image
            src="/assets/asp1.svg"
            alt="Image"
            width={100}
            height={100}
            className="absolute -top-[50px] -left-[50px] -z-10 max-md:hidden"
          />
          <Image
            src="/assets/asp2.svg"
            alt="Image"
            width={100}
            height={100}
            className="absolute -bottom-[50px] -right-[50px] -z-10 max-md:hidden"
          />

          <p className="z-10 max-lg:text-base">{feedback}</p>
        </div>
        <div className="flex justify-center items-center  bg-gradient-to-r from-colors-mainGray600 to-colors-mainGray200 p-2 rounded-md shadow-md gap-4 max-md:flex-col">
          <div className='flex flex-col items-center justify-center w-full'>
            <Image
              src={image}
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full border-2 border-colors-mainWhite mb-4"
            />
            <h3 className="text-lg font-bold text-colors-mainBlue900 flex">{name}</h3>
            <span className='text-center max-w-[260px]'>{prof}</span>
          </div>

          <span className='max-w-[500px] min-h-[216px] flex items-center justify-center bg-gradient-to-t from-colors-mainGray200 to-colors-mainWhite  p-4 rounded-md max-md:min-w-full'>
            {descProf}
          </span>

        </div>
      </div>
    </div>
  )
}

export default EquipeCard
