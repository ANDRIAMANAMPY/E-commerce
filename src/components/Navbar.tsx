
import { Container } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex justify-center md:justify-between items-center p-2'>
      <a href="#" className='flex items-center font-bold text-3xl md:text-xl'>
        <Container className='mr-2'/>
            H
            <span className='text-accent'>ajatiana</span>
      </a>
      <ul
      className='hidden sm:flex space-x-4'>
        <li>
            <a href="#Home"
            className='btn btn-sm btn-ghost'>
                Accueil
            </a>
        </li>
        <li>
            <a href="#About"
            className='btn btn-sm btn-ghost'>
                A propos
            </a>
        </li>
        <li>
            <a href="#Experiences"
            className='btn btn-sm btn-ghost'>
                Mes expériences
            </a>
        </li>
        <li>
            <a href="#Projects"
            className='btn btn-sm btn-ghost'>
                Mes projets
            </a>
        </li>

      </ul>
    </div>
  )
}

export default Navbar
