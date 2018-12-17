import React from "react";

const Footer = props => {
  return (
    <footer class="bg-primary text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} SocialConnector
    </footer>
  );
};

export default Footer;
