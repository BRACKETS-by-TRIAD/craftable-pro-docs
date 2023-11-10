export default function Image({ src, alt, width, height, short, ...props }) {
  return (
    <div
      className={`${
        !short
          ? 'shadow-sm shadow-slate-100 rounded-xl overflow-hidden border border-slate-200'
          : 'opacity-70'
      }`}
    >
      <img alt={alt} src={src} width={width} height={height} />
    </div>
  );
}
