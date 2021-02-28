interface Position {
  x: number;
  y: number;
}
export interface SnowProps extends Position {
  randomRadius: number;
  g: CanvasGradient;
  distance: number;
  t: number;
}
export interface RainProps extends Position {
  distance: number;
  rainLength: number;
}
