import { HeroStats } from "../types/heroes.tsx";

interface Props {
  heroList?: HeroStats[];
}

export default function HeroList(
  { heroList }: Props,
) {
  if (!heroList || !heroList.length) {
    return <h1 class="text-center text-white">Heroes not found</h1>;
  }

  return (
    <section class="p-4 mx-auto max-w-screen-lg">
      <h1 class="text-center text-5xl text-red-600 mb-2">
        HEROES
      </h1>
      <div class="flex justify-center">
        <div class="h-1 w-36 rounded-full bg-red-600 mb-20"></div>
      </div>
      <div class="grid gap-8 grid-cols-4 ">
        {heroList.map((hero) => (
          <div class="hover:scale-110 transition-transform relative">
            <img
              src={`https://cdn.cloudflare.steamstatic.com/${hero.img}`}
              alt="hero-icon"
              class="!h-[144px] rounded-full mx-auto hover:shadow-2xl"
            />
            <p class="text-white text-center ">
              {hero.localized_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
