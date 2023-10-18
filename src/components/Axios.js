import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './weather_logo.png'
import nightlogo from './nightlogo.png'
import './WeatherDetail.css'
import Spinner from './Spinner'

function Axios() {


    const [oldlocation, newlocation] = useState(null);
    const [search, setSearch] = useState("");  

    const [loaded, setLoaded] = useState(false);


    const myFunction =  () =>{
         newlocation(search)       
    }

    // const [newName,setName] = useState({}); 
    
    const [userData, setUserData]= useState({});
    const [temp, setTemp] = useState({})
    const [error, setError] = useState(null)

    // useEffect( ()=>{
    //     setLoaded(true);
    //     // axios.get("http://api.weatherapi.com/v1/current.json?key=6cf19f657504473498e71245231210&q=surat")
    //     axios.get(`https://api.weatherapi.com/v1/current.json?key=6cf19f657504473498e71245231210&q=${oldlocation}`)
    //     .then( (response)=>{
    //         console.log(response)
            
    //         // setUserData({...response.data.location})
    //         setUserData({...response.data.current.condition})
    //         setTemp({...response.data.current})
    //         //  setName({...response.data.location})

    //         setLoaded(false);
            
    //     } )
    //     .catch((error) => {
        
    //         error = alert("You entered wrong city");
            
    //         console.error('Error fetching data:', error);
    //         setLoaded(false);
    //     });

        
    // },[oldlocation, search])

   

    useEffect(() => {
        setLoaded(true); 
    
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6cf19f657504473498e71245231210&q=${oldlocation}`)
            .then((response) => {
                console.log(response);
                            setUserData({...response.data.current.condition})
                            setTemp({...response.data.current})
                
                            setLoaded(false);
                            
                        setError(null)
                


            })
            .catch((olderror) => {
                setLoaded(true);

                // error = alert('Enter proper city');
                setError( olderror ='Enter proper city')

                setLoaded(false);
  
            });
    
       
        return () => {


            // Code to run when the component unmounts or when oldlocation/search changes
        };
    }, [oldlocation, search]);


  return (
    
    <div>
        {/* <h4>city = {newName.name}</h4> */}
        {/* <div className='row'>
            <div className='col-6'>
                <h4>{new Date().toLocaleTimeString()}</h4>
                <h4>Temp c :- {temp.is_day}</h4>
                <img src={temp.is_day===1?logo:nightlogo} alt='weather logo' width={"150px"}></img>
                <img src={userData.icon} alt='weather logo' width={"150px"}></img>
                <h4>Temp c :- {temp.temp_c}°</h4>
                <h4>RealFeel® :- {temp.feelslike_c}°</h4>
                <h4>{userData.text}</h4>
            </div>
            <div className='col-6'>
                <h4>RealFeel Shade™ :- {temp.feelslike_c}°</h4>
                <h4>Wind :- {temp.wind_kph} km/h</h4>
                <h4>wind gusts :- {temp.gust_kph} km/h</h4>
            </div>
        </div> */}
        
        <div className='container mt-3'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">  
                    <a className="nav-link location-font-size" href="/" > {oldlocation}  </a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <div className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="myText" value={search} onChange={(e) =>setSearch(e.target.value)}/>
                    <button className="btn btn-outline-success my-2 my-sm-0 btn_search" type="submit"  onClick={myFunction}>Search</button>
                    </div>
                </ul>
                </div>
            </nav>

        <h4 className='text-danger bg-light text-center py-3'>{error}</h4>
    

        {/* <h4>city = {oldlocation}</h4> */}

        {loaded && <Spinner/>}
            <div className='row mt-3'>
                <div className='col-8 bg-white'>
                    <div className='row pt-3'>
                        <div className='col-6'>
                            <div>
                                <p className='text-uppercase'>current weather</p>
                    
                                <p className='text-muted font-weight-bold'>{new Date().toLocaleTimeString()}</p>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-5'>
                                    <img src={temp.is_day===1?logo:nightlogo} alt='weather logo' width={"150px"}/>
                                </div>
                                <div className='col-5'>
                                    <p className='degree-font-size mb-2'>{temp.temp_c}°</p>
                                    <h5 className='text-dark '>RealFeel®{temp.feelslike_c}°</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-6'>
                            
                            <div className='row justify-content-between pb-2 text-border-bottom default-font-size'>
                                <div className='col-6 '>RealFeel Shade™</div>
                                <div className='col-6 text-right'>{temp.feelslike_c}°</div>
                            </div>

                            <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                                <div className='col-6 '>Air Quality</div>
                                <div className='col-6 text-right'>Unhealthy</div>
                            </div>

                            <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                                <div className='col-6 '>Wind</div>
                                <div className='col-6 text-right font-weight-bold'> {temp.wind_kph} km/h</div>
                            </div>
                            
                            <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                                <div className='col-6 '>Wind Gusts</div>
                                <div className='col-6 text-right font-weight-bold'>{temp.gust_kph} km/h</div>
                            </div>
                        </div>
                    </div>

                    <div className='row pb-3'>
                        <div className='col-6'>
                            <h5 className='font-weight-normal'>{userData.text}</h5>
                        </div>
                        <div className='col-6 text-right text-uppercase'>
                            <h5>more details <i className="fa fa-arrow-right" aria-hidden="true"></i></h5> 
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}
export default Axios

