import { useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import MobileDrawer from "@/components/layout/MobileDrawer";
import BottomNav from "@/components/layout/BottomNav";
import HeroSlider from "@/components/home/HeroSlider";
import AnnouncementTicker from "@/components/home/AnnouncementTicker";
import TrustBadges from "@/components/home/TrustBadges";
import CategoryGrid from "@/components/home/CategoryGrid";
import BrandStrip from "@/components/home/BrandStrip";
import NewArrivals from "@/components/home/NewArrivals";
import DealsSection from "@/components/home/DealsSection";
import ShoesSection from "@/components/home/ShoesSection";
import SlippersSection from "@/components/home/SlippersSection";
import KidsNewArrivals from "@/components/home/KidsNewArrivals";
import CrocsSection from "@/components/home/CrocsSection";
import BestSellers from "@/components/home/BestSellers";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import AllProductsSection from "@/components/home/AllProductsSection";
import InstagramSection from "@/components/home/InstagramSection";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <TopBar />
      <Header onMenuOpen={() => setDrawerOpen(true)} />
      <NavBar />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main>
        <HeroSlider />
        <AnnouncementTicker />
        <CategoryGrid />
        <NewArrivals />
        <BestSellers />
        <BrandStrip />
        <DealsSection />
        <ShoesSection />
        <SlippersSection />
        <KidsNewArrivals />
        <CrocsSection />
        <CollectionsGrid />
        <AllProductsSection />
        <InstagramSection />
        <TrustBadges />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}