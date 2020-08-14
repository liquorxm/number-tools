declare const returnVal: number | string;
interface NumberSeparateProps {
  input: number | string;
  separator?: string;
  digits?: number;
}

interface NumberSeparate {
  (params: NumberSeparateProps): number | string;
}

// declare const NumberSeparate: () => number | string;