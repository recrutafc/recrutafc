import SocialLinks from './SocialLinks'

export default function Flyer() {
  return (
    <div className="sticky top-[86px] max-w-[330px] bg-gradient-to-br from-slate900 to-slate-900 h-fit max-xl:hidden p-9 rounded-lg shadow">
      <h2 className="text-slate50 font-thin text-4xl mb-4">
        Você está
        <br />
        <span className="font-bold italic text-slate500">pronto</span> para{' '}
        <br /> dar o
        <span className="font-bold italic text-slate500"> próximo passo</span>{' '}
        na sua carreira?
      </h2>
      <p className="text-gray-400 mb-9">
        Conecte-se a novas oportunidades e dê um impulso à sua carreira com as
        vagas que preparamos para você!
      </p>
      <div>
        <h3 className="text-xl text-slate50 font-bold uppercase mb-4">
          Siga Recruta F&C
        </h3>
        <SocialLinks />
      </div>
    </div>
  )
}
