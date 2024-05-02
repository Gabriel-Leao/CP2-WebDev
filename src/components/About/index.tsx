import Image from "next/image"
import Link from "next/link"
import aboutImg from "/public/assets/images/about.jpg"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 py-16" id="about">
      <div className="container m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-justify">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">sobre</p>

          <h2 className="py-4 capitalize">quem somos nós</h2>

          <p className="py-2 text-gray-600">Não somos uma equipe comum</p>

          <p className="py-2 text-gray-600">
          Somos a Real Tech, uma empresa composta por cinco profissionais com um objetivo em comum, desenvolver soluções criativas para problemas reais.
          </p>

          <p className="py-2 text-gray-600">
          A equipe se uniu ainda quando estavam na faculdade. À partir de uma amizade, surgiu a ideia de fundar a empresa.

          Durante a nossa jornada como grupo nos deparamos diversas vezes com desafios que pareciam impossíveis, mas sempre superados fazendo uso da inovação e tecnologia.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Conheça nossos projetos.</p>
          </Link>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutImg} alt="/" priority={false} />
        </div>
      </div>
    </div>
  )
}

export default About
