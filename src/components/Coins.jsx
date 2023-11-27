import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import Loader from "./Loader";

import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [Coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(100).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);
  if (error) {
    return <ErrorComponent message={"Error while fetching the coins page"} />;
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack wrap={"wrap"}>
              <Radio value={"inr"}> INR </Radio>
              <Radio value={"usd"}> USD </Radio>
              <Radio value={"eur"}> EUR </Radio>
            </HStack>
          </RadioGroup>
          <HStack marginLeft={["10", "0"]} wrap={"wrap"}>
            {Coins.map((i) => {
              return (
                <CoinCard
                  id={i.id}
                  key={i.id}
                  symbol={i.symbol}
                  price={i.current_price}
                  currencySymbol={currencySymbol}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => {
              return (
                <Button
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
