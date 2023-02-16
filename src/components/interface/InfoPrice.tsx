interface Props {
  value: string;
}

const InfoPrice = ({ value }: Props) => {
  return (
    <div className="py-4 px-3 bg-bgBlue min-h-[78px] flex items-center justify-center">
      <p className="text-xl font-bold text-yellow-400">{value}</p>
    </div>
  );
};

export default InfoPrice;
