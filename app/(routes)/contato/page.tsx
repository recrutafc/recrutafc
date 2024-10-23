import Form from "@/app/_components/Form";
import SocialLinks from "@/app/_components/SocialLinks";
import Image from "next/image";

export const metadata = {
  title: 'Contato | Recruta F&C',
  description: 'Entre em contato com a Recruta F&C. Preencha o formulário e nossa equipe cuidará do restante.',
  icons: '/favicon.webp',
};

export default function Contato () {
  return (
    <main className="px-4">
      <div id="form" className="max-w-[1400px] mx-auto bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat py-[76px] ">
        <div className="mb-4">
          <div className="flex justify-between max-lg:flex-col">
            <h3 className="text-4xl font-extrabold max-lg:text-3xl max-w-[500px] text-colors-mainBlue900">
              Entre em <br/> contato com a <br/>Recruta F&C           
              <span className="flex flex-col items-start bg-gradient-to-r from-colors-mainBlue900 to-colors-mainGray600 w-fit p-1 rounded-lg mt-4 ">
                <SocialLinks />
              </span>
            </h3>
            <p className="max-w-[693px] max-lg:min-w-full mt-4 text-xl text-colors-mainGray400 max-lg:text-base">
              <span className="block mb-9 min-h-[5px] min-w-full bg-gradient-to-l from-colors-mainBlue900 to-colors-mainGray600"></span>
              É rápido e fácil, basta <strong className="text-colors-mainBlue900">preencher o formulário</strong> logo abaixo e nós cuidamos do restante
            </p>
          </div>
        </div>

        <div className="flex gap-9 max-lg:flex-col-reverse justify-between">
          <span className="max-w-[700px] max-lg:min-w-full">
            <Image
              src="/images/3.webp"
              alt="Image"
              className="w-full rounded-lg"
              width={700}
              height={400}
            />
          </span>

          <div className="w-full max-w-[693px] max-lg:min-w-full">
            <Form template={{ templateId: 'template_luw2wsd' }} />
          </div>
        </div>
      </div>
    </main>
  )
}