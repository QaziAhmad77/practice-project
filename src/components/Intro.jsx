import { group } from '../assets';
import Button from './Button';
import Header from './Header';

const Intro = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="bg-[#0070C0] overflow-x-hidden clipPat w-full h-full">
        <Header />
        <div className="max-h-[462px] max-w-[554px] text-white font-bodyFont ml-[150px] mt-[100px]">
          <h1 className="text-[57px] leading-[57px] uppercase flex flex-col gap-4 font-700">
            Apptex software <span>solution</span>
          </h1>
          <h3 className="text-[45px] leading-[69px] capitalize font-700">
            you idea is our passion
          </h3>
          <p className="text-[18px] leading-6 font-400">
            we are driven by one thing the excitement on our clients face. when
            they see their vision brought to life.
          </p>
          <div className="mt-10">
            <Button text="Get in Touch" />
          </div>
        </div>
      </div>
      <div className="absolute top-[20%] right-0 flex justify-end">
        <img className="w-[48%]" src={group} alt="" />
      </div>
    </div>
  );
};

export default Intro;
