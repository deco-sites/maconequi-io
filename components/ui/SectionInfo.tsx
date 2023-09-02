export interface Props {
  description: string;
  subDescription: string;
}

export default function SectionInfo({ description, subDescription }: Props) {
  return (
    <section class="flex items-center justify-center w-full h-[60px] ">
      <div class="flex flex-col items-center justify-center rounded-tl-[24px] rounded-br-[24px] w-[1302px] h-[55px] bg-white-darker mb-2">
        <p class="font-bold text-base">{description}</p>
        <p class="font-normal text-base ">{subDescription}</p>
      </div>
    </section>
  );
}
