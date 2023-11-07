"use client";
import Image from "next/image";
import { useState } from "react";
// import QRCode from "qrcode";
// import QRCode from "qrcode.react";
import { useQRCode } from "next-qrcode";

export default function Home() {
  // const [username, setUsername] = useState("");
  const { Canvas } = useQRCode();
  const data = {
    mobile_number: "0741651656",
    kitty_id: 129,
    transaction_code: "SPEJZM17571WK58",
  };
  const [src, setSrc] = useState("");
  // const generate = () => {
  //   QRCode.toDataURL(`https://github.com/${data}`).then(setSrc as any);
  // };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-black p-24">
      <Canvas
        text={JSON.stringify(data)}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#000000ff",
            light: "#ffffffff",
          },
        }}
        logo={{
          src: "/Kitty",
          options: {
            width: 35,
            x: undefined,
            y: undefined,
          },
        }}
      />
    </main>
  );
}
