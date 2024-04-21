import React, { useState } from "react";
import { Box, Grid, GridItem, Heading, Text, VStack, useBreakpointValue, Image, Flex } from "@chakra-ui/react";

const models = [
  {
    id: "grundfos-ups",
    url: "https://sketchfab.com/models/6316b9ccdb1846c8854c10aa192748d1/embed",
    thumbnail: "https://images.unsplash.com/photo-1556958215-26cb2673485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcnVuZGZvcyUyMFVQUyUyMDE1LTUwTnxlbnwwfHx8fDE3MDQ0NTEyMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "ups-solid-view",
    url: "https://sketchfab.com/models/96e02a219e1d4b1e83bbe134ddcc1739/embed",
    thumbnail: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxVUFMlMjBTb2xpZCUyMFZpZXd8ZW58MHx8fHwxNzA0NDUxMjI2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "cue-control",
    url: "https://sketchfab.com/models/3765d937ffc6498a89b9e082f535dd5b/embed",
    thumbnail: "https://images.unsplash.com/photo-1590172205940-5b6eedf7ec82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDVUUlMjBDb250cm9sfGVufDB8fHx8MTcwNDQ1MTIyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "grundfos-comfort",
    url: "https://sketchfab.com/models/7fb2396eb9324e98bb3f36cadf1ca8be/embed",
    thumbnail: "https://images.unsplash.com/photo-1475609471617-0ef53b59cff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHcnVuZGZvcyUyMENvbWZvcnQlMjAxNXxlbnwwfHx8fDE3MDQ0NTEyMjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "hybrid-pps",
    url: "https://sketchfab.com/models/8e020ec7a3774a05b06414606f14f7b4/embed",
    thumbnail: "https://images.unsplash.com/photo-1666858452715-1399b952befb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxIeWJyaWQlMjBQUFMlMjBTb2xpZCUyMFYwMXxlbnwwfHx8fDE3MDQ0NTEyMjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const gridTemplateColumns = useBreakpointValue({ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" });

  const handleThumbnailClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <VStack align="left" spacing={4}>
          <Heading as="h1" size="2xl" textAlign="left">
            Lorem Ipsum
          </Heading>
          <Heading as="h2" size="lg" textAlign="left">
            Lorem ipsum dolor sit amet
          </Heading>
        </VStack>
        <Image src="https://www.grundfos.com/etc.clientlibs/settings/wcm/design/aembase/head/resources/img/grundfos/logo.png" alt="Grundfos Logo" htmlWidth="120px" />
      </Flex>
      <Box as="iframe" src={selectedModel.url} width="100vw" height="66vh" frameBorder="0" allowFullScreen />
      <Grid templateColumns={gridTemplateColumns} gap={6} mt={5}>
        {models.map((model) => (
          <GridItem key={model.id} w="100%">
            <VStack spacing={2}>
<Text fontSize="sm" textAlign="center" _hover={{ textDecoration: "underline" }} cursor="pointer">
  {model.id.replace(/-/g, " ")}
</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
