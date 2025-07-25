import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./screens/HomePage";
import AboutSag from "./pages/AboutSag";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Catalog from "./pages/Catalog";
import MethodSag from "./pages/MethodSag";
import CatalogProducts from "./pages/CatalogProducts";
import Sales from "./pages/Sales";
import ProductDetail from "./pages/ProductDetail";
import SalesDetail from "./pages/SalesDetail";
import Appartments from "./pages/Appartments";
import AppartmentDetail from "./pages/AppartmentDetail";
import NewsDetail from "./screens/VideosPage/NewsDetailPage";
import SearchResults from "./pages/Search";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="rooms/" element={<Appartments/>} />
          <Route path="about/" element={<AboutSag/>} />
          <Route path="videos/" element={<Videos/>} />
          <Route path="videos/:id" element={<VideoDetail/>} />
          <Route path="news/:id" element={<NewsDetail/>} />
          <Route path="catalog/:id" element={<Catalog/>} />
          <Route path="catalog/:categoryId/product/:id" element={<CatalogProducts/>} />
          <Route path="methods/" element={<MethodSag/>} />
          <Route path="sales/" element={<Sales/>} />
          <Route path="product-sales/:id" element={<SalesDetail/>} />
          <Route path="product-rooms/:id" element={<AppartmentDetail/>} />
          <Route path="product/:id" element={<ProductDetail/>}/>
           <Route path="*" element={<HomePage />} />
           <Route path="/search" element={<SearchResults/>} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>,
);