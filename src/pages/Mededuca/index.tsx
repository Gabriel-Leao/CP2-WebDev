import rickMortyImg from '/public/assets/images/projects/home.png'
import ProjectsPage from '../../components/ProjectsPage'

const Mededuca = () => {
  const technologies = ['React', 'tailwind', 'typescript', 'next-JS']
  const desc = "Este site foi criado utilizando a criatividade. Ao identificarmos o problema utilizamos da abordagem de brainstorming para criar soluções inovadoras que suprissem as necessidades. Soluções essas que possuiriam interfaces mais divertidas e intuitivas, que não só simplificariam a interação mas também cativariam o publico mais jovem. Queriamos algo que ultrapassasse as barreiras de comunicação atuais do HC, algo que educasse e confortasse os pacientes em momentos de tanta inerteza.E foi assim que surgiu a biblioteca virtual MedEduca, uma plataforma inovadora que vai além de simplesmente informar.<br /><br /> Esta biblioteca contém uma variedade de contos interativos que retratam de forma lúdica os procedimentos médicos, explicando tanto sua realização quanto sua importância de uma maneira acessível e divertida. Após tudo que ouvimos até aqui ficou claro que a missão da MedEduca assim como da RealTech é transformar a experiência dos pacientes, os tranquilizando com relação aos mais diversos exames. Visamos também promover o pensamento criativo e o aprendizado por meio das histórias. Tendo sempre como valores o compromisso com a educação e a humanização dos processos citados anteriormente. <br />"

  return (
    <ProjectsPage
      coverImg={rickMortyImg}
      title="MedEduca"
      desc={desc}
      technologies={technologies}
      linkDemo="https://challengei-icr-front.vercel.app/home"
      linkCode="https://github.com/Gabriel-Leao/challenge_icr_front"
    />
  )
}

export default Mededuca
