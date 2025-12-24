import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:p-20 font-[family-name:var(--font-jura)]">
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/Light-transparent.png"
            width={140}
            height={140}
            alt="birdswims logo"
          />
          <div className="text-9xl">Birdswims</div>
        </div>

        <div className="">hi @birdswims.com</div>
      </main>
    </div>
  );
}
