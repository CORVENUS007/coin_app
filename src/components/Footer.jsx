import { Box, Stack, VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import founderPic from "../assets/surajpic.jpg";
const Footer = () => {
  return (
    <>
      {" "}
      <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
      >
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <VStack w={"full"} alignItems={["center", "flex-start"]}>
            {" "}
            <a
              href="https://www.linkedin.com/in/suraj-thakur-2963061a8"
              target="blank"
            >
              <Text fontWeight={"bold"}> About Us</Text>
            </a>
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              {" "}
              We are the best crypto stats app in the India . We provide
              guidance at very cheap price.
            </Text>
          </VStack>
          <VStack>
            <a
              href="https://www.linkedin.com/in/suraj-thakur-2963061a8"
              target="blank"
            >
              {" "}
              <Avatar
                filter={"grayScale(1)"}
                boxSize={"28"}
                mt={["4", "0"]}
                src={founderPic}
              />
            </a>

            <Text> Our Founder</Text>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
