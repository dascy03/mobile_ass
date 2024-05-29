import { Redirect } from "expo-router";
import { withExpoSnack } from 'nativewind';

const StartPage = () => {
  return <Redirect href="/boarding1" />;
};
export default withExpoSnack(StartPage);
