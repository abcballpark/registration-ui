import { Box, Container, Stack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const PlaceholderSkeleton_4x2_TopFull = () => {
  return (
    <>
      <Box as="main" flex="1" py="2" px="4">
        <Container maxW="container.xl" pt="8" px="8" display="flex" flexDirection="column" margin="0 auto">
          <Stack spacing="4" mb="14">
            <Skeleton width="100px" height="24px" speed={0} />
            <SkeletonText speed={0} />
          </Stack>
          <Stack direction="row" spacing="8" mb="14">
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="8" mb="14">
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="8">
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
            <Stack spacing="4" flex="1">
              <Skeleton width="100px" height="20px" speed={0} />
              <SkeletonText speed={0} />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
