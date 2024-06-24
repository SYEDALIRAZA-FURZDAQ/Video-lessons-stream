import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];


  const [videoSrc, setVideoSrc] = useState(videosArr[0]);





  return <Stack direction={['column', 'row']} h={'100vh'}>



    <VStack w={'full'}>
      <video
        controls
        controlsList='nodownload'
        src={videoSrc}
        style={{ width: '100%' }}
      >

      </video>

      <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowX={'auto'}>
        <Heading>
          Sample Video
        </Heading>
        <Text> This is a Sample Video testing and demo, This is Description
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem nam sapiente delectus ullam vel
          accusantium inventore eveniet, minus accusamus, explicabo necessitatibus voluptatem, hic labore velit. Praesentium hic,
          quidem fugiat optio, quibusdam culpa illum fugit fuga vel doloremque quas earum necessitatibus id laboriosam,
          animi maxime possimus iste eius. Nihil labore ducimus odit sit, officiis alias commodi ullam reiciendis corporis
          dolores deleniti. Repellendus numquam rem voluptates veniam omnis nihil voluptate ad ex reprehenderit aut eveniet esse tempore sint,
          officiis tenetur aliquid perferendis rerum doloribus quae consequuntur est aliquam! Incidunt aliquid velit sapiente ipsam quas
          tempora necessitatibus, doloremque magni? Ipsum voluptatem impedit autem ipsa, tempore accusantium vitae doloribus molestias quaerat
          nihil unde, ea hic voluptate rerum? Earum debitis modi voluptate laudantium recusandae vel in sed ducimus numquam. Deserunt culpa sit
          nulla eligendi excepturi. A sunt odio deserunt odit, voluptas iure illo nesciunt laborum itaque, cumque quae nulla numquam vel asperiores.
          Iste nemo autem, dolorem nihil explicabo dignissimos et enim similique fuga minima repudiandae quas dicta laboriosam? Ex facilis doloribus
          dolore quis corporis sint tenetur vero! Cumque blanditiis non sunt ut harum tempore suscipit nobis similique delectus atque! Officia nulla voluptate
          id saepe necessitatibus fugit laboriosam voluptas aliquid, sapiente porro voluptatem. Dignissimos, maxime molestiae ullam sed, sunt velit,
          cupiditate nemo et totam beatae perferendis commodi aut. A voluptatibus rem, libero saepe hic vel voluptate, nesciunt aperiam consequuntur
          earum doloribus dolorum, corporis enim alias. Distinctio impedit provident expedita quos minus veritatis accusamus quam, cumque odio commodi
          omnis necessitatibus nulla voluptatem maxime inventore dolorum exercitationem.


          dolore quis corporis sint tenetur vero! Cumque blanditiis non sunt ut harum tempore suscipit nobis similique delectus atque! Officia nulla voluptate
          id saepe necessitatibus fugit laboriosam voluptas aliquid, sapiente porro voluptatem. Dignissimos, maxime molestiae ullam sed, sunt velit,
          cupiditate nemo et totam beatae perferendis commodi aut. A voluptatibus rem, libero saepe hic vel voluptate, nesciunt aperiam consequuntur
          earum doloribus dolorum, corporis enim alias. Distinctio impedit provident expedita quos minus veritatis accusamus quam, cumque odio commodi
          omnis necessitatibus nulla voluptatem maxime inventore dolorum exercitationem.

        </Text>
      </VStack>

    </VStack>

    <VStack
      w={['full', 'xl']}
      alignItems={'stretch'}
      p='8'
      spacing={'8'}
      overflowY={'auto'}
    >
      {videosArr.map((item, index) =>(
      <Button
      variant={'ghost'}
      colorScheme={'purple'}
        onClick={()=> setVideoSrc(item)}
    >
      Lecture {index + 1}
    </Button>
      ))}

    </VStack>

  </Stack>
}

export default Videos