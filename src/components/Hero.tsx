import { Button } from "@/components/ui/button";
import FloatingCard from "./FloatingCard";

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Left side floating images */}
      <div className="absolute left-0 top-1/4 w-72 space-y-4 -translate-x-1/2 opacity-50">
        <img
          src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
          alt="Website preview"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
          alt="Website preview"
          className="w-full rounded-lg shadow-lg translate-x-12"
        />
      </div>

      {/* Right side floating images */}
      <div className="absolute right-0 top-1/4 w-72 space-y-4 translate-x-1/2 opacity-50">
        <img
          src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
          alt="Website preview"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
          alt="Website preview"
          className="w-full rounded-lg shadow-lg -translate-x-12"
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <span>400k+</span>
            <span>Designers & Devs build with Relume</span>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-purple-500" />
              <div className="w-6 h-6 rounded-full bg-pink-500" />
              <div className="w-6 h-6 rounded-full bg-blue-500" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Websites designed & built faster with AI
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Use AI as your design ally, not as a replacement. Effortlessly generate
            sitemaps and wireframes for marketing websites in minutes.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-r from-orange-100 to-purple-100 p-[1px] rounded-full">
              <div className="bg-white rounded-full">
                <input
                  type="text"
                  placeholder="Describe a company in a sentence or two..."
                  className="w-full px-6 py-4 rounded-full text-lg border-none focus:outline-none focus:ring-0"
                />
                <Button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-8"
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8">
          <FloatingCard className="col-span-1">
            <img
              src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
              alt="Website preview"
              className="w-full h-48 object-cover rounded"
            />
          </FloatingCard>
          <FloatingCard className="col-span-1 translate-y-8">
            <img
              src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
              alt="Website preview"
              className="w-full h-48 object-cover rounded"
            />
          </FloatingCard>
          <FloatingCard className="col-span-1 translate-y-16">
            <img
              src="/lovable-uploads/2d58a845-7a60-4a37-8220-b0231741c504.png"
              alt="Website preview"
              className="w-full h-48 object-cover rounded"
            />
          </FloatingCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;