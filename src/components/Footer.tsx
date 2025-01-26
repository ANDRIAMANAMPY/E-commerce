import { Container, Facebook, Twitter, Youtube } from "lucide-react"


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10">
  <aside> 
  <Container className='w-10 h-10'/>
    <p className="font-bold">
            H
            <span className='text-accent'>ajatiana</span>
      <br />
    </p>
    <p>Copyright © {new Date().getFullYear()} - ANDRIAMANAMPY Hajatiana</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
