import { HStack, Button, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <HStack p={4} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link as={ReactRouterLink} to="/">
          Home
        </Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link as={ReactRouterLink} to="/coins">
          Coins
        </Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link as={ReactRouterLink} to="/exchanges">
          Exchanges
        </Link>
      </Button>
    </HStack>
  );
};

export default Header;
