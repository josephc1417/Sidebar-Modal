import { useGlobalContext } from "./context"
import { FaBars } from "react-icons/fa"


const Home = () => {
    const {openSidebar, openModal} = useGlobalContext()  
    console.log(openModal)    
    return (
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button onClick={openModal} className="btn modal-btn">
                Show Modal
            </button>
        </main>
    )
} 

export default Home