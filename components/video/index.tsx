export default function Video({ src, alt, ...props }) {
  return (
    <div className="shadow-sm shadow-slate-100 rounded-xl overflow-hidden border border-slate-200">
      <video src={src} controls muted />
    </div>
  );
}
