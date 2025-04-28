import Image from "next/image";

export function Spinning() {
  return (
    <div className="items-center justify-center mx-auto flex flex-col">
      <h2 className="text-9xl text-center font-bold text-gray-900 dark:text-white">
        Perfekte <br /> Abstimmung
      </h2>
      <div>
        <Image
          src="/images/ring.png"
          alt="Ring"
          width={500}
          height={500}
          className="rounded-full"
          style={{
            animation: "spin 5s linear infinite",
          }}
        />
      </div>
    </div>
  );
}
