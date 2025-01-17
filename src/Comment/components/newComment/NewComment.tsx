import { useForm } from "react-hook-form";
import Stars from "../stars/Stars";
import styles from "./NewComment.module.css";
import { INewComment } from "../../../interfaces/INewComment";
import { newComent } from "../../../services/newComment.services";

const NewComment = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<INewComment>();

  const onSubmit = async (data: INewComment) => {
    console.log(data);
    try {
      await newComent(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Leave a Comment to this web site!</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title for the comment:
          <input
            type="text"
            {...register("title", { required: true, minLength: 8, maxLength: 40 })}
          />
          {errors.title?.type === "required" && <span>The title is required</span>}
          {(errors.title?.type === "minLength" || errors.title?.type === "maxLength") && (
            <span>The title must be 8 to 40 chars long</span>
          )}
        </label>
        <label>
          E-mail:
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && <span>Enter a valid E-mail</span>}
        </label>
        <label>
          Rate the page:
          <Stars
            value={3}
            onChange={(value) => setValue("stars", value)}
          />
          {errors.stars && <span>Rating is required</span>}
        </label>
        <label>
          Type your comment:
          <textarea
            {...register("comment", { required: true, minLength: 5, maxLength: 300 })}
          />
          {errors.comment && <span>The comment must be 5 to 300 chars long</span>}
        </label>
        <button type="submit">Send Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
