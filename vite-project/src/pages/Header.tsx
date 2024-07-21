import {
    BsFillBellFill,
    BsFillEnvelopeFill,
    BsPersonCircle,
    BsSearch,
    BsJustify
  } from 'react-icons/bs';
  import { useNavigate } from 'react-router-dom';
  
  interface HeaderProps {
    OpenSidebar: () => void;
  }
  
  function Header({ OpenSidebar }: HeaderProps) {
    const navigate = useNavigate();
  
      const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          // Clearing the local storage
          localStorage.removeItem('token');
  
         
          navigate("/");
      };
    return (
      <header className='header'>
        <div className='menu-icon'>
          <BsJustify className='icon' onClick={OpenSidebar} />
        </div>
        <div className='header-left'>
          <BsSearch className='icon' />
        </div>
        <div className='header-right'>
          <BsFillBellFill className='icon' />
          <BsFillEnvelopeFill className='icon' />
          <BsPersonCircle className='icon' />
          <button onClick={handleLogout} style={{color:'white',backgroundColor:'grey',width:'100px',height:'15px'}}>Logout</button>
        </div>
        
      </header>
    );
  }
  
  export default Header;
  