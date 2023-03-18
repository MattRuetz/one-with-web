// content is an array of strings, representing paragraphs
const InfoCard = ({ heading, content }) => {
  return (
    <div className='card info-card'>
      <div className='text-container'>
        <h3>{heading}</h3>
        {content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
