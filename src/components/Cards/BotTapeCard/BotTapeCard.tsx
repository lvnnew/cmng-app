import { Box, Typography } from "@mui/material";
import Image from "next/image";
import TapeImg from "../../../../public/images/tape.webp";

export const BotTapeCard = () => {
  return (
    <Box className="card">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: { xs: "column" },
          "@media(min-width: 768px)": {
            flexDirection: "row",
          },
          gap: "39px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "21px", md: "26px" },
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Бот добавит <br/>в ленту один пост
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "hsla(0,0%,100%,.5)",
            }}
          >
            Это будет пост до 90 символов с рекламой канала или сайта.
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "hsla(0,0%,100%,.5)",
            }}
          >
            Пост опубликуется без звука, будет редактироваться - реклама меняться
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#a4d2ff",
            }}
          >
            Тематика рекламы = тематика канала
          </Typography>
        </Box>

        <Image
          className="start-bot-img"
          src={TapeImg}
          alt="confirm-admin"
          width={0}
          height={0}
          sizes="100vw"
        />
      </Box>
    </Box>
  );
};
