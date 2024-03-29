// import Button from "./components/Button.jsx";
"use client";
import { useMantineColorScheme, Button, Group, AspectRatio, Stack, Container } from "@mantine/core";
import Hero from "./components/Hero";
import SecondCTA from "./components/Secondary-CTA";
import VideoCard from "./components/VideoCard";
import Features from "./components/Features";
import Contact from "./components/Contact";
import MainImage from "./components/MainImage";
import BespokeProcess from "./components/BespokeProcess";

export default function HomePage() {
  //  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
   <Container>
    <Stack gap="xl">
      <SecondCTA />
      <MainImage />
      <Hero />
      <Features />
      <BespokeProcess />
      <VideoCard />
      <Contact />
    </Stack>
   </Container> 
  );
}

  