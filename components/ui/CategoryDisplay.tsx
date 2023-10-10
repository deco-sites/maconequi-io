import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface BannerProps {
  image: ImageWidget;
  isBigger?: boolean;
  description: string;
}

export interface Props {
  banners: BannerProps[];
  title: HTMLWidget;
}

export function Banner(
  { image, isBigger, description }: BannerProps,
) {
  const isBiggerActive = isBigger
    ? "max-w-[414px] lg:max-h-[204px]"
    : "max-w-[375px] lg:max-h-[204px]";
  return (
    <div
      className={`flex flex-col items-center justify-center ${isBiggerActive} lg:max-h-[204px] `}
    >
      {/*add gap do title p subtitle*/}

      <Image
        width={isBigger ? 642 : 204}
        height={isBigger ? 414 : 204}
        alt={description}
        src={image}
        class="max-w-full max-h-full rounded-tl-[16px] rounded-br-[16px] lg:max-h-[204px] "
      />
      <button class="border-[3px] rounded-[6px] border-red text-red mt-3 flex items-center justify-center h-[42px] w-[100px] ">
        Confira
      </button>
    </div>
  );
}

export default function Banners({ banners, title }: Props) {
  const id = `banner-${useId()}`;
  return (
    <section class="mt-4">
      <div class="container flex flex-col justify-center items-center lg:mb-6 mb-2 lg:pb-3 gap-10 pt-5">
        {/*add max width*/}
        <h1 class="pb-2" dangerouslySetInnerHTML={{ __html: title }} />
        <div class="lg:flex hidden gap-x-11 justify-center items-center">
          {banners.map((item) => <Banner {...item} />)}
        </div>
        <div
          id={id}
          class="lg:hidden px-6 items-start grid pb-2 grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] lg:mb-20"
        >
          <Slider class="flex items-start snap-mandatory pl-1 scroll-smooth scrollbar overflow-x-scroll w-full col-span-full row-span-full pb-8 gap-6">
            {banners?.map((banner, index) => (
              <Slider.Item
                index={index}
                class="carousel-item last:pr-3 w-[204px]"
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
