import illustration from '../../assets/images/illustration-working.svg';

export default function Intro() {
  return (
    <>
        <div className="intro-right">
          <img src={illustration} alt="work illustration"/>
        </div>
        <div className="intro-left">
          <h1 className="intro__title">More than just shorter links</h1>
          <p className="intro__info">Build your brand’s recognition and get detailed insights 
          on how your links are performing.</p>
          <button className="btn btn--accent">Get Started</button>
        </div>
    </>
  );
}