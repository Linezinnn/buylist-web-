import { Container } from './pages/Home/Container'

import imgCover from '../public/assets/cover.png'

function App() {
  return (
    <div className='bg-brand-base-600 w-screen h-screen flex flex-col items-center'>
      <img 
        className='min-w-full h-48 absolute select-none pointer-events-none'
        src={imgCover} 
        alt="Cover" 
      />
      <Container />
    </div>
  )
}

export default App
