import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { FiInstagram } from 'react-icons/fi';
import { logo } from '../assets';

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 px-4 pb-8">
      <div className="bg-[#0070C0] max-h-[502px] px-20 pb-20 pt-[200px] rounded-tl-[6px] rounded-tr-[6px] flex items-center justify-center">
        <div className="w-[80%]  flex justify-between text-white font-bodyFont">
          <div>
            <img className="" src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-600 text-[20px] tracking-wide">Site Map</span>
            <div className="flex gap-10 font-400 text-[16px]">
              <ul className="flex flex-col">
                <li className="cursor-pointer">hom</li>
                <li className="cursor-pointer">services</li>
                <li className="cursor-pointer">portfolio</li>
              </ul>
              <ul className="flex flex-col">
                <li className="cursor-pointer">testimonials</li>
                <li className="cursor-pointer">contact us</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-600 text-[20px] tracking-wide">
              Head Office
            </span>
            <ul className="flex flex-col">
              <li className="cursor-pointer">Office # 09,2nd Floor Ali</li>
              <li className="cursor-pointer">Tower,Main University Road</li>
              <li className="cursor-pointer">Peshawar</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-600 text-[20px] tracking-wide">
              Social Links
            </span>
            <ul>
              <li className="flex items-center gap-2 cursor-pointer">
                <span className="text-2xl">
                  <CiFacebook />
                </span>{' '}
                Face Book
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <span className="text-2xl bg-[#0070C0]">
                  <CiTwitter />
                </span>{' '}
                Twitter
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <span className="text-2xl">
                  <FiInstagram />
                </span>
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
