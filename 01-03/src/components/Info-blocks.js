import { text } from './Text';
const infoBlocks = (
  <>
    <div className="info-block">
      <h2>About</h2>
      <p> {text} </p>
    </div>

    <div className="info-block">
      <h2>Company</h2>
      <p> {text} </p>
    </div>
    <div className="info-block">
      <h2>Services</h2>
      <p> {text} </p>
    </div>
  </>
);

export { infoBlocks };
