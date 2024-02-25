import Head from 'next/head'
// import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Section from '../section'
// import VoxelDogLoader from '../voxel-dog-loader'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />
// })

import Spline from '@splinetool/react-spline';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Teetouch's homepage" />
        <meta name="author" content="Teetouch Asawasupakul" />
        <meta name="author" content="Touch" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Teetouch Asawasupakul" />
        <meta name="og:title" content="Teetouch Asawasupakul" />
        <meta property="og:type" content="website" />
        <title>Teetouch Asawasupakul - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
      <Section delay={0.1}>
        <Spline scene="https://prod.spline.design/QtlNl16oMP0z4TMf/scene.splinecode" ></Spline>
      </Section>

        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
