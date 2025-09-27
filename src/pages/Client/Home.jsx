import React, { useState } from "react";
import {
  Category,
  ChatBot,
  Featured,
  Footer,
  Hero,
  Navbar,
  Notification,
} from "../../components";

const Home = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const onCloseNotification = () => {
    setIsOpenNotification(false);
  };
  return (
    <>
      <Navbar setIsOpenNotification={setIsOpenNotification} />
      {isOpenNotification && (
        <Notification
          isOpen={isOpenNotification}
          onClose={onCloseNotification}
        />
      )}
      <Hero />
      <Featured />
      <Category />
      <ChatBot />
      <Footer />
    </>
  );
};

export default Home;
