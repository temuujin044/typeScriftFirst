type ObjType = {
  name: string;
  dateOfYear: string;
  isVerified: boolean;
  tag: string;
  description: string;
};

type PropType = {
  id: number;
  title: string;
  buttonText: string;
  contents: Array<ObjType>;
};

export const SideMenu = ({
  data,
  state,
}: {
  data: PropType;
  state: (arg0: number) => void;
}) => {
  return (
    <div
      onClick={() => state(data.id)}
      className={`${
        data.title === "Financial" ? "border-none" : "border-b"
      } border-black text-xl hover:text-2xl duration-300 h-10 px-3`}
    >
      <p>{data.title}</p>
    </div>
  );
};
