import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BasicModal from "../components/Modal";

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1">
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://zbierajsie.pl/wp-content/uploads/2018/11/bezposredni_lot_do_miami_floryda_wakacje_zbierajsie-1.jpg"
          alt="miami"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id
          hic repudiandae voluptatem, iure et eius sed natus, error deleniti,
          eos perspiciatis temporibus ratione velit ad excepturi? Nostrum,
          placeat vel! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto exercitationem quidem consequatur repellendus et quaerat
          officia, deleniti officiis sapiente, aperiam aliquam eveniet alias
          eligendi porro quod, quia quasi facere enim? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Error in pariatur consequatur!
          Porro quas hic, cumque aliquid incidunt, perferendis doloribus animi
          sint ullam nesciunt adipisci dolorum temporibus in odio aspernatur!
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked questions
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          <CustomizedAccordions />
        </Typography>
      </Box>
      <Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation showLabels>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Box>
    </Container>
  );
}

export default Tour;
