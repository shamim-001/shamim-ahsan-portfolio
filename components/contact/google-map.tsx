// components/contact/google-map.tsx
"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Loader2, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export default function GoogleMap({
  latitude,
  longitude,
  zoom = 15,
}: GoogleMapProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use the specific URL provided
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3681659828384!2d90.45719361744384!3d23.697125200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b799df0d3751%3A0xdedff1ed499a88c7!2sShamim%20Ahsan%20-%20Local%20SEO%20Expert!5e0!3m2!1sen!2sbd!4v1710322456789!5m2!1sen!2sbd";

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError("Failed to load the map. Please try again later.");
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      "_blank"
    );
  };

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex items-center text-red-500">
            <AlertCircle className="mr-2 h-5 w-5" />
            <p>{error}</p>
          </div>
        </div>
      )}

      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
        onError={handleError}
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        title="Google Map showing Shamim Ahsan's location"
        aria-label="Google Map showing Shamim Ahsan's location"
      />

      <div className="absolute bottom-4 right-4">
        <Button
          onClick={handleGetDirections}
          className="bg-white text-primary hover:bg-primary hover:text-white"
        >
          <Navigation className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </div>
    </div>
  );
}
