import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-1 sm:p-20 font-[family-name:var(--font-jura)]">
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <Image
            src="/Light-transparent.png"
            width={500}
            height={500}
            alt="birdswims logo"
            className="w-20 h-auto md:w-32 lg:w-38"
          />
          <div className="sm:text-9xl text-5xl">Birdswims</div>
        </div>

        <a className="mt-4" href="mailto:hi@birdswims.com">
          hi@birdswims.com
        </a>
      </main>
    </div>
  );
}
