import React, { useState, useEffect } from "react";
import cancel from "../../../assets/images/close.png";
import question from "../../../assets/images/question.png";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useForm } from "react-hook-form";
import styles from "./createchannel.modeule.css";

const CreateChannel = ({ setAddChannel, setAddPeople }) => {
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: green[600],
      "&:hover": {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity)
      }
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: green[600]
    }
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const [formValid, setFormValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm();

  const [form, setForm] = useState({
    channelname: "",
    desc: ""
  });

  useEffect(() => {
    if (form.channelname !== "" && form.desc !== "") {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [form.channelname, form.desc]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.groupname]: e.target.value
    });
  };

  const submitHandler = e => {
    setAddChannel(false);
    setAddPeople(true);
    e.preventDefault();
  };
  return (
    <div className={styles.CreateChannel__wrapper}>
      <form
        action=""
        className={styles.CreateChannel__container}
        onSubmit={submitHandler}
      >
        <div className={styles.CreateChannel__heading}>
          <div className={styles.CreateChannel__header}>
            <h4>Create a channel</h4>
            <div className={styles.question_img_container}>
              <img src={question} alt="" />
            </div>
          </div>

          <div
            onClick={() => {
              setAddChannel(false);
            }}
            className={styles.CreateChannel__header_img}
          >
            <img src={cancel} alt="" />
          </div>
        </div>

        <p className={styles.CreateChannel__content}>
          Channels are where your team communicates. They’re best when organized
          around a topic = #marketing. for example.{" "}
        </p>

        <div className={styles.channel__name__container}>
          <h6>Channel Name</h6>

          <div className={styles.createChanel_input}>
            <input
              type="text"
              placeholder="# e.g. announcement"
              id="channel_name"
              className={` ${styles.channelname__name} ${
                errors.channelname && "invalid"
              }`}
              {...register("channelname", {
                required: "# important briefings"
              })}
              onKeyUp={() => {
                trigger("channelname");
              }}
              onChange={handleChange}
            />
            {errors.channelname && <small>{errors.channelname.message}</small>}
          </div>
        </div>

        <div id="desc__container">
          <div>
            <h6>Description (optional)</h6>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              id="last_name"
              className={` ${styles.channelname__name} ${
                errors.desc && "invalid"
              }`}
              {...register("desc", {
                required:
                  "Only important information will be sent to this channel "
              })}
              onKeyUp={() => {
                trigger("desc");
              }}
              onChange={handleChange}
            />
            {errors.desc && (
              <small className={styles.small__error}>
                {errors.desc.message}
              </small>
            )}
          </div>
          <p className={styles.CreateChannel_about}>
            What is this channel about?
          </p>
        </div>

        <div className={styles.CreateChannel__switch}>
          <div className={styles.CreateChannel__switchtop}>
            <h6>Set as Private</h6>
            <p className={styles.CreateChannel__text}>
              Channels set as private can only be viewed or joined by invitation
              from an admin.
            </p>
          </div>

          <div className={styles.CreateChannel__switchbody}>
            <GreenSwitch {...label} defaultChecked />
          </div>
        </div>

        <div>
          <button
            id="btn__submit"
            className={`${styles.buton__createchannel} ${
              errors.button && "buttn"
            }`}
            {...register("button", {
              required: " "
            })}
            onKeyUp={() => {
              trigger("button");
            }}
          >
            Create Channel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateChannel;
