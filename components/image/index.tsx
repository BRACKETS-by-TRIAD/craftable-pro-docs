export default function Image({ src, alt, ...props }) {
  return (
    <div className="shadow-sm shadow-slate-100 rounded-xl overflow-hidden border border-slate-200">
      <img alt={alt} src={src} />
    </div>
  );
}
