import { FirebaseOptions } from "@firebase/app";

export const credentialsNotSet = (options: FirebaseOptions) => {
  for (const option in options) {
    if (!options[option as keyof FirebaseOptions]) return true;
  }
  return false;
};