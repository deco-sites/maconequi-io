export interface Props {
  title: string;
}

export default function HeaderMaconequi({ title }: Props) {
  return (
    <h1 class="w-[154px] h-10">
      {title}
    </h1>
  );
}
