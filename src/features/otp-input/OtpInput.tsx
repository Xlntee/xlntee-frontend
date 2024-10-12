import {
  useState,
  Fragment,
  useRef,
  ReactNode,
  Dispatch,
  KeyboardEvent,
  ChangeEvent,
  ClipboardEvent,
  FC,
  useEffect
} from "react";

import { Stack } from "@mui/material";
import { Input as BaseInput } from "@mui/base/Input";

import "./OtpInput.scss";

interface OTPProps {
  separator?: ReactNode;
  length: number;
  value: string;
  onChange: Dispatch<React.SetStateAction<string>>;
}

const OTP: FC<OTPProps> = ({ separator, length, value, onChange }) => {
  const inputRefs = useRef<HTMLInputElement[]>(new Array(length).fill(null));

  const focusInput = (targetIndex: number): void => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex: number): void => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, currentIndex: number): void => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        onChange((prevOtp) => {
          const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, currentIndex: number): void => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>, currentIndex: number): void => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <Stack direction="row" gap="10px" className="otp-input__item">
      {new Array(length).fill(null).map((_, index) => (
        <Fragment key={index}>
          <BaseInput
            aria-label={`Digit ${index + 1} of OTP`}
            slotProps={{
              input: {
                ref: (ele) => {
                  inputRefs.current[index] = ele!;
                },
                onKeyDown: (event) => handleKeyDown(event, index),
                onChange: (event) => handleChange(event, index),
                onClick: () => selectInput(index),
                onPaste: (event) => handlePaste(event, index),
                value: value[index] ?? ""
              }
            }}
          />
          {index === length - 1 ? null : separator}
        </Fragment>
      ))}
    </Stack>
  );
};

interface OTPInputProps {
  length: number;
  separator?: boolean;
  onUpdate: (value: string) => void;
}

const OTPInput: FC<OTPInputProps> = ({ length = 4, separator, onUpdate }) => {
  const [otp, setOtp] = useState<string>("");

  useEffect(() => {
    if (otp.length === length) {
      onUpdate(otp);
    }
  }, [otp]);

  return (
    <Stack className="otp-input">
      <OTP separator={separator && <span>-</span>} value={otp} onChange={setOtp} length={length} />
    </Stack>
  );
};

export default OTPInput;
