interface EyebrowProps {
  children: string;
}
export function Eyebrow({ children }: EyebrowProps) {
  return (
    <div className="inline-block w-auto rounded-full border-1 border-gray-900 bg-gray-900 px-3 py-1 text-center text-sm uppercase tracking-wider text-gray-200">
      {children}
    </div>
  );
}
