interface ServiceTitleProps {
  children: React.ReactNode
}

const Title: React.FC<ServiceTitleProps> = ({ children }) => {
  return (
    <span className="block w-fit mb-9 py-1 text-xs font-bold text-center rounded-full min-w-fit shadow px-4 text-slate900 bg-gradient-to-r from-slate50 to-slate400">
      {children}
    </span>
  )
}

export default Title
