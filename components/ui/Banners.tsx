import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface BannerProps {
  image: ImageWidget;
  title: HTMLWidget;
  subTitle: HTMLWidget;
}

export interface Props {
  banners: BannerProps[];
  title: HTMLWidget;
}

export function Banner({ image, title, subTitle }: BannerProps) {
  return (
    <div className="flex flex-col items-center justify-center max-w-[292px] lg:max-h-[375px] ">
      {/*add gap do title p subtitle*/}

      <Image
        width={292}
        height={292}
        alt={""}
        src={image}
        class="max-w-full max-h-full border-3 rounded-md border-[#E0E0E0]"
      />
      <h1 class="pt-4">
        <b dangerouslySetInnerHTML={{ __html: title }} />
      </h1>
      <span class="pt-2" dangerouslySetInnerHTML={{ __html: subTitle }} />
    </div>
  );
}

export default function Banners({ banners, title }: Props) {
  const id = `banner-${useId()}`;
  return (
    <section>
      <div class="container flex flex-col justify-center items-center gap-10 pt-5">
        {/*add max width*/}
        <h1 class="" dangerouslySetInnerHTML={{ __html: title }} />
        <div class="lg:grid hidden lg:grid-cols-4 gap-x-11 justify-center items-center">
          {banners.map((item) => <Banner {...item} />)}
        </div>
        <div
          id={id}
          class="lg:hidden px-6 justify-center items-center grid pb-2 grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] mb-20"
        >
          <Slider class="flex snap-mandatory pl-1 scroll-smooth scrollbar overflow-x-scroll w-full col-span-full row-span-full pb-8 gap-6">
            {banners?.map((banner, index) => (
              <Slider.Item
                index={index}
                class="carousel-item last:pr-3 w-[310px]"
              >
                <Banner {...banner} />
              </Slider.Item>
            ))}
          </Slider>

          <SliderJS rootId={id} />
        </div>
      </div>
    </section>
  );
}
