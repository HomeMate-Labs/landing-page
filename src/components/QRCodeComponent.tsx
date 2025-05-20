
import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface QRCodeProps {
  url: string;
  size?: number;
  logoUrl?: string;
}

const QRCodeComponent = ({ url, size = 260, logoUrl }: QRCodeProps) => {
  const qrRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!qrRef.current) return;
    
    const qrCode = new QRCodeStyling({
      width: size,
      height: size,
      type: "svg",
      data: url,
      dotsOptions: {
        color: "#8C52FF",
        type: "rounded"
      },
      cornersSquareOptions: {
        color: "#1A1F2C",
        type: "extra-rounded"
      },
      cornersDotOptions: {
        color: "#1A1F2C",
        type: "dot"
      },
      backgroundOptions: {
        color: "#ffffff",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5
      }
    });

    if (logoUrl) {
      qrCode.update({
        image: logoUrl
      });
    }
    
    qrRef.current.innerHTML = "";
    qrCode.append(qrRef.current);
  }, [url, size, logoUrl]);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-4 rounded-3xl shadow-glass animate-pulse-glow" ref={qrRef} />
    </div>
  );
};

export default QRCodeComponent;
