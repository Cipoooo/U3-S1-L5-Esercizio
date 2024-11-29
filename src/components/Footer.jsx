
const Footer = () =>{
    return(
        <>
    <footer className="container-fluid mt-5">
      <div style={{width: "60%"}} className="container bg-black ">
         <div className="container bg-black container-lg d-flex justify-content-start">
          <i style={{fontSize :"1.2rem"}} className="text-secondary bi bi-facebook"></i>
          <i style={{fontSize :"1.2rem"}} className="text-secondary ms-3 bi bi-instagram"></i>
          <i style={{fontSize :"1.2rem"}} className="text-secondary ms-3 bi bi-twitter"></i>
          <i style={{fontSize :"1.2rem"}} className="text-secondary ms-3 mb-2 bi bi-youtube"></i>
         </div>
         <div className="container container-lg">
          <div className="row gy-2 gy-4">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Audio and subtitles</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Audio and subtitles</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Audio description</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Help Center</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Gift Cards</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Media Center</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Investor Relations</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Jobs</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Terms of use</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Privacy</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Legal Notices</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Cookie Preferences</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Corporate Information</a>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
              <a href="" className="text-secondary text-decoration-none">Contact us</a>
            </div>
          </div>
         </div>
         <div className="container-lg">
          <button className="btn btn-outline-secondary rounded-0 mt-3" style={{fontSize: "0.8rem"}}>Service code</button>
         </div>
         <div className="container-lg d-flex pt-3">
          <i style={{fontSize: "0.5rem"}} className="bi bi-c-circle pb-0 pe-1"></i>
          <p style={{fontSize: "0.5rem", color: "rgba(211, 211, 211, 0.475)"}} >19997-2019 Netflix,inc.</p>
         </div>
      </div>
    </footer>
        </>
    );
};
export default Footer;