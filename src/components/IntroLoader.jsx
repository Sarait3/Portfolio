export default function IntroLoader({ leaving = false }) {
  return (
    <div
      className={`intro-loader ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <div className="intro-loader__scene">
        <div className="intro-crane">
          <div className="intro-crane__mast" />
          <div className="intro-crane__jib" />
          <div className="intro-crane__hook" />
        </div>

        <div className="intro-blocks">
          <div className="intro-block intro-block--1" />
          <div className="intro-block intro-block--2" />
          <div className="intro-block intro-block--3" />
        </div>

        <p className="intro-loader__text">Building the experience…</p>
      </div>
    </div>
  );
}
