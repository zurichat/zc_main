import style from "../component-styles/Link.module.css";

const Link = ({ title, to, color, underline }) => {
  return (
    <a
      href={to}
      className={`${underline && style.underline} ${
        color === "#2F80ED" && style.text_link
      }  ${color === "#00B87C" && style.pagination_link}`}
    >
      {title}
    </a>
  );
};

export default Link;
