import Image from "apps/website/components/Image.tsx";
import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface CardProps {
  icone: ImageWidget;
  label: string;
}

export interface Props {
  cards: CardProps[];
  title: HTMLWidget;
}

function Card({ icone, label }: CardProps) {
  return (
    <div class="flex flex-col justify-center items-center w-[99px] h-[99px] bg-red/10 text-center text-sm px-1.5 py-2 gap-1.5">
      {
        <Image
          width={26}
          height={26}
          alt={""}
          src={icone}
          class="max-w-full max-h-full"
        />
      }
      <span>
        {label}
      </span>
    </div>
  );
}

export default function CardsGrid({ cards, title }: Props) {
  return (
    <section class="flex w-full h-full justify-center items-center">
      <div class="flex flex-col lg:flex-row w-full h-full justify-center items-center gap-6 ">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />

        <div class="grid grid-cols-3 md:flex md:flex-row gap-3 my-4">
          {cards.map((item) => <Card {...item} />)}
        </div>
      </div>
    </section>
  );
}
