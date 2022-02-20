
import './First.css';
import Map from './Map';
import nineteen from '../images/19.png';
import twenty from '../images/20.png';
import twentyone from '../images/21.png';
import twentytwo from '../images/22.png';
import twentythree from '../images/23.png';
import twentyfour from '../images/24.png';
import Ticket from './Ticket';


function First() {
    return (
      <div>
        <div className={"t"}>
            <div>
                <div className={"title"}>
                    EVERY SECOND                       
                </div>
            </div>
            
        </div>          
        <div className={"nav"}>
                <div className={"log" ,"item"}>
                    <a href="#">
                        log_
                    </a>
                </div>
                <div className={"bucket", "item"}>
                    <a>
                        bucket_list
                    </a>
                </div>
        </div>    
        {/* <div>
            <Map/>
        </div> */}
        <div className={"age_log"}>
            <img src={nineteen} className={"logs"} width ={"80px"} alt="logs"/>
            <img src={twenty} className={"logs"} width ={"80px"} alt="logs"/>
            <img src={twentyone} className={"logs"} width ={"80px"} alt="logs"/>
            <img src={twentytwo} className={"logs"} width ={"80px"} alt="logs"/>
            <img src={twentythree} className={"logs"} width ={"80px"} alt="logs"/>
            <img src={twentyfour} className={"logs"} width ={"80px"} alt="logs"/>
        </div>

        <div className={"out"}>
            <div className={"in"}>

            </div>
        </div>

        <div>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </div>
      </div>
    );
  };
  
  export default First;
  