

import about6 from "../assets/about2.jpg"
import about7 from "../assets/dotted.jpg"



function About3 (){

    return(
        <div className="container p-5 mt-5">
       <div className="row justify-content-center mt-5">
       <div className="col-md-5 me-5 mt-4">
     <div className="bg"><img src={about7} alt="" /> </div>
            <img className="img-fluid pb-3" src={about6} alt="" />
           

        </div>



<div className="col-md-4 ms-5">
<h1 className="fw-bold fs-1 ">Company History</h1>
<p className=" text-secondary par mt-4">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Animi, quos, adipisci aliquid <br /> similique saepe ipsa minus maxime alias libero <br /> nam quis officia eum impedit. At quisquam <br /> reprehenderit cum hic enim?</p>
<p className=" text-secondary par mt-3">Necessitatibus eligendi molestias similique <br /> tempore, optio nobis numquam temporibus <br /> debitis cum aspernatur, eius, nihil soluta sapiente <br /> enim.</p>
</div>

        

</div>

       </div>
    
);
    
    }
    export default About3;