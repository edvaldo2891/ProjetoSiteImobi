import { useParams } from "react-router-dom";

const ContatoIDDetails = () =>{
    const {id} = useParams();
    return(
        <div className="container" id="info-container">
             <div className="container" id="paginas">
                <h1>Exibindo mais informações do contato: {id}</h1>
            </div>
        </div>
    );
}
export default ContatoIDDetails;