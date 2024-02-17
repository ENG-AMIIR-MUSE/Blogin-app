import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid justify-between  sm:flex w-full   md:grid-cols-1  ">
          <div>
            <Link
              to="/"
              className=" mt-5 flex items-center whitespace-nowrap text-lg sm:text-xl"
            >
              <span className="px-2 py-1 bg-gradient-to-r  from-indigo-500 rounded-lg text-white via-purple-500 to-pink-500">
                Amiir
              </span>
              <span>Blog</span>
            </Link>
          </div>
          {/* logo end here */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6  mt-5  sm:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://eng-amiir-muse.github.io/randomQuoteGenerator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quotes
                </Footer.Link>
                <Footer.Link href="/ABOUT" target="_blank">
                  Amiir Muse
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/ENG-AMIIR-MUSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://linkedln/amir_muse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedln
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/ENG-AMIIR-MUSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Plociy
                </Footer.Link>
                <Footer.Link
                  href="https://linkedln/amir_muse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Condition
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex flex-col  sm:flex-row gap-5   sm:items-center mt-5 justify-between ">
          <Footer.Copyright
            href="#"
            by="Amiir's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex items-center  gap-5">
            <Footer.Icon icon={BsFacebook} href="#" />
            <Footer.Icon icon={BsInstagram} href="#" />
            <Footer.Icon icon={BsYoutube} href="#" />
            <Footer.Icon icon={BsTiktok} href="#" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
