import { Flex, Image } from "@chakra-ui/react";

interface LogoProps {
    filename?: string;
    boxSize?: number;
}

export const Logo = (props: LogoProps) => {
    return (
        <>
        <Flex width="160px" {...props}>
            <Image src={props.filename || "pixelmixr.svg"} boxSize={props.boxSize || 7}/>
        </Flex>
        </>
    )
}
