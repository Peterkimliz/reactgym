
import Logo from '../../assets/logo.png'
import './header.css'
function HeaderNav(){
    return (

   <div className='header'>
            <img src={Logo } className="logo"/>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonies</li>
            </ul>
        </div>
    
    
    );
}
export default HeaderNav;