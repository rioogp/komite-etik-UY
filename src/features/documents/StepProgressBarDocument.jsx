import { Step, StepLabel, Stepper } from "@mui/material";
import { steps } from "../../utils/constants";
import { useDocument } from "./useDocument";
import { styled } from "@mui/material/styles";

const stepStyle = {
  padding: 2,
  "& .Mui-active": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "4px",
      height: "90px",
      marginY: "-24px",
      backgroundColor: "black",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "4px",
      height: "90px",
      marginY: "-26px",
      backgroundColor: "black",
    },
  },
};

function StepProgressBarDocument({ id, createdAt }) {
  const { isLoading, document } = useDocument(id);
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentStepIndex = steps.findIndex(
    (step) => step.title === document.status
  );

  const filteredSteps = steps.slice(0, currentStepIndex + 1).filter((step) => {
    if (
      document.status === "Layak" ||
      document.status === "Sedang Ditandatangani"
    ) {
      return !["Tidak Layak", "Perbaikan"].includes(step.title);
    } else if (document.status === "Perbaikan") {
      return !["Tidak Layak"].includes(step.title);
    } else if (
      document.status === "Sedang Diproses" ||
      document.status === "Sedang Direview"
    ) {
      return true;
    } else if (document.status === "Tidak Layak") {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="flex flex-col gap-5 px-5 md:px-10">
      <div className="bg-color-primary p-5 rounded-md">
        <p className="text-white text-sm font-medium">
          Proposal diajukan pada{" "}
          <span className="font-bold">{formattedDate}</span>
        </p>
      </div>
      <div className="mt-[-10px] overflow-auto">
        <Stepper
          orientation="vertical"
          activeStep={currentStepIndex}
          sx={stepStyle}
        >
          {filteredSteps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                style={{ marginTop: "-20px", zIndex: "999" }}
                icon={label.icon}
              >
                <div className="flex flex-col gap-1 pt-5">
                  <span className="font-bold text-md">{label.title}</span>
                  <div className="max-w-[42rem] text-sm">
                    {label.description}
                  </div>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default StepProgressBarDocument;
