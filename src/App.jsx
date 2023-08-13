// import './assets/scss/_header.scss'
// import './assets/scss/main.scss'
// import './assets/scss/style.scss'


import { Routes, Route } from 'react-router-dom'
import Default from './layouts/default'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import SingleService from './pages/SingleService'
import FaqPage from './pages/FaqPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/single-service" element={<SingleService />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
