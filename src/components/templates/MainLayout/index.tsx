import React from "react";
import Header from "../../organisms/header";
import Footer from "../../atoms/footer";
import { LayoutWrapper, MainContent } from "./mainLayout.style";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default MainLayout;
