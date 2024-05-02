import mededucaImg from '/public/assets/images/projects/home.png'
import ProjectItem from '../ProjectItem'
import { projectItem } from '../../@types'

const projectList = [
  {
    imgSrc: mededucaImg,
    title: "MedEduca",
    subTitle: "Next.Js",
    link: "/mededuca"
  },
]

const Projects = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-2 py-16" id="projects">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">projeto</p>
        <h2 className="py-4 capitalize">o que já fizemos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          { projectList.map(( item: projectItem, key: number ) => (
            <ProjectItem key={ key } imgSrc={ item.imgSrc } title={ item.title } link={ item.link } subTitle={ item.subTitle }/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
