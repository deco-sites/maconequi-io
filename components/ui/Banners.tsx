import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface BannerProps {
  image: ImageWidget;
  title: string;
  subTitle: string;
}

export interface Props {
  banners: BannerProps[];
  title: string;
}

export function Banner({ image, title, subTitle }: BannerProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[292px] lg:h-[375px] ">
      {/*add gap do title p subtitle*/}

      <Image
        width={292}
        height={292}
        alt={""}
        src={image}
        class="max-w-full max-h-full"
      />
      <h1 class="pt-4">{title}</h1>
      <span class="pt-2">{subTitle}</span>
    </div>
  );
}

export default function Banners({ banners, title }: Props) {
  return (
    <section>
      <div class="container flex flex-col justify-center items-center gap-10 ">
        {/*add max width*/}
        <h1 class="">{title}</h1>
        <div class="grid lg:grid-cols-4 gap-x-11 justify-center items-center">
          {banners.map((item) => <Banner {...item} />)}
        </div>
      </div>
    </section>
  );
}
