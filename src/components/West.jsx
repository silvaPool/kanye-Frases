import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import StyledTitle from "./StyledTitle";
import StyledText from "./StyledText";

const West = () => {

    const [kanye, setKanye] = useState("");


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.kanye.rest/");

                setKanye(response.data.quote);
            } catch (error) {
                console.error("Erro ao buscar dados da API:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <StyledTitle>Frases do Kanye West</StyledTitle>
            <StyledText>{kanye}</StyledText>
        </Box>
    );
};

export default West;