import React from "react";
// import defaultSrc from "https://olddoghaven.org/wp-content/uploads/2017/08/Dogs-Wagging-Main-Graphic.jpg";

// function PortraitFrame({ src = defaultSrc, alt = "Portrait" }) {
function PortraitFrame({
  src = "https://olddoghaven.org/wp-content/uploads/2017/08/Dogs-Wagging-Main-Graphic.jpg",
  alt = "Portrait",
}) {
  // Use valid default path
  return (
    // <div className="animate-gradient w-4 h-8 rounded-t-full rounded-b-none bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 to-orange-700 to-green-600 bg-[length:400%_100%] p-4">
    <div className=" rounded-t-full rounded-b-none overflow-hidden bg-gray-900">
      <img
        src={src} // Bind to prop dynamically
        alt={alt}
        className="object-cover"
        onError={(e) => {
          console.error("Image load failed:", e.target.src);
          e.target.src =
            "https://blogs.columbian.com/cat-tales/wp-content/uploads/sites/43/2021/01/Cat-Flying-Sky-Background.jpg";
        }}
      />
      {/* </div> */}
    </div>
  );
}

export default PortraitFrame;
