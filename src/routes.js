import Home from './pages/Home.jsx'
import Docs from './pages/Docs.jsx'
import About from './pages/About.jsx'
const routes = [
    {
        link: '/',
        halaman: Home,
        utama: true
    },
    {
        link: '/docs',
        halaman: Docs
    },
    {
        link: '/about',
        halaman: About
    },
]

export default routes;