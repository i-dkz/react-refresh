import { Tag } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? "green" : score > 65 ? "yellow" : undefined;

  if (score === null) return ;
  
  return (
    <>
      <Tag
        variant="solid"
        colorScheme={color}
        textColor={color + ".200"}
        fontSize={16}
      >
        {score}
      </Tag>
    </>
  );
};

export default CriticScore;
