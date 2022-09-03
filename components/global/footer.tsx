import { AiOutlineGithub } from "react-icons/Ai";
import { BsDiscord } from "react-icons/Bs";
import { RiTwitterLine, RiLinkedinFill } from "react-icons/Ri";

import DecorLine from "../items/decor-line";

export default function Footer() {
  return (
    <div className="bg-main-red h-[35rem] w-full flex flex-row">
      <div className="h-full w-[30%]">
        <div className="flex flex-row">
          <div className="bg-black rounded-full w-[5rem] h-[5rem] mt-5 ml-5">
            <img
              src="/images/logo.png"
              className="w-auto bg-secondary-background rounded-full drop-shadow-logo"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col justify-center ml-5 mt-10">
            <h1 className="text-5xl tracking-wider">BRAKET</h1>
            <p className="text-lg ml-5">@2022 FTW Corp.</p>
          </div>
        </div>
        <div className="w-[calc(80%)] drop-shadow-arrow-svg flex self-end">
          <DecorLine
            className="w-0 flex-grow-[1]"
            width={45}
            isLeft={false}
            color={"#000000"}
          />
        </div>
        <div className="flex flex-row">
          <a
            href=""
            className="flex justify-center ml-[8.75rem] rounded-full bg-white w-12 h-12 shadow-md"
          >
            <RiLinkedinFill className="w-8 h-8 mt-2 fill-main-red" />
          </a>
          <a
            href=""
            className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md"
          >
            <RiTwitterLine className="w-8 h-8 mt-2 fill-main-red" />
          </a>
          <a
            href=""
            className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md"
          >
            <AiOutlineGithub className="w-8 h-8 mt-2 fill-main-red" />
          </a>
          <a
            href=""
            className="flex justify-center rounded-full bg-white w-12 h-12 ml-5 shadow-md"
          >
            <BsDiscord className="w-8 h-8 mt-[.65rem] fill-main-red" />
          </a>
        </div>
      </div>
      <div className="h-full flex flex-col text-white">
        <div className="flex flex-row w-full h-4/6 space-x-64">
          <div>
            <h1 className="mt-16 text-[2rem] tracking-wider">Resources</h1>
            <hr className="w-32 mt-1 mb-3" />
            <div className="flex flex-col space-y-1">
              <a href="">Developer</a>
              <a href="">Support</a>
              <a href="">About</a>
            </div>
          </div>
          <div>
            <h1 className="mt-16 text-[2rem] tracking-wider">
              Terms & Policies
            </h1>
            <hr className="w-48 mt-1 mb-3" />
            <div className="flex flex-col space-y-1">
              <a href="">Terms of use</a>
              <a href="">Privacy policy</a>
            </div>
          </div>
          <div>
            <h1 className="mt-16 text-[2rem] tracking-wider">Contact Us</h1>
            <hr className="w-36 mt-1 mb-3" />
            <div className="flex flex-col space-y-1">
              <a href="">Business Inquiries</a>
              <a href="">Contact</a>
              <a href="">Partners</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-2/6">
          <h1 className="text-[2rem] tracking-wider">Choose your language</h1>
          <hr className="w-60 mt-1" />
          <div className="flex flex-row space-x-14 mt-5">
            <a href="">English</a>
            <a href="">French</a>
            <a href="">Chinese</a>
            <a href="">Spanish</a>
            <a href="">Russian</a>
            <a href="">Korean</a>
          </div>
        </div>
      </div>
    </div>
  );
}
