import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{ height: "60vh" }}
        animate={{ y: 200 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayScale(1)"}
        ></Image>
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.900"}
        mt={"-20px"}
      >
        Xcrypto
      </Text>
    </Box>
  );
};

export default Home;
