import React from "react";
import { UHCBadgeContainer, UHCBadgeNumber } from "../style";
import { useFonts } from "expo-font";

interface IProps {
  buttonType?: "primary" | "secondary" | "danger" | "secondaryDanger";
  disabled?: boolean;
  badgeNumber: number;
}

const UHCBadge: React.FunctionComponent<IProps> = ({
  buttonType,
  disabled,
  badgeNumber
}) => {
  const [loaded] = useFonts({
    "TitilliumWeb-Bold": require("../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  return (
    <UHCBadgeContainer disabled={disabled} buttonType={buttonType}>
      <UHCBadgeNumber
        disabled={disabled}
        buttonType={buttonType}
        badgeNumber={badgeNumber}
      >
        {badgeNumber > 99 ? "99+" : badgeNumber}
      </UHCBadgeNumber>
    </UHCBadgeContainer>
  );
};

UHCBadge.defaultProps = {
  buttonType: "primary",
  disabled: false
};

export default UHCBadge;
