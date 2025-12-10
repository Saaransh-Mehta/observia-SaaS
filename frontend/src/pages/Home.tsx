import { Button } from '@/components/ui/button'
import {NavigationMenuDemo} from '../components/Navbar'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Home = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto mt-6 navbar-container">
        <div className="navbar flex justify-between items-center p-4">
          <div className="logo outline-font text-2xl">
            Observia
          </div>
          <div className="navbar-component rounded-xl p-2">

            <NavigationMenuDemo/>
          </div>
          <div className="signinButton">
            <Button className='outline-font'>Sign in <span><ArrowRight/></span></Button>
          </div>
        </div> 
        <div className="hero-container flex justify-center items-center flex-col text-center mt-20 gap-6 px-4">
          <div className="hero-badge">
            <Badge variant={"default"} className='p-3 text-md'>Powered By AI <span className='ml-1 bg-red-500 h-2 w-2 rounded-full'></span></Badge>
          </div>
          <div className="hero-cta">
            <h1 className=' outline-font text-5xl md:text-7xl font-normal leading-tight'>The <span className='text-blue-600'>Telemetry</span> Layer for LLM Applications</h1>
            
            <h2 className='mt-4 outline-font font-normal text-xl'>Unified logs, traces, and cost analytics for every AI call — down to the prompt, model, and token</h2>
          <div className="cta-buttons mt-6 flex gap-4 justify-center">
            <Button size={"lg"} className='outline-font bg-green-600 hover:bg-green-700 rounded-xl'>Start Tracking <span><ArrowRight/></span></Button>
            <Button size={"lg"} className='outline-font rounded-xl'>View Live Demo</Button>
          </div>
          
          </div>
        </div>
        </div>
    </>
  )
}

export default Home
