interface AttributeCardProps {
  icon: React.ReactNode
  title: string
  text: string
}

const AttributeCard: React.FC<AttributeCardProps> = ({ icon, title, text }) => {
  return (
    <div className="flex items-start p-4 rounded-lg cursor-default bg-gradient-to-b shadow-md from-colors-mainWhite to-colors-mainGray200">
      <div>
        <div className="flex mb-1">
          {icon}
          <h3 className="text-lg font-bold ml-2 text-colors-mainBlue900">
            {title}
          </h3>
        </div>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

export default AttributeCard
