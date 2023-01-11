interface IButtonPoints {
  points: number;
  className?: string;
}

export function ButtonPoints({
  points,
  className,
}: IButtonPoints): JSX.Element {
  return (
    <button
      className={`bg-text_contrast rounded-full p-xs cursor-auto transite hover:bg-opacity-80 ${className} `}
      type="button"
    >
      <b className="text-primary">R </b>
      <b className="text-text">{points}</b>
    </button>
  );
}
