import Link from 'next/link'

interface ButtonProps {
  href: string
  styleType?: '1' | '2' | '3' | '4'
  maxWidth?: number
  children: React.ReactNode
  redirect: '1' | ''
}

const Button: React.FC<ButtonProps> = ({
  href,
  styleType = '1',
  maxWidth,
  children,
  redirect,
}) => {
  const baseStyle = `flex justify-center items-center px-4 py-2 rounded-md font-bold min-h-[50px] w-full shadow-md`

  const styles = {
    1: `${baseStyle} bg-gradient-to-b from-colors-mainBlue900 to-colors-mainBlue900 text-colors-mainWhite delay-150 ease-in-out hover:to-colors-mainGray600`,
    2: `${baseStyle} bg-gradient-to-b from-colors-mainWhite to-colors-mainWhite text-colors-mainBlue900 hover:to-colors-mainGray600 delay-150 ease-in-out `,
    3: `${baseStyle} bg-gradient-to-b from-colors-mainGray600 to-colors-mainGray600 text-colors-mainWhite delay-150 ease-in-out hover:to-colors-mainWhite`,
    4: `${baseStyle} bg-gradient-to-b from-colors-mainWhite to-colors-mainGray200 hover:from-colors-mainWhite text-colors-mainBlue900 hover:bg-colors-mainGray600 delay-150 ease-in-out`,
  }

  return (
    <Link
      href={href}
      className={styles[styleType]}
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : 'auto' }}
      target={redirect === '1' ? '_blank' : ''}
    >
      {children}
    </Link>
  )
}

export default Button
