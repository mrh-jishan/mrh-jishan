import {
    Center,
    Divider,
    Link,
    ScaleFade,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react'
import {
    FaBootstrap,
    FaCode,
    FaDatabase,
    FaExternalLinkAlt,
    FaGithub,
    FaJs,
    FaLaravel,
    FaPepperHot,
    FaPython,
    FaReact,
    FaSass,
} from 'react-icons/fa'
import {SiChakraui, SiNextdotjs} from 'react-icons/si'
import Image from 'next/legacy/image'


const tagMappings = {
    React: ['blue', FaReact],
    Python: ['orange', FaPython],
    Javascript: ['yellow', FaJs],
    Sass: ['pink', FaSass],
    Flask: ['green', FaPepperHot],
    Laravel: ['red', FaLaravel],
    Bootstrap: ['purple', FaBootstrap],
    SQL: ['blue', FaDatabase],
    'Next.js': ['gray', SiNextdotjs],
    'Chakra UI': ['teal', SiChakraui],
};

export default function Cards({imageURL, title, slug, desc, tag}) {
    const getTag = (tag) => tagMappings[tag] || ['gray', FaCode];

    const Tags = tag.map((item) => (
        <Tag
            key={item}
            colorScheme={getTag(item)[0]}
            size="md"
        >
            <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))

    return (
        <Stack
            minH="320px"
            maxH="500px"
            bg="secondary"
            border="1px"
            borderColor={{base: '#333', md: 'borderColor'}}
            borderRadius="10px"
        >
            <Link href={`/projects/${slug}`}>
                <ScaleFade transition={{duration: 1}} in={true}>
                    <Center w="auto">
                        <Image
                            width={800}
                            height={400}
                            minH="270px"
                            borderRadius="10px 10px 0px 0px"
                            transition="0.3s"
                            objectFit="cover"
                            style={{
                                borderRadius: '10px 10px 0px 0px',
                                objectFit: 'cover',
                            }}
                            alt={title}
                            src={imageURL}
                        />
                    </Center>

                    <Stack px={4} py={2}>
                        <Stack alignItems="center" justifyContent="space-between" isInline>
                            <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl">
                                {title}
                            </Text>
                            <Stack
                                alignItems="center"
                                justifyContent="flex-end"
                                isInline
                                spacing={4}
                            >
                                <Link
                                    color="white"
                                    href={`/projects/${slug}`}
                                >
                                    <FaExternalLinkAlt aria-label="project link" size={20}/>
                                </Link>
                            </Stack>
                        </Stack>
                        <Stack isInline>{Tags}</Stack>
                        <Divider/>
                        <Text color="textSecondary" fontSize={['sm', 'md']}>
                            {desc}
                        </Text>
                    </Stack>
                </ScaleFade>
            </Link>
        </Stack>
    )
}
