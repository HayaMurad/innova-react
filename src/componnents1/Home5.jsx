import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import about3 from "../assets/dotted.jpg"




function Home5 (){

    return(
        <div className="container p-5 mt-5">
       <div className="row justify-content-center">
        <div className="col-md-5">
        <div className="bg"><img src={about3} alt="" /> </div>
            <img className="img-fluid pb-3" src={about1} alt="" />
           

        </div>
        
<div className="col-md-5 ps-4">
<div className="row">
    <div className="col-md-12">
        <img className="img-fluid" src={about2} alt="" />
    </div>
    <div className="col-md-12">
<div className="mt-5">
<h5>About US</h5>
<h2 className="mt-2">Creative We Grow</h2>
<p className="mt-4 text-secondary par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem temporibus blanditiis accusamus perferendis libero accusantium nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur.</p>
<p className="mt-4 text-secondary par ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus.</p>
<button class="border-3 btn border-dark  btn-lg px-4 py-2 mt-2">
              LEARN MORE
            </button>
</div>

    </div>
</div>


</div>


       </div>
      </div>
);
    
    }
    export default Home5;