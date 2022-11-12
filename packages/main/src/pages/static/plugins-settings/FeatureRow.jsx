import style from "./index.module.css";

const FeatureRow = props => {
  return (
    <div className={`${style.ft_row} ${props.rowOrder}`}>
      <div className={`${style.ft_col}`}>
        <img src={props.src} alt={props.alt} className={`${style.ft_img}`} />
      </div>
      <div className={`${style.ft_col}`}>
        <div className={`${style.ft_texts}`}>
          <p className={`${style.ft_text_one}`}>{props.pContent1}</p>
          <h2 className={`${style.ft_heading}`}>{props.h2Content}</h2>
          <p className={`${style.ft_p}`}>{props.pContent2}</p>
        </div>
        <div className={`${style.ft_link_wrap}`}>
          <a className={`${style.ft_link}`} href={props.href}>
            <button className={`${style.add_button}`}>Add Plugin</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureRow;
