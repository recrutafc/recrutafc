interface ServiceTitleProps {
  children: React.ReactNode
}

const ServiceTitle: React.FC<ServiceTitleProps> = ({ children }) => {
  return (
    <span className="block mb-9 py-1 text-xs font-bold text-center rounded-full min-w-[120px] shadow-md text-colors-mainBlue900 bg-gradient-to-r from-colors-mainWhite to-colors-mainGray200">
      {children}
    </span>
  )
}

export default ServiceTitle
