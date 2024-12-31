import useThemeMode from "./useThemeMode";

type UseInverseColorProps = {
  getInverseColor: (colorLight: string, colorDark: string) => string;
};

const useInverseColor = (): UseInverseColorProps => {
  const { mode } = useThemeMode();

  function getInverseColor(colorLight: string, colorDark: string): string {
    return mode === "light" ? colorLight : colorDark;
  }

  return {
    getInverseColor
  };
};

export default useInverseColor;
