// content is an array of strings, representing paragraphs
const InfoCard = ({ content }) => {
  return (
    <div>
      <div class='text-container'>
        <p>
          {content.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
