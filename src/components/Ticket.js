import './Ticket.css';
import logo from '../images/logo.png';


function Ticket() {
    return(
        <div className={"ticket"}>
            <div className={"left"}>
                <div className="header">
                    <img src={logo} className={"logo"}width ={"37.5px"} height={"37.5px"} alt="logs"/>
                    <div className={"title"}>TDJ AIRLINE</div>
                </div>
                <hr/>

                <div className={"icons"}>
                    <div className={"item"}>
                        <div>
                            <div className={"what"}>Gate</div>
                            <div className={"info"}>19</div>
                        </div>
                    </div>
                    <div className={"item"}>
                        <div>
                            <div className={"what"}>Gate closes</div>
                            <div className={"info"}>11:30</div>
                        </div>
                    </div>
                    <div>blabla</div>
                </div> 
                <div className={"infos"}>
                        <div className={"item"}>
                            <div className={"what"}>Name of Passanger</div>
                            <div className={"info"}>JUNG EUN LEE</div>
                        </div>
                        <div className={"item"}>
                            <div className={"what"}>Deparature</div>
                            <div className={"info"}>SEOUL KOREA</div>
                        </div>
                        <div className={"item"}>
                            <div className={"what"}>Arrival</div>
                            <div className={"info"}>Nederland</div>
                        </div>
                </div>
            </div>

             
            <div className={"right"}>
                <div className="header">                    
                    <div className={"title"}>BOARDING PASS</div>
                </div>
                <hr/>
            </div>
        </div>
    );
}

  
export default Ticket;