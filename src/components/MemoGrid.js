import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr)); /* Set larger grid item size */
  grid-gap: 30px; /* Increase gap between items for more space */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr)); /* 2 columns with larger items */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
`;

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column; /* Align image and text vertically */
  align-items: center; /* Center the content horizontally */
  justify-content: flex-start; /* Make sure everything is aligned to the top */
`;

const ImageFrame = styled.div`
  position: relative;
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%; /* Ensure the image container takes full width */
  height: 100%;
  
  &:hover {
    transform: scale(1.05); /* Example hover effect */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

const MemoTitle = styled.h3`
  margin-top: 10px;
  text-align: center; /* Center the title */
`;

const MemoDescription = styled.p`
  font-size: 0.9em;
  color: #555;
  text-align: center;
  margin-top: 5px;
`;

const MemoTimestamp = styled.p`
  font-size: 0.8em;
  color: #888;
  text-align: center; /* Center the timestamp */
`;

const MemoComponent = ({ imageSrc, title, description, timestamp }) => {
  return (
    <MemoContainer>
      <ImageFrame>
        <Image src={imageSrc} alt={title} />
      </ImageFrame>
      <MemoTitle>{title}</MemoTitle>
      <MemoDescription>{description}</MemoDescription>
      <MemoTimestamp>{timestamp}</MemoTimestamp>
    </MemoContainer>
  );
};

const GridHeadline = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  color: #333;
`;

const MemoGrid = () => {
  const memos = [
    {
      imageSrc: require('../assets/imagea.jpg'),
      title: 'User Dashboard',
      description: 'A clean and intuitive dashboard providing users with quick access to key metrics and real-time updates, designed for easy navigation.',
      timestamp: 'January 1, 2023',
    },
    {
      imageSrc: require('../assets/imageb.jpg'),
      title: 'Onboarding Flow',
      description: 'A step-by-step onboarding process guiding new users through the app’s features, ensuring a smooth start and easy understanding of core functions.',
      timestamp: 'February 15, 2023',
    },
    {
      imageSrc: require('../assets/imagec.jpg'),
      title: 'Accessibility Features',
      description: 'The design incorporates high contrast colors, larger font options, and screen reader compatibility to make the app accessible to all users, including those with visual impairments.',
      timestamp: 'March 10, 2023',
    },
    {
      imageSrc: require('../assets/imaged.jpg'),
      title: 'Responsive Layout',
      description: 'The layout adapts seamlessly across different screen sizes, from smartphones to tablets, ensuring a consistent user experience on any device.',
      timestamp: 'April 20, 2023',
    },
    {
      imageSrc: require('../assets/imagee.jpg'),
      title: 'User Testing Insights',
      description: 'Iterative design process based on user testing results, with improvements made to enhance navigation speed and overall usability based on direct user feedback.',
      timestamp: 'May 31, 2023',
    },
    {
      imageSrc: require('../assets/imagef.jpg'),
      title: 'Final Prototype',
      description: 'The polished prototype, integrating user feedback, ready for handoff to development, with refined animations and interactions for an engaging user experience.',
      timestamp: 'June 15, 2023',
    },
  ];

  return (
    <div>
      <GridHeadline>UI/UX Design Highlights</GridHeadline> {/* Headline for the grid */}
      <GridContainer>
        {memos.map((memo, index) => (
          <MemoComponent
            key={index}
            imageSrc={memo.imageSrc}
            title={memo.title}
            description={memo.description}
            timestamp={memo.timestamp}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default MemoGrid;
