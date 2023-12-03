import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"900px"} borderRadius={8} overflow={"hidden"}/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;