import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <CustomCursor />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;