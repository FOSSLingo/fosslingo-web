import Cookie from "js-cookie";

export const IsAiFeaturesEnabled = () => {
  const userSetting = Cookie.get("IsAiFeaturesEnabledUser");

  if (userSetting === "enabled") {
    return true;
  }

  if (userSetting === "disabled") {
    return false;
  }
  return process.env.NEXT_PUBLIC_AI_FEATURES_ENABLED === "true"
}