import carouselImage1 from "../img/debit-card.jpg";
import cyberBullyingImage from '../img/bullying.jpg';
import phishingImage from '../img/phishing.jpg';


class Homepage extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <div id="homepage">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="${carouselImage1}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${carouselImage1}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="${carouselImage1}" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            <section style="max-width: 900px; margin: auto; padding: 20px; background-color: #ffffff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 20px; border-left: 5px solid #7f00ff;">
  <h4 style="color: #333;">🔍 About the Platform</h4>
  <p style="font-size: 16px; line-height: 1.6;">
    This platform is designed to simplify and enhance communication between citizens and law enforcement.
    It provides a secure and easy way to file complaints, track case statuses, and receive updates without needing to visit a police station.
    The system ensures transparency, faster responses, and builds public trust by offering real-time complaint handling and digital record management.
  </p>
  <p style="font-size: 16px; line-height: 1.6;">
    With categorized complaint tracking, encrypted data handling, and potential future integrations like chatbot-based reporting and blockchain-based logs,
    the platform aims to bring efficiency and accountability to crime reporting processes.
  </p>
</section>
                    <div  style="padding-bottom: 30px; padding-top: 20px;">
                        <a  href="#" type="button" class="btn btn-primary btn-lg">Learn More</a>
                        <a   href="RegisterComplaint" type="button" class="btn btn-primary btn-lg">Register Complaint</a>
                        <a   href="RegisterComplaintAnonymously" type="button" class="btn btn-primary btn-lg">Register Complaint Anonymously</a>
                    </div>
                </div>
            </div>


            <h3 style="text-align: center; margin-top: 80px;">Related Articles</h3>
            <section id="Articles">
                    <div class="card-deck">
                        <div class="card">
                            <img src="${carouselImage1}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Debit/Credit card Scams</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<a href="#" > Read More...</a></p>
                                <p class="card-text"><small class="text-muted">Posted on 15 July 2020</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${cyberBullyingImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Cyber Bullying</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.<a href="#" > Read More...</a></p>
                                <p class="card-text"><small class="text-muted">Posted on 6 July 2020</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="${phishingImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Phishing</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.<a href="#"> Read More...</a></p>
                                
                                <p class="card-text"><small class="text-muted">Posted on 25 June 2020</small></p>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    `;
    }
    connectedCallback(){
        
    }
}
export default Homepage;
