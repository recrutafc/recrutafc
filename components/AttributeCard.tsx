interface AttributeCardProps {
  icon: React.ReactNode
  title: string
  text: string
}

const AttributeCard: React.FC<AttributeCardProps> = ({ icon, title, text }) => {
  return (
    <div className="flex items-start text-slate900 p-4 rounded-lg cursor-default shadow bg-gradient-to-t from-slate50 to-slate400">
      <div>
        <div className="flex mb-1">
          {icon}
          <h3 className="text-lg font-bold ml-2">{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default AttributeCard
