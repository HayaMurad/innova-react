import about21 from "../assets/person1.jpg"
import about22 from "../assets/person2.jpg"

function About2 (){

    return(
        <div className="container p-5 mt-5">
       <div className="row justify-content-center mt-5">
<div className="col-md-4">
<div class="zoom">
 <img className="img-fluid img" src={about21} alt="" />
                     
</div>
<h1 className="mt-4 fs-5 fw-bold text-center">Mellisa Howard</h1>
<p className="text-secondary par mt-3 text-center">Lorem ipsum dolor sit amet<br /> consectetur  adipisicing elit.<br /> Quibusdam mhyt repudiandae <br /> amet.</p>


</div>
<div className="col-md-4">
<div class="zoom">
 <img className="img-fluid img" src={about22} alt="" />
                     
</div>




<h1 className="mt-4 fs-5 fw-bold text-center">Mike Richardson</h1>
<p className="text-secondary par mt-3 text-center">Lorem ipsum dolor sit amet<br /> consectetur  adipisicing elit.<br /> Quibusdam mhyt repudiandae <br /> amet.</p>


</div>    
<div className="col-md-4">
<div class="zoom">
 <img className="img-fluid img" src={about21} alt="" />
                     
</div>
<h1 className="mt-4 fs-5 fw-bold text-center">Mellisa Howard</h1>
<p className="text-secondary par mt-3 text-center">Lorem ipsum dolor sit amet<br /> consectetur  adipisicing elit.<br /> Quibusdam mhyt repudiandae <br /> amet.</p>


</div>
</div>

       </div>
    
);
    
    }
    export default About2;