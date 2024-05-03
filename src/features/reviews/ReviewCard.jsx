import { motion } from "framer-motion";
import { item } from "../../utils/variants";
import { Button, Card, CardContent, Collapse, Typography } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);

  const { description, createdAt } = review;

  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div variants={item}>
      <Card
        sx={{
          width: 300,
          borderRadius: "10px",
          padding: "5px",
        }}
        variant="outlined"
      >
        <CardContent className="flex flex-col gap-2 items-start">
          <div className="flex flex-row items-center gap-3">
            <CgProfile size={36} />

            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Anonim
            </Typography>
          </div>
          <Collapse collapsedSize={150} in={expanded}>
            <Typography
              sx={{
                color: "black",
                fontWeight: "100",
                maxWidth: 240,
                marginTop: "15px",
                fontSize: "18px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: expanded ? "unset" : 5,
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
              fontSize: "16px",
            }}
          >
            {expanded ? "Show less " : "Show more "}
            {expanded ? (
              <IoIosArrowUp size={18} />
            ) : (
              <IoIosArrowDown size={18} />
            )}
          </Button>
          <Typography component="span" className="text-lg text-slate-500">
            {createdAt}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ReviewCard;