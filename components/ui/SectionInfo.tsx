export interface Props {
  description: string;
  subDescription: string;
}

export default function SectionInfo({ description, subDescription }: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full px-3 ">
      <div class="flex w-full flex-col px-4 py-3 items-center justify-center rounded-tl-[24px] rounded-br-[24px] lg:w-[1302px] md:h-[55px] h-[114px] bg-white-darker mb-2">
        <p class="font-bold text-sm md:text-base">{description}</p>
        <p class="font-normal text-sm md:text-base ">{subDescription}</p>
      </div>
    </section>
  );
}
