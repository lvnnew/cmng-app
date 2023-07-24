import {Logo} from '@/components';
import {Box, Button, Typography} from '@mui/material';
import {motion, useScroll, useTransform} from 'framer-motion';
import {FC, useEffect, useRef, useState} from 'react';

type Props = {
  setIsOpenLogin: Function;
};

export const BannerMain: FC<Props> = ({ setIsOpenLogin }) => {
  const mainContentRef = useRef(null);
  const [animText, setAnimText] = useState("");
  const [count, setCount] = useState(0);

  const { scrollYProgress: scrollYProgressMain } = useScroll({
    target: mainContentRef,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    const word = "с оплатой за клик";

    const interval = setInterval(() => {
      if (animText !== word) {
        setCount((prev) => prev + 1);

        setAnimText((prev) => prev + word[count]);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [animText, count]);

  const bannerOpacity = useTransform(scrollYProgressMain, [0.5, 1], [1, 0]);

  return (
    <motion.div
      style={{ opacity: bannerOpacity, position: "relative", zIndex: 10 }}
    >
      <Box
        ref={mainContentRef}
        component="section"
        sx={{
          marginTop: { xs: "18vh", sm: "22vh", md: "28vh" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          <Logo />
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "28px",
                  s: "30px",
                  sm: "40px",
                  m: "50px",
                  md: "60px",
                  lg: "70px",
                  xl: "76px",
                },
                fontWeight: 800,
                maxWidth: { xs: "425px", s: "600px", sm: "748px", m: "900px", md: "1024px", lg: "1280px", xl: "1400px" },
                lineHeight: 1.08,
                width: "100%",
                margin: "0 auto",
              }}
            >
              Реклама в телеграме <br /> {animText}{" "}
              <span className="animate-pulse">{"|"}</span>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <Typography
              component="p"
              sx={{
                margin: "0 auto",
                marginTop: "22px",
                maxWidth: "216px",
                fontSize: "16px",
                color: "hsla(0,0%,100%,.5)",
                lineHeight: 1.3,
              }}
            >
              Проверьте свою идею в разных телеграм каналах
            </Typography>

            <Button
              sx={{
                backgroundColor: "#3478f6",
                marginTop: "30px",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: 1,
                color: "#fff",
                height: "38px",
                borderRadius: "13px",
                padding: "0 14px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
                transition: "0.3s",
                overflow: "hidden",
                textTransform: "none",
                mx: "auto",
                "&:hover": {
                  backgroundColor: "#3478f6",
                  opacity: 0.5,
                },
              }}
              onClick={() => setIsOpenLogin(true)}
            >
              Запустить рекламу
            </Button>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};
