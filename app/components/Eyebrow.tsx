interface EyebrowProps {
  children: string;
}
export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="inline-block w-auto rounded-full border-1 border-slate-200 px-3 py-1 text-center text-sm uppercase text-slate-800">
      {children}
    </div>
  );
}
