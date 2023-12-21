import clsx from "clsx";
import ImgOne from "../assests/img/unsplash_E8Ufcyxz514.png";
import ImgTwo from "../assests/img/unsplash_tZCrFpSNiIQ.png";
import ImgThree from "../assests/img/unsplash_pVoEPpLw818 (1).png";
import { Card } from "../shared/Card/Card";

const FloatingItems = ({ className, Icon, title, subtitle }) => {
  return (
    <span className="mx-auto flex h-20  max-w-screen-sm items-center justify-center rounded-full md:mx-0">
      {Icon}
    </span>
  );
};

const SignUpNft = () => {
  return (
    <section className="container mt-48 mb-48">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 md:gap-8 lg:mt-0 xl:-right-20">
          <span className="absolute inset-y-2/4 right-0 -z-10 h-96 max-h-full w-96 max-w-full -translate-y-1/2 rounded-full bg-gradient-radial from-indigo-500/40 via-fuchsia-400/10 blur-2xl" />
          <FloatingItems Icon={<img src={ImgOne} width={260} />} />

          <FloatingItems
            Icon={
              <img
                src={ImgThree}
                // style={{ marginTop: 200, marginRight: 50 }}
                className="md:mt-56 lg:mt-56 mt-80 md:mr-32 lg:mr-32 mr-0"
                width={200}
              />
            }
          />
          <div className="mt-28 md:mt-0 lg:mt-0">
            <FloatingItems
              Icon={
                <img
                  src={ImgTwo}
                  // style={{ marginTop: 150, marginLeft: 80 }}
                  className="md:mt-48 lg:mt-48 mt-96 md:ml-16 lg:ml-16 ml-0"
                  width={180}
                />
              }
            />
          </div>
        </div>
        <div className="mt-72 md:mt-0 lg:mt-0 ml-28">
          <h2 className="text-3xl text-gray-900 font-bold">CREATE AND</h2>
          <h2 className="text-3xl text-gray-900 font-bold">SELL YOUR NFT</h2>

          <p className="mt-6 break-words text-lg">
            {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.`}
          </p>
          <button className="border border-gray-900 font-semibold bg-[#3D00B7] text-white py-3 px-5 rounded-full mt-5">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpNft;
