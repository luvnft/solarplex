import { getFrameMetadata } from "@usedispatch/solarplex-frame-sdk";
import type { Metadata } from "next";

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Mint a cNFT from LUV NFT",
      action: "post",
    },
  ],
  image: `${NEXT_PUBLIC_URL}/default.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: "Mint a cNFT from LUV NFT",
  description: "Mint a cNFT from LUV NFT",
  openGraph: {
    title: "Mint a cNFT from LUV NFT",
    description: "Mint a cNFT with a single click",
    images: [`${NEXT_PUBLIC_URL}/default.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Mint a cNFT from LUV NFT</h1>
    </>
  );
}
