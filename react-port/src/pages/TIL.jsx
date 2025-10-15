import Subnav from "../components/Subnav";

export default function TIL() {
  return (
    <>
      <Subnav />
      <main className="mainTIL">
        <div className="container">
          <section className="page-til">
            <h1>
              things I’ve learnt<span className="dot">.</span>
            </h1>
            <p className="subtitle">concepts that i found interesting</p>
            <hr className="rule" />
          </section>
        </div>
      </main>
    </>
  );
}
