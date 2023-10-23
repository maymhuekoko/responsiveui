import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import {BsFillSendFill} from  "react-icons/bs"
import { BiLogoPinterestAlt } from "react-icons/bi";
import { CgMonday } from "react-icons/cg"

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className=" bg-gray-400 mt-5">
        <div className="container mx-auto  py-[6rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
              
            {/* </div> */}
            <CgMonday className=" w-[19rem] text-9xl"/>
            {/* middle div */}
            <div className=" flex space-x-7">
            <div className="flex flex-col gap-8 relative">
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Home
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Discovery
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Photos
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Contact
              </p>
            </div>
            <div className="flex flex-col gap-8 relative  md:m-0">
        
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                About 
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Help
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Terms
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Guidelines
              </p>
            </div>
            <div className="flex flex-col gap-8 relative  md:m-0">
        
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Testimonials 
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Advertise
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Integrations
              </p>
              <p className="text-[16px] hover:text-red-600 cursor-pointer text-gray-200  font-medium hover:font-bold">
                Careers
              </p>
            </div>
            </div>
            

            <div className="flex flex-col gap-8 relative mt-8 md:m-0">
            {/* <div class="w-72"> */}
            <div class="relative h-10 w-full min-w-[200px]">
                <div class="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-gray-500">
                <BsFillSendFill/>
                </div>
                <input
                class="peer h-full w-full rounded-[7px] border-2 border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg--gray-50"
                placeholder="Email..."
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text--gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border--gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border--gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text--gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text--gray-500">
                Email
                </label>
            </div>
            {/* </div> */}
            {/* <input type="text" className=" p-1 rounded bg-transparent border-2 border-gray-200 text-gray-200" placeholder=" Enter Email..."/> */}
              <p className=" text-gray-200 font-semibold">
                Stay in touch with us for the freshest product
              </p>
              <div className="flex gap-7 text-[18px] text-gray-200 font-semibold justify-center md:justify-start">
              
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl hover:bg-red-600 hover:text-gray-200 font-semibold rounded p-1"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;