// "use client";

// import { useRef, useState, useEffect } from "react";
// import { Camera, X, Download } from "lucide-react";

// export default function CameraApp() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [stream, setStream] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [error, setError] = useState("");
//   const [facingMode, setFacingMode] = useState("environment"); // 'user' or 'environment'

//   const startCamera = async () => {
//     try {
//       setError("");
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: { facingMode: facingMode },
//         audio: false,
//       });

//       if (videoRef.current) {
//         videoRef.current.srcObject = mediaStream;
//       }
//       setStream(mediaStream);
//     } catch (err) {
//       setError(
//         "Failed to access camera. Please ensure you have granted camera permissions."
//       );
//       console.error("Camera error:", err);
//     }
//   };

//   const stopCamera = () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//       setStream(null);
//     }
//   };

//   const capturePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;

//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(video, 0, 0);

//       const imageData = canvas.toDataURL("image/png");
//       setCapturedImage(imageData);
//     }
//   };

//   const downloadPhoto = () => {
//     if (capturedImage) {
//       const link = document.createElement("a");
//       link.href = capturedImage;
//       link.download = `photo-${Date.now()}.png`;
//       link.click();
//     }
//   };

//   const switchCamera = () => {
//     stopCamera();
//     setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
//   };

//   useEffect(() => {
//     if (facingMode && !stream) {
//       startCamera();
//     }
//   }, [facingMode]);

//   useEffect(() => {
//     return () => {
//       stopCamera();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-white mb-6 text-center">
//           Camera Access in Next.js
//         </h1>

//         {error && (
//           <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
//             {error}
//           </div>
//         )}

//         <div className="grid md:grid-cols-2 gap-6">
//           {/* Live Camera Feed */}
//           <div className="bg-gray-800 rounded-lg p-4 shadow-xl">
//             <h2 className="text-xl font-semibold text-white mb-4">Live Feed</h2>
//             <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
//               <video
//                 ref={videoRef}
//                 autoPlay
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="flex gap-2 mt-4">
//               {!stream ? (
//                 <button
//                   onClick={startCamera}
//                   className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
//                 >
//                   <Camera size={20} />
//                   Start Camera
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     onClick={capturePhoto}
//                     className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
//                   >
//                     <Camera size={20} />
//                     Capture
//                   </button>
//                   <button
//                     onClick={switchCamera}
//                     className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition"
//                   >
//                     Flip
//                   </button>
//                   <button
//                     onClick={stopCamera}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
//                   >
//                     <X size={20} />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Captured Photo */}
//           <div className="bg-gray-800 rounded-lg p-4 shadow-xl">
//             <h2 className="text-xl font-semibold text-white mb-4">
//               Captured Photo
//             </h2>
//             <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
//               {capturedImage ? (
//                 <img
//                   src={capturedImage}
//                   alt="Captured"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center text-gray-500">
//                   No photo captured yet
//                 </div>
//               )}
//             </div>

//             {capturedImage && (
//               <div className="flex gap-2 mt-4">
//                 <button
//                   onClick={downloadPhoto}
//                   className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
//                 >
//                   <Download size={20} />
//                   Download
//                 </button>
//                 <button
//                   onClick={() => setCapturedImage(null)}
//                   className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
//                 >
//                   <X size={20} />
//                   Clear
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Hidden canvas for capturing */}
//         <canvas ref={canvasRef} className="hidden" />
//       </div>
//     </div>
//   );
// }
