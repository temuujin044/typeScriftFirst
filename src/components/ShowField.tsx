import { Card } from "./Card";

type ObjType = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  description: string;
};

type PropType = {
  title: string;
  buttonText: string;
  contents: Array<ObjType>;
};

export const ShowField = ({ data }: { data: PropType }) => {
  return (
    <div className="w-full h-[600px] py-4 px-6 flex flex-col gap-11 items-center">
      <h1 className="text-4xl">{data.title}</h1>
      <div className="flex gap-10">
        {data.contents.map((val) => {
          return <Card data={val} />;
        })}
      </div>
    </div>
  );
};
