// import Image from "deco-sites/std/components/Image.tsx";
// import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

function Card() {
  return (
    <div class="flex flex-col justify-center items-center w-[99px] h-[99px] bg-red/10 ">
      {
        /* <Image
                width={26}
                height={26}
                alt={""}
                src={""}
                class="max-w-full max-h-full"
                 /> */
      }
      <span>
        nome provisório
      </span>
    </div>
  );
}

export default function CardsGrid() {
  return (
    <section class="flex w-full h-full justify-center items-center">
      <div class="flex flex-col w-full h-full justify-center items-center gap-6">
        <h1>
          Compre por <b>Categoria</b>
        </h1>
        <div class="grid grid-cols-3 gap-3 ">
        </div>
      </div>
    </section>
  );
}
