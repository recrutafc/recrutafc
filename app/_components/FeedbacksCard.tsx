import Image from 'next/image'

interface FeedbacksCardProps {
  image: string
  title: string
  feedback: string
  prof: string
}

const FeedbacksCard: React.FC<FeedbacksCardProps> = ({
  image,
  title,
  feedback,
  prof,
}) => {
  return (
    <div className="flex items-center justify-center p-4 rounded-lg cursor-grab">
      <div>
        <div className="text-gray-600 text-2xl max-w-[680px] text-center mb-9 relative">
          <Image
            src="/assets/asp1.svg"
            alt="Image"
            width={100}
            height={100}
            className="absolute -top-[50px] -left-[50px] -z-10"
          />
          <Image
            src="/assets/asp2.svg"
            alt="Image"
            width={100}
            height={100}
            className="absolute -bottom-[50px] -right-[50px] -z-10"
          />

          <p className="z-10 max-lg:text-base">{feedback}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={image}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full border-2 border-colors-mainWhite mb-4"
          />

          <h3 className="text-lg font-bold text-colors-mainBlue900">{title}</h3>
          <span className='text-center max-w-[500px]'>{prof}</span>
        </div>
      </div>
    </div>
  )
}

export default FeedbacksCard
