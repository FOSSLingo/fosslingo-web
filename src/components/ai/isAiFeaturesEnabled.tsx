export const IsAiFeaturesEnabled = () => {
  return process.env.NEXT_PUBLIC_AI_FEATURES_ENABLED === "true"
}