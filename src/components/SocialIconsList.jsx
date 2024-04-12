import socialIconsData from "../data/socialIconsData";
import SocialIcon from "./SocialIcon";

export default function SocialIconsList() {
  return (
    <div className="mb-2 flex gap-1 py-2">
      {socialIconsData.map((icon) => (
        <SocialIcon
          key={icon.id}
          id={icon.id}
          name={icon.name}
          url={icon.url}
          svg={icon.svg}
        />
      ))}
    </div>
  );
}
