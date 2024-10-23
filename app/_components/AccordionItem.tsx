import { MinusCircle, XCircle } from '@phosphor-icons/react/dist/ssr'
import { Collapse } from 'react-collapse'

interface AccordionItemProps {
  open: boolean
  toggle: () => void
  title: string
  description: string
  id: number
}

export default function AccordionItem({
  open,
  toggle,
  title,
  description,
  id
}: AccordionItemProps) {
  return (
    <div className="flex flex-col cursor-pointer justify-between hover:brightness-110 delay-150 ease-in-out rounded-lg bg-gradient-to-b hover:shadow-md from-colors-mainWhite to-colors-mainGray200 shadow-md">
      <div onClick={toggle} className="flex items-center justify-between p-4">
        <h2 className={`${open ? 'bg-gradient-to-l from-colors-mainBlue900 to-colors-mainGray600 bg-clip-text text-transparent' : 'text-colors-mainBlue900'} font-bold flex items-center`}><span className='flex shadow-md items-center justify-center mr-4 w-9 h-9 text-colors-mainWhite bg-gradient-to-r from-colors-mainBlue900 to-colors-mainGray600 rounded-full p-1'>{id}</span> {title}</h2>
        <div>{open ? <XCircle size={20} /> : <MinusCircle size={20} />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className="py-2">
          <p className='px-4 pb-4'>{description}</p>
        </div>
      </Collapse>
    </div>
  )
}
