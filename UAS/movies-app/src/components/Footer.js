import {Flex} from "@chakra-ui/react";
import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <Flex className="footer-text">
        <h1>Programmed By Fauzans </h1>
        <a href="https://github.com/fauzanmuh" target={"_blank"}>
          <AiFillGithub />
        </a>
      </Flex>
    </footer>
  );
}

export default Footer;
