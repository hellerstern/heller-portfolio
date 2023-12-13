const ProgressBar = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between px-2 text-lg">
        <p className="">{props.title}</p>
        <p className="">{props.size}%</p>
      </div>
      <div className="w-full bg-neutral-200 border-2 p-0.5 border-blue-400 rounded">
        <div
          className="bg-blue-500 p-2 text-center text-xs font-medium leading-none text-white"
          style={{ width: `${props.size}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
