/*
ypeScript doesn’t automatically understand the type of node code assets like images(png)
in order to correct it we have to declare a module for png
*/
declare module "*.png" {
  const value: string;
  export default value;
}
