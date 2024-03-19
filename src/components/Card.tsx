type PropType = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  description: string;
};

export const Card = ({ data }: { data: PropType }) => {
  return (
    <div className="border border-black rounded-lg w-[300px] h-[400px] flex flex-col px-4 py-5 justify-between">
      <div className="flex flex-col gap-8">
        <h2 className="text-xl font-semibold h-20">{data.name}</h2>
        <p>{data.description}</p>
      </div>
      <p className="font-semibold">{data.dateOfYear}</p>
    </div>
  );
};
