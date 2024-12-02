export  const Navigation = ()=>{
    return(
        <nav>
            <div className="logo">
                <img src="images/brand_logo.png" alt="loading" /> 
            </div>
         <div className ="tabslink">
            <ul className="ulLinks">
                <li><a href ="#">Menu</a></li>
                <li><a href ="#">Location</a></li>
                <li><a href ="#">About</a></li>
                <li><a href ="#">Contact</a></li>
            </ul>
        </div> 
        <div>
            <button>LogIn</button>
        </div> 
        </nav>
    )
}