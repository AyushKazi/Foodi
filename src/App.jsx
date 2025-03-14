import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, MantineProvider, rem } from "@mantine/core";
import NavBar from "./app/components/NavBar";
import MainDisplay from "./app/components/MainDisplay";
import ProductCategories from "./app/components/ProductCategories";
import SpecialDishes from "./app/components/SpecialDishes";
import CustomerFeedback from "./app/components/CustomerFeedback";

const queryClient = new QueryClient();

const theme = createTheme({
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65",
  },
  fontFamily: "Poppins, sans-serif",
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <NavBar />
        <MainDisplay />
        <ProductCategories />
        <SpecialDishes />
        <CustomerFeedback />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
