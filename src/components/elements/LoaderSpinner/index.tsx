interface ILoaderSpinner {
  loading: boolean;
  className?: string;
}

export function LoaderSpinner({
  loading,
  className,
}: ILoaderSpinner): JSX.Element {
  return loading ? (
    <div
      data-testid="loading_spinner"
      className={`flex items-center justify-center ${className}`}
    >
      <div className="w-xlg h-xlg border-t-4 border-b-8 border-card rounded-full animate-spin" />
    </div>
  ) : (
    <div />
  );
}
