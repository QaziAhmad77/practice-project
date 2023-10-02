import { headerLogo } from '../assets';
import Button from './Button';

const Header = () => {
  return (
    <nav className="w-[80%] mt-[56px] mx-auto">
      <div className="flex justify-between items-center">
        <img src={headerLogo} alt="" />
        <div className="min-w-[134px] h-[56px] font-bodyFont text-[16px] flex items-center gap-14 text-white font-400">
          <span className="">Home</span>
          <span>Services</span>
          <span>Portfolio</span>
          <span>Testimonials</span>
          <Button text="get in Touch" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
