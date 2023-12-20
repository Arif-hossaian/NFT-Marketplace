import clsx from 'clsx';
import ImgOne from '../assests/img/unsplash_E8Ufcyxz514.png';
import ImgTwo from '../assests/img/unsplash_tZCrFpSNiIQ.png';
import ImgThree from '../assests/img/unsplash_pVoEPpLw818 (1).png';
import { Card } from '../shared/Card/Card';

const FloatingItems = ({ className, Icon, title, subtitle }) => {
  return (
    <span className="mx-auto flex h-20 max-w-screen-sm items-center justify-center rounded-full md:mx-0">
      {Icon}
    </span>
  );
};

const SignUpNft = () => {
  return (
    <section id="about" className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-0 xl:-right-20">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 max-h-full w-96 max-w-full -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <FloatingItems Icon={<img src={ImgOne} width={260} />} />
          <FloatingItems
            Icon={
              <img
                src={ImgThree}
                style={{ marginTop: 200, marginRight: 50 }}
                width={200}
              />
            }
          />
          <FloatingItems
            Icon={
              <img
                src={ImgTwo}
                style={{ marginTop: 150, marginLeft: 80 }}
                width={180}
              />
            }
          />
        </div>
        <div className=" ml-28">
          <h2 className="text-3xl text-gray-900 font-bold">CREATE AND</h2>
          <h2 className="text-3xl text-gray-900 font-bold">SELL YOUR NFT</h2>

          <p className="mt-6 break-words text-lg">
            {` The project is aimed at developing a web-based instant helping system for Any people. The Law Point which capable of sorting constitutional law resources with emergency contact and get in touch with relevant lawyers. It is easy to track any info and can display appropriate information to the user. The user-friendly interface of the system. Anyone can use this application from anywhere with several browsers and all devices friendly`}
          </p>
          <button className="border border-gray-900 p-2">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
};

export default SignUpNft;
