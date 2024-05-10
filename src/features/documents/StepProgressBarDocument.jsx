import { Step, StepLabel, Stepper } from "@mui/material";
import { IoMdTime } from "react-icons/io";
import { steps } from "../../utils/constants";
import { useDocument } from "./useDocument";

const stepStyle = {
  padding: 2,
  "& .Mui-active": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "8.5px",
      height: "110px",
      marginY: "-55px",
      backgroundColor: "black",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepConnector-line": {
      width: "0.5px",
      borderColor: "black",
      marginLeft: "8.5px",
      height: "110px",
      marginY: "-55px",
      backgroundColor: "black",
    },
  },
};

function StepProgressBarDocument({ id }) {
  const { isLoading, document } = useDocument(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const currentStepIndex = steps.findIndex(
    (step) => step.title === document.status
  );
  const filteredSteps = steps
    .slice(0, currentStepIndex + 1)
    .filter(
      (step) =>
        !(
          document.status === "Sedang Ditandatangani" &&
          step.title === "Tidak Layak"
        )
    );

  return (
    <div className="flex flex-col gap-5">
      <div className="bg-color-primary p-5 rounded-md">
        <p className="text-white font-medium">
          Proposal diajukan pada{" "}
          <span className="font-bold">Senin, 24 Juni 2020</span>
        </p>
      </div>
      <div className="mt-[-30px] overflow-auto">
        <Stepper
          orientation="vertical"
          activeStep={currentStepIndex}
          sx={stepStyle}
        >
          {filteredSteps.map((label, index) => (
            <Step key={label}>
              <StepLabel icon={label.icon}>
                <div className="flex flex-col gap-1 pt-10">
                  <span className="font-bold text-xl">{label.title}</span>
                  <div className="max-w-[42rem] text-lg">
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
