import styled from "styled-components";

const PostCard = ({ image, author, date, title, description }) => {
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <p>{author}</p>
        <p>{date}</p>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export const StylePostCard = styled(PostCard)``;

export default PostCard;
