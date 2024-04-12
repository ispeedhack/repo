import "./Footer.scss";
import Modal from "../../../Modal/Modal";
import {useState} from "react";

const Footer = () => {
    const [modalActive, setModalActive] = useState(false);
    const title = "Зв'яжіться з нами";
    const message = "Наш менеджер зв'яжеться з вами найближчим часом";

  return (
      <>
      <div className="mt-14 mb-2 flex items-center justify-center gap-5">
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/github.svg"
            alt="github"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/linkedin.svg"
            alt="linkedin"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/twitter.svg"
            alt="twitter"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/money.svg"
            alt="money"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
      </div>
      <div className="py-2 text-center text-[12px]">
        <p className="leading-[14px] text-[#74bb8f]">
          Copyright © {new Date().getFullYear()}.
          <br /> All rights reserved.
        </p>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={true}
        linkTo={null}
        buttonText={"Ok"}
      />
      </>
  );
};

export default Footer;
