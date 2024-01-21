import { Component } from "react";
import { MenuData } from "./MenuData";
import './css/navbar.css';
/*class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="logo"><i className="fa-solid fa-house"></i></h1>
                <ul className="nav-menu">
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a hreaf={item.url} className={item.cName}>
                                    <i className={item.icon}></i> {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                    
                </ul>
            </nav>
        )
    }
}*/

class Navbar extends Component {
    state = { 
        active: 'nav__menu',
     } 

    navToggle = () => {
        let newActive = 'nav__menu';
        if (this.state.active === 'nav__menu'){
            newActive+= ' nav__active';
        }
        this.setState({active: newActive});
    }
    render() { 
        return (
            <nav className='nav'>
                <a href='/' className='nav__logo'><h1 className="logo"><i className="fa-solid fa-house"></i></h1></a>
                <ul className={this.state.active}>
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a hreaf={item.url} className={item.cName}>
                                    <i className={item.icon}></i> {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div onClick = {() => this.navToggle()} className="nav__toggler">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;