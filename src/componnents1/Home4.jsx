import home41 from "../assets/home41.jpg"
import home42 from "../assets/home42.jpg"




function Home4 (){

    return(
        <div className="container-fluid p-5 home4 mt-5">
            <div className="row">
<div className="col-md-12 mt-5 text-center">
<h1>Happy Client</h1>

</div>

            </div>
        <div
          id="slides-with-indicator"
          className="carousel carousel-dark slide pt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <div className="row justify-content-center mt-5">
           <div className="col-md-5 pb-5">
<div className="d-flex">
    <div>
<img className="img-fluid rounded-circle imggg" src={home41} alt="" />
</div>
<div className="ps-3">
<h1 className="fs-3">John Smith</h1>
<h5 className="fs-6">Customer Corp.</h5>
</div>

</div>
<div>
<p className="mt-5 text-secondary par ">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, ex nihil quasi doloremque repudiandae reprehenderit <br /> tempora repellendus magni officia debitis consequuntur beatae, ullam <br /> est ad excepturi nam reiciendis veritatis neque."</p>


</div>

           </div>
           <div className="col-md-5 pb-5">
<div className="d-flex">
    <div>
<img className="img-fluid rounded-circle imggg" src={home42} alt="" />
</div>
<div className="ps-3">
<h1 className="fs-3">John Smith</h1>
<h5 className="fs-6">Customer Corp.</h5>
</div>

</div>
<div>
<p className="mt-5 text-secondary par ">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, ex nihil quasi doloremque repudiandae reprehenderit <br /> tempora repellendus magni officia debitis consequuntur beatae, ullam <br /> est ad excepturi nam reiciendis veritatis neque."</p>


</div>

           </div>

              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="row justify-content-center mt-5">
              <div className="col-md-5 pb-5">
<div className="d-flex">
    <div>
<img className="img-fluid rounded-circle imggg" src={home42} alt="" />
</div>
<div className="ps-3">
<h1 className="fs-3">John Smith</h1>
<h5 className="fs-6">Customer Corp.</h5>
</div>

</div>
<div>
<p className="mt-5 text-secondary par ">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, ex nihil quasi doloremque repudiandae reprehenderit <br /> tempora repellendus magni officia debitis consequuntur beatae, ullam <br /> est ad excepturi nam reiciendis veritatis neque."</p>


</div>

           </div>
           <div className="col-md-5 pb-5">
<div className="d-flex">
    <div>
<img className="img-fluid rounded-circle imggg" src={home41} alt="" />
</div>
<div className="ps-3">
<h1 className="fs-3">John Smith</h1>
<h5 className="fs-6">Customer Corp.</h5>
</div>

</div>
<div>
<p className="mt-5 text-secondary par ">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam, ex nihil quasi doloremque repudiandae reprehenderit <br /> tempora repellendus magni officia debitis consequuntur beatae, ullam <br /> est ad excepturi nam reiciendis veritatis neque."</p>


</div>

           </div>


              </div>
            </div>
          </div>
          <div className="carousel-indicators mt-5">
            <button
              className="active mt-5"
              type="button"
              data-bs-target="#slides-with-indicator"
              data-bs-slide-to="0"
            //   style="
            //     width: 10px;
            //     height: 1px;
            //     border-radius: 50%;
            //     background: #96ae00;
            //   "
            ></button>
            <button
              className="active mt-5"
              type="button"
              data-bs-target="#slides-with-indicator"
              data-bs-slide-to="1"
            //   style="
            //     width: 10px;
            //     height: 1px;
            //     border-radius: 50%;
            //     background: #96ae00;
            //   "
            >

            </button>
          </div>
        </div>
      </div>
);
    
    }
    export default Home4;