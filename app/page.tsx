import Community from "./_views/sections/community";
import Crypto from "./_views/sections/crypto";
import CryptoSeller from "./_views/sections/crypto-seller";
import Event from "./_views/sections/event";
import Faq from "./_views/sections/faq";
import Main from "./_views/sections/main";
import News from "./_views/sections/news";
import Start from "./_views/sections/start";

export default function Home() {
  return (
    <>
      <Main />
      <Event />
      <Start />
      <Crypto />
      <Community />
      <News />
      <CryptoSeller />
      <Faq />
    </>
  );
}
