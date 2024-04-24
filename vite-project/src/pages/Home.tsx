import './home.css'
export default function Home() {
    return (
        <>
            <div className="container-fluid">

                <div className="sect-1" style={{ width: '100%', height: '550px', backgroundColor: '#DFAFDB', marginTop: '2%' }}>


                    <div className="row">
                        <div className="col-6">
                            <img src="Images/pic1.jpg" alt="Self care" style={{ height: '550px', width: '100%' }} />
                        </div>
                        <div className="col-6">
                            <h1 >ORGANIZATION NAME</h1>

                            <h1
                                style={{ color: '#FD6D2F', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', marginTop: '5%', fontSize: '80px' }}>

                                All about your beauty</h1>
                            <a href="/myaccount">
                                <button className="button-34" role="button">Available here</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="sect-2" style={{ marginTop: '2%' }}>
                    <div className="row">
                        <div className="col-6" style={{ backgroundColor: ' #FFD18C', height: '820px', width: '50%' }}></div>

                        <div className="col-6" style={{ backgroundColor: '#FD6D2F' }}>
                            <div className="card mb-3" style={{ maxWidth: '750px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="Images/lipsticks 2.jpg" className="img-fluid rounded-start"
                                            alt="..." />
                                    </div>
                                    <div className="col-md-8" style={{ backgroundColor: '#FD6D2F' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3" style={{ maxWidth: '750px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="Images/lipgloss 2.jpg" className="img-fluid rounded-start"
                                            alt="..." />
                                    </div>
                                    <div className="col-md-8" style={{ backgroundColor: '#FD6D2F' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-3" style={{ maxWidth: '750px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="Images/blush 2.jpg" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a
                                                natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sect-3">
                    <div className="upper-part" style={{ backgroundColor: ' #DFAFDB', width: '100%', height: '250px', marginTop: '3%' }}>

                    </div>
                    <div className="image-container">
                        <img src="Images/foundation pic.jpg" alt="Image 1" />
                        <img src="Images/makeup brush.jpg" alt="Image 2" />
                        <img src="Images/foundation pic.jpg" alt="Image 3" />
                    </div>
                </div>
            </div>

            <div className="sect-3"
                style={{ width: '100%', height: '550px', backgroundColor: '#DFAFDB', marginTop: '3%', borderTopRightRadius: '5%' }}>


                <div className="row">
                    <div className="col-6">
                        <img src="Images/laptop lady.jpg" alt="Self care" style={{ height: '550px', width: '100%' }} />

                    </div>
                    <div className="col-6">
                        <h1 style={{ color: '#FD6D2F', fontFamily: ':Pacifico', textAlign: 'center', marginTop: '5%', fontSize: '80px' }}>
                            In-store <br></br>Service</h1>
                        <p style={{ color: 'white', textAlign: 'center', fontSize: 'x-large', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            consult with a skin care expert</p>
                        <button className="button-34" role="button">Book now</button>
                        <p style={{ color: 'white', textAlign: 'center', fontSize: 'x-large', fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '5%' }}>
                            Book a professional makeup artist</p>
                        <button className="button-34" role="button">Book now</button>
                    </div>
                </div>

            </div>

            <div className="sect-4" style={{width:'100%',height:'550px',backgroundColor:'#FFD18C',marginTop:'3%',borderTopRightRadius:'5%'}}>

                <div className="row">

                    <div className="col-6">
                        <h1 style={{color:'#FD6D2F',fontFamily:'Dancing Script',textAlign:'center',marginTop:'5%',fontSize:'80px'}}>
                            Stay updated </h1>
                        <button className="signup" role="button">Sign up for our <br></br>monthly news letters</button>
                        <div className="contacts">
                            <div className="email-container">
                                <span className="label">Email:</span>
                                <div>mail@mail.com</div>
                            </div>
                            <div className="email-container">
                                <span className="label">Socials :</span>
                                <div>@reallygreatsite</div>
                            </div>
                            <div className="email-container">
                                <span className="label">Main <br></br>branch</span>
                                <div> 123 Anywhere. st.,anycity ST 1234</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="Images/wine glasses.jpg" alt="Self care" style={{height:'550px',width:'100%'}}/>

                    </div>
                </div>

            </div>

            <div className="sect-5">
                
                <footer className="text-center text-white" style={{backgroundColor:'#DFAFDB',marginTop:'3%'}}>
                   
                    <div className="container p-4 pb-0">
                        
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <a href="register.html">
                                    <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
                                        Sign up!
                                    </button>
                            </a>
                            </p>
                        </section>
                       
                    </div>

                    <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                        © 2024 Copyright:
                        <a className="text-white" href="#">beauty stop.com</a>
                    </div>
               
                </footer>
            </div>


        </>
    )
};


