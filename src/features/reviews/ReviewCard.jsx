import { motion } from "framer-motion";
import { item } from "../../utils/variants";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { theme } from "../../utils/theme";

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { description, createdAt, name } = review;
  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div variants={item}>
      <Card
        sx={{
          width: 310,
          borderRadius: "10px",
          padding: "5px",
          boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.3)",
        }}
        variant="outlined"
      >
        <CardContent className="flex flex-col gap-2 items-start">
          <div className="flex flex-row items-center gap-3">
            <CgProfile size={30} />

            <Typography
              variant="h7"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
          </div>
          {description.length > 161 ? (
            <>
              <Collapse collapsedSize={118} in={expanded}>
                <Typography
                  sx={{
                    color: "black",
                    fontWeight: "100",
                    maxWidth: 330,
                    marginTop: "15px",
                    fontSize: isMediumScreen ? "12px" : "14px",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: expanded ? "unset" : 5,
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                  component="div"
                >
                  {description}
                </Typography>
              </Collapse>

              <Button
                onClick={handleShowMore}
                sx={{
                  color: "black",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontFamily: "'Inter', sans-serif",
                  textTransform: "none",
                  padding: "0",
                  fontSize: "14px",
                }}
              >
                {expanded ? "Show less " : "Show more "}
                {expanded ? (
                  <IoIosArrowUp size={18} />
                ) : (
                  <IoIosArrowDown size={18} />
                )}
              </Button>
            </>
          ) : (
            <Typography
              sx={{
                color: "black",
                fontWeight: "100",
                maxWidth: 330,
                marginTop: "15px",
                fontSize: isMediumScreen ? "12px" : "14px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                wordWrap: "break-word",
                whiteSpace: "pre-wrap",
              }}
              component="div"
            >
              {description}
            </Typography>
          )}

          <Typography
            component="span"
            sx={{ fontSize: "12px" }}
            className="text-slate-500"
          >
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ReviewCard;
