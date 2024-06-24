import { CircularProgress, Step, StepLabel, Stepper } from "@mui/material";
import { steps } from "../../utils/constants";
import { useDocument } from "./useDocument";

const stepStyle = {
  padding: 2,
  "& .Mui-active": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "4px",
      height: "90px",
      marginY: "-29px",
      zIndex: -1,
      position: "relative",
      "@media (max-width: 768px)": {
        marginY: "-36px",
      },
      "@media (max-width: 640px)": {
        marginY: "-45px",
        height: "110px",
      },
      backgroundColor: "black",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "4px",
      height: "90px",
      marginY: "-35px",
      zIndex: -1,
      position: "relative",
      "@media (max-width: 768px)": {
        marginY: "-36px",
      },
      "@media (max-width: 640px)": {
        marginY: "-45px",
        height: "110px",
      },
      backgroundColor: "black",
    },
  },
  "& .step-icon": {
    zIndex: 1,
    position: "relative",
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
    return (
      <div className="w-full h-full text-center">
        <CircularProgress />
      </div>
    );
  }
  console.log(document);

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
      <div className="mt-[-10px] overflow-auto relative">
        <Stepper
          orientation="vertical"
          activeStep={currentStepIndex}
          sx={stepStyle}
        >
          {filteredSteps.map((label, index) => (
            <Step key={label}>
              <StepLabel style={{ marginTop: "-20px" }} icon={label.icon}>
                <div className="flex flex-col gap-1 pt-5">
                  <span className="font-bold text-sm md:text-base">
                    {label.title}
                  </span>
                  <div className="max-w-[42rem] text-xs md:text-sm">
                    {label.description}
                  </div>
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {document.status === "Perbaikan" && (
          <div className="p-3 bg-yellow-100 rounded-md mb-5">
            <p className="font-semibold text-base md:text-lg">
              Pesan Reviewer:
            </p>
            {document.reviewers.map((reviewer, index) => (
              <div key={index} className="mt-2 flex flex-col gap-3">
                <p className="font-medium text-sm md:text-base">
                  {reviewer.name}:
                </p>
                <p className="text-xs md:text-base">{reviewer.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StepProgressBarDocument;
