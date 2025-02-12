import Testimonio from './components/Testimonio';
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dice nuestros alumnos sobre freeCodeCamp </h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
        />

        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png'
          cargo='Software Engineer'
          empresa=' ChatDesk'
          testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />

        <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          imagen='https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
        />

      </div>
    </div>
  )
}

export default App
