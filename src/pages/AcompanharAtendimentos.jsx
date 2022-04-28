import { useParams } from "react-router-dom"
import styles from "./AcompanharAtendimentos.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ShowScheduling from "./scheduling/ShowScheduling.jsx"


function AcompanharAtendimentos() {
    const { id } = useParams();
    return(
        <>
           

            <div className={styles.container}>
                <h1>Atendimentos</h1>
            </div>
            <ShowScheduling userId={id}/>
           

            
        </>
    )
}

export default AcompanharAtendimentos