import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../src/components/layout/nav";
import MainSection from "../src/components/mainSection";
import { useDispatch } from "react-redux";
import { SetCryptoList } from "../src/State/cryptoSlice";
import { setDetailSlice } from "../src/State/detailCryptoslice";
import useDataFetch from "../src/components/shared/useFetch";
import { useEffect } from "react";


type Props = {
  icon: string;
  name: string;
};

const Home: NextPage = () => {
  const { data } = useDataFetch<{ coins: [Props] }>(
    "https://rest.coinapi.io/"
  );
  console.log(data)

  const dispatch = useDispatch();
  dispatch(SetCryptoList(data));
  dispatch(SetCryptoList(data?.coins));
  useEffect(() => {
    dispatch(SetCryptoList(data));
    dispatch(setDetailSlice("bitcoin"))
  }, []);
  return (
    <div>
      <Head>
        <title>Blockfri, know what the crypto market is offering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <MainSection />
    </div>
  );
};

export default Home;
