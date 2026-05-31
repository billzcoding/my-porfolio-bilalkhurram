export function AmbientOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0) 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, rgba(249,115,22,0) 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
